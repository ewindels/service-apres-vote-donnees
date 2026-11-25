#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { parse } from 'yaml';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const DISPOSITIFS_DIR = path.join(ROOT, 'dispositifs');
const REFERENTIELS_DIR = path.join(ROOT, 'referentiels');

const taxonomie = JSON.parse(fs.readFileSync(path.join(REFERENTIELS_DIR, 'taxonomie.json'), 'utf8'));
const seriesRef = JSON.parse(fs.readFileSync(path.join(REFERENTIELS_DIR, 'series.json'), 'utf8'));
const inflationRef = JSON.parse(fs.readFileSync(path.join(REFERENTIELS_DIR, 'inflation.json'), 'utf8'));

const THEMES = Object.keys(taxonomie.themes);
const INSTRUMENTS = Object.keys(taxonomie.instruments);
const SERIES_PARTAGEES = Object.keys(seriesRef);
const PRODUCTEURS = ['etat', 'independant', 'estimation', 'contexte'];
const IPC = inflationRef.valeurs;

const cliArgs = process.argv.slice(2);
const checkAll = cliArgs.includes('--all');
const skipQuotes = cliArgs.includes('--no-quotes');
const arg = cliArgs.find((a) => !a.startsWith('--'));

if (!checkAll && !arg) {
  console.error('Usage: node scripts/check-fiche.mjs <id-ou-chemin.md> [--no-quotes]');
  console.error('       node scripts/check-fiche.mjs --all [--no-quotes]');
  process.exit(2);
}

const ciblePourAnnee = (e, annee) => {
  const c = e.engagement?.cibles;
  if (!c?.periodes?.length) return null;
  const p = [...c.periodes].reverse().find((x) => annee >= x.debut && (x.fin === undefined || annee <= x.fin));
  return p ? { valeur: p.valeur, anneeRef: p.annee_ref ?? p.debut } : null;
};

const ajuster = (val, a0, a1) => (IPC[a0] && IPC[a1] ? val * (IPC[a1] / IPC[a0]) : val);

const noteEffet = (e) => {
  if (!e.effet) return 'a_verifier';
  if (e.effet.note) return e.effet.note;
  const pts = (e.serie?.points ?? []).filter(
    (p) => p.valeur !== null && p.producteur !== 'estimation' && p.producteur !== 'contexte',
  );
  if (!pts.length) return 'non_mesure';
  const last = pts.reduce((a, b) => (b.annee > a.annee ? b : a));
  const cible = ciblePourAnnee(e, last.annee);
  if (!cible) return 'sans_reference';
  const r = last.valeur / ajuster(cible.valeur, cible.anneeRef, last.annee);
  return e.nature === 'recettes'
    ? (r >= 1 ? 'atteint' : r >= 0.5 ? 'limite' : 'non_atteint')
    : (r <= 1 ? 'maitrise' : r <= 1.5 ? 'depasse' : 'tres_depasse');
};

function checkFile(filePath, quiet) {
  const ficheId = path.basename(filePath, '.md');
  if (!fs.existsSync(filePath)) {
    console.error(`Fichier introuvable : ${filePath}`);
    return { errors: [`Fichier introuvable : ${filePath}`], warnings: [] };
  }

  const raw = fs.readFileSync(filePath, 'utf8');
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\s*([\s\S]*)$/);
  if (!match) {
    return { errors: [`${ficheId} : frontmatter YAML introuvable (--- ... ---)`], warnings: [] };
  }

  const data = parse(match[1]);
  const body = match[2].trim();
  const errors = [];
  const warnings = [];

  if (body) errors.push('La fiche ne doit pas contenir de corps Markdown après le frontmatter YAML');

  const checkUrl = (ctx, url) => {
    try {
      new URL(url);
    } catch {
      errors.push(`${ctx} : URL invalide (${url})`);
    }
  };

  const checkConstat = (ctx, text) => {
    if (typeof text !== 'string' || !text.trim()) {
      errors.push(`${ctx}.constat manquant`);
      return;
    }
    if (text.length > 120) errors.push(`${ctx}.constat trop long (${text.length}/120 car.)`);
    if (/[.!?…»]\s+[A-ZÀ-Ý«]/.test(text)) errors.push(`${ctx}.constat doit tenir en une seule phrase`);
  };

  const checkPoints = (ctx, pts) => {
    if (!Array.isArray(pts)) return;
    if (pts.length > 4) errors.push(`${ctx}.points : trop d'éléments (${pts.length}/4)`);
    pts.forEach((p, i) => {
      if (typeof p !== 'string') errors.push(`${ctx}.points[${i}] n'est pas une chaîne`);
      else if (p.length > 200) errors.push(`${ctx}.points[${i}] trop long (${p.length}/200 car.)`);
    });
  };

  const checkSources = (ctx, srcs) => {
    if (!Array.isArray(srcs) || srcs.length === 0) {
      errors.push(`${ctx}.sources : au moins une source requise`);
      return;
    }
    srcs.forEach((s, i) => {
      if (!s?.label || !s?.url) errors.push(`${ctx}.sources[${i}] doit avoir label et url`);
      else checkUrl(`${ctx}.sources[${i}]`, s.url);
    });
  };

  // Champs racine
  if (!data.titre) errors.push('titre manquant');
  if (typeof data.resume !== 'string') {
    errors.push('resume manquant');
  } else {
    if (data.resume.length > 300) errors.push(`resume trop long (${data.resume.length}/300 car.)`);
    const sentences = (data.resume.match(/[.!?…](\s|$)/g) ?? []).length;
    if (sentences > 3) errors.push(`resume en trois phrases au plus (${sentences})`);
  }
  if (!THEMES.includes(data.theme)) errors.push(`theme invalide : ${data.theme}`);
  if (!INSTRUMENTS.includes(data.instrument)) errors.push(`instrument invalide : ${data.instrument}`);
  if (!['en_vigueur', 'abroge'].includes(data.statut)) errors.push(`statut invalide : ${data.statut}`);
  if (!data.date_maj || Number.isNaN(new Date(data.date_maj).getTime())) errors.push('date_maj manquant ou invalide');
  if ('relecture' in data) errors.push('relecture est supprimé du schéma');

  if (!quiet) console.log(`Fiche : ${data.titre ?? filePath} (${data.theme} / ${data.instrument})`);

  const minEffets = data.instrument === 'regle' ? 1 : 2;
  if (!Array.isArray(data.effets) || data.effets.length < minEffets) {
    errors.push(`effets manquant ou moins de ${minEffets} effet${minEffets > 1 ? 's' : ''}`);
  } else {
    data.effets.forEach((e, idx) => {
      const ctx = `effets[${idx}] (${e.libelle ?? '?'})`;
      if (!e.libelle || e.libelle.length > 40) errors.push(`${ctx} : libelle manquant ou > 40 car.`);
      if (!e.indicateur || e.indicateur.length > 80) errors.push(`${ctx} : indicateur manquant ou > 80 car.`);
      for (const ax of ['engagement', 'mesure', 'effet']) {
        if (e[ax]) {
          checkConstat(`${ctx}.${ax}`, e[ax].constat);
          checkPoints(`${ctx}.${ax}`, e[ax].points);
          checkSources(`${ctx}.${ax}`, e[ax].sources);
        }
      }
      if (e.engagement?.cibles?.periodes) {
        e.engagement.cibles.periodes.forEach((p, i) => {
          if (p.fin !== undefined && p.fin < p.debut) errors.push(`${ctx}.engagement.cibles.periodes[${i}] : fin < debut`);
        });
      }
      if ((e.nature ?? 'comportement') === 'comportement' && e.effet && !e.effet.note) {
        errors.push(`${ctx}.effet.note requis pour nature=comportement`);
      }
      if (e.estimation) {
        checkConstat(`${ctx}.estimation`, e.estimation.constat);
        checkPoints(`${ctx}.estimation`, e.estimation.points);
        checkSources(`${ctx}.estimation`, e.estimation.sources);
      }
      if (e.serie) {
        if (!e.serie.ref && (!Array.isArray(e.serie.points) || e.serie.points.length === 0)) {
          errors.push(`${ctx}.serie doit définir points ou ref`);
        }
        if (e.serie.ref && !SERIES_PARTAGEES.includes(e.serie.ref)) {
          errors.push(`${ctx}.serie.ref inconnue : ${e.serie.ref}`);
        }
        const seenYears = new Set();
        let prevYear = -Infinity;
        (e.serie.points ?? []).forEach((p, i) => {
          if (p.producteur && !PRODUCTEURS.includes(p.producteur)) {
            errors.push(`${ctx}.serie.points[${i}].producteur invalide : ${p.producteur}`);
          }
          if (typeof p.annee === 'number') {
            if (seenYears.has(p.annee)) errors.push(`${ctx}.serie.points : année en doublon (${p.annee})`);
            if (p.annee < prevYear) errors.push(`${ctx}.serie.points : années non triées (${p.annee} après ${prevYear})`);
            seenYears.add(p.annee);
            prevYear = p.annee;
          }
        });
      }
      if (!quiet) {
        console.log(
          `  - ${e.role} [${e.libelle}] : engagement=${e.engagement?.note ?? 'a_verifier'} | mesure=${e.mesure?.note ?? 'a_verifier'} | effet=${noteEffet(e)}`,
        );
      }
    });
  }

  if (data.cout_fonctionnement) {
    const cf = data.cout_fonctionnement;
    if (!['etat', 'tiers', 'non_mesure'].includes(cf.mesure)) {
      errors.push(`cout_fonctionnement.mesure invalide : ${cf.mesure}`);
    }
    if (cf.montant !== undefined && (typeof cf.montant !== 'number' || cf.montant < 0)) {
      errors.push(`cout_fonctionnement.montant invalide : ${cf.montant}`);
    }
    if (cf.part_budget !== undefined && (typeof cf.part_budget !== 'number' || cf.part_budget < 0)) {
      errors.push(`cout_fonctionnement.part_budget invalide : ${cf.part_budget}`);
    }
    checkConstat('cout_fonctionnement', cf.constat);
    checkPoints('cout_fonctionnement', cf.points);
    checkSources('cout_fonctionnement', cf.sources);
    if (!quiet) {
      console.log(`  - cout_fonctionnement : mesure=${cf.mesure}${cf.montant !== undefined ? ` | montant=${cf.montant}` : ''}`);
    }
  } else if (!quiet) {
    console.log('  - cout_fonctionnement : a_verifier');
  }

  // Vérifications complémentaires (jargon, citations locales)
  const checkJargon = (ctx, text) => {
    if (typeof text !== 'string') return;
    if (/\bDGFiP\b/.test(text) && !/impôts\s*\(DGFiP\)/i.test(text)) {
      warnings.push(`${ctx} : préférer « les impôts (DGFiP) » à « DGFiP » seul`);
    }
    if (/\brendement\b/i.test(text)) {
      warnings.push(`${ctx} : préférer « recettes » à « rendement »`);
    }
  };
  checkJargon('resume', data.resume);
  (data.effets ?? []).forEach((e, idx) => {
    for (const ax of ['engagement', 'mesure', 'effet']) {
      checkJargon(`effets[${idx}].${ax}.constat`, e[ax]?.constat);
    }
    if (e.mesure?.note && e.mesure.note !== 'aucune' && !e.serie) {
      warnings.push(
        `effets[${idx}] (${e.libelle}) : mesure=${e.mesure.note} mais aucune série sur le graphique`,
      );
    }
  });
  if (data.cout_fonctionnement) {
    checkJargon('cout_fonctionnement.constat', data.cout_fonctionnement.constat);
  }

  if (!skipQuotes) {
    const quotes = [];
    const collectQuotes = (ctx, text) => {
      if (typeof text !== 'string') return;
      const re = /«\s*([^»]+?)\s*»/g;
      let m;
      while ((m = re.exec(text)) !== null) {
        const q = m[1].trim();
        if (q.length >= 15) quotes.push({ ctx, q });
      }
    };
    collectQuotes('resume', data.resume);
    (data.effets ?? []).forEach((e, idx) => {
      for (const ax of ['engagement', 'mesure', 'effet', 'estimation']) {
        if (!e[ax]) continue;
        collectQuotes(`effets[${idx}].${ax}.constat`, e[ax].constat);
        (e[ax].points ?? []).forEach((p, i) => collectQuotes(`effets[${idx}].${ax}.points[${i}]`, p));
      }
    });
    if (data.cout_fonctionnement) {
      collectQuotes('cout_fonctionnement.constat', data.cout_fonctionnement.constat);
      (data.cout_fonctionnement.points ?? []).forEach((p, i) => collectQuotes(`cout_fonctionnement.points[${i}]`, p));
    }

    if (quotes.length) {
      const normQuote = (s) =>
        s
          .replace(/-\r?\n\s*/g, '')
          .replace(/[’‘]/g, "'")
          .replace(/[\u00a0\u202f\s]+/g, ' ')
          .trim()
          .toLowerCase();

      const listTxts = (dir) => {
        if (!fs.existsSync(dir)) return [];
        const out = [];
        for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
          const full = path.join(dir, entry.name);
          if (entry.isDirectory()) out.push(...listTxts(full));
          else if (entry.name.endsWith('.txt') && !entry.name.endsWith('.links.txt')) out.push(full);
        }
        return out;
      };

      const localTxts = listTxts(path.join(ROOT, 'sources', ficheId));
      const cache = new Map();
      const readNorm = (p) => {
        if (!cache.has(p)) cache.set(p, normQuote(fs.readFileSync(p, 'utf8')));
        return cache.get(p);
      };

      const matchInFile = (q, file) => {
        const text = readNorm(file);
        const parts = q.split(/\[\s*(?:\.\.\.|…)\s*\]|\(\s*(?:\.\.\.|…)\s*\)/).map(normQuote).filter((x) => x.length >= 4);
        return parts.length > 0 && parts.every((part) => text.includes(part));
      };

      let commonTxts = null;
      if (!quiet) console.log(`\nCitations vérifiées (${quotes.length}) :`);
      for (const { ctx, q } of quotes) {
        let found = localTxts.find((f) => matchInFile(q, f));
        if (!found) {
          if (commonTxts === null) commonTxts = listTxts(path.join(ROOT, 'sources', '_communes'));
          found = commonTxts.find((f) => matchInFile(q, f));
        }
        const preview = q.length > 65 ? `${q.slice(0, 62)}...` : q;
        if (found) {
          if (!quiet) console.log(`  ✓ « ${preview} » (${path.basename(found)})`);
        } else {
          warnings.push(`Citation non retrouvée mot pour mot (${ctx}) : « ${q} »`);
          if (!quiet) console.log(`  ✗ « ${preview} » (INTROUVABLE dans sources/)`);
        }
      }
    }
  }

  return { errors, warnings };
}

if (checkAll) {
  const files = fs.readdirSync(DISPOSITIFS_DIR).filter((f) => f.endsWith('.md')).sort();
  let totalErrors = 0;
  for (const f of files) {
    const { errors } = checkFile(path.join(DISPOSITIFS_DIR, f), true);
    if (errors.length) {
      totalErrors += errors.length;
      console.error(`✗ ${f} :`);
      errors.forEach((e) => console.error(`    ${e}`));
    }
  }
  if (totalErrors > 0) {
    console.error(`\n${totalErrors} erreur(s) détectée(s) sur ${files.length} fiches.`);
    process.exit(1);
  }
  console.log(`✓ ${files.length} fiches valides.`);
  process.exit(0);
}

const filePath = arg.endsWith('.md') ? arg : path.join(DISPOSITIFS_DIR, `${arg}.md`);
const { errors, warnings } = checkFile(filePath, false);

if (warnings.length) {
  console.log(`\n${warnings.length} avertissement(s) :`);
  warnings.forEach((w) => console.log(`  ⚠ ${w}`));
}
if (errors.length) {
  console.error(`\n${errors.length} erreur(s) :`);
  errors.forEach((err) => console.error(`  ✗ ${err}`));
  process.exit(1);
}
console.log('\n✓ Schéma et longueurs valides.');
