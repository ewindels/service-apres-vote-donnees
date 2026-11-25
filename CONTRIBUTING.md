# Contribuer aux données de Service après-vote

Merci de prendre le temps de vérifier, corriger ou enrichir les fiches de **[service-apres-vote.fr](https://service-apres-vote.fr)**.

Ce dépôt est ouvert aux contributions sur les **données** (corrections, mises à jour de séries, ajout de sources primaires, nouvelles fiches). Pour préserver la rigueur et la cohérence éditoriale du projet, toute contribution doit respecter les règles ci-dessous.

## Principes de gouvernance

1. **Une affirmation = une source primaire vérifiable.** Les opinions, articles de presse généralistes non sourcés ou estimations invérifiables ne sont pas acceptés. Sont recevables : textes de loi, études d’impact, débats parlementaires, annexes budgétaires (*Voies et moyens*, PLF/PLFSS, PAP/RAP), statistiques publiques (Insee, DGFiP, Dares, Drees, SDES, etc.), rapports d’évaluation institutionnels (Cour des comptes, IGF, IGAS, France Stratégie, CAE, CPO, Sénat, Assemblée nationale) et recherches académiques publiées.
2. **La méthode fait foi.** Toutes les fiches suivent [`methode.md`](methode.md) : choix des effets, trois axes (*engagement*, *mesure*, *effet*), limites de longueur, règles de notation.
3. **Transparence des décisions.** Le mainteneur du projet reste responsable de la cohérence globale et de l’application de `methode.md`. En cas de refus ou de modification demandée sur une issue ou une PR, la raison est expliquée publiquement en référence à la méthode ou aux sources.

## Comment contribuer

### 1. Signaler une erreur ou proposer une mise à jour (le plus rapide)

Pas besoin de maîtriser Git : utilisez les modèles d’issues dédiés :
- [Signaler une erreur ou une imprécision](https://github.com/ewindels/service-apres-vote-donnees/issues/new?template=erreur.yml)
- [Proposer une nouvelle source ou une mise à jour de série](https://github.com/ewindels/service-apres-vote-donnees/issues/new?template=mise-a-jour.yml)
- [Suggérer un dispositif à auditer](https://github.com/ewindels/service-apres-vote-donnees/issues/new?template=nouveau-dispositif.yml)

### 2. Proposer une modification directe (Pull Request)

Pour une correction ou une mise à jour de série sur une fiche existante (`dispositifs/<id>.md`) :
1. Forkez le dépôt et créez une branche dédiée.
2. Modifiez la fiche concernée et mettez à jour `date_maj`.
3. Vérifiez que la validation passe :
   ```bash
   npm install
   node scripts/check-fiche.mjs <id> --no-quotes
   ```
4. Ouvrez une Pull Request en indiquant clairement :
   - les liens vers les documents primaires (page ou tableau précis) ;
   - ce qui change dans les chiffres, les constats ou les notes.

### 3. Proposer une nouvelle fiche

Avant de rédiger une fiche complète, **ouvrez d’abord une issue** avec le modèle *Nouveau dispositif* afin de valider le périmètre (dispositif autonome vs réforme d’une fiche existante, thème, instrument, effets à évaluer). Cela évite un travail important qui risquerait d’être refusé ou profondément remanié.

## Règles de forme vérifiées automatiquement

Chaque PR lance automatiquement `npm test` :
- **Frontmatter YAML uniquement**, aucun corps Markdown après `---`.
- `resume` : 300 caractères max, 3 phrases max.
- `constat` : 120 caractères max, 1 seule phrase.
- `points` : 4 points max, 200 caractères max par point.
- `libelle` : 40 caractères max ; `indicateur` : 80 caractères max.
- Toutes les URLs doivent être valides et pointer vers des sources publiques vérifiables.
- Français courant, phrases courtes, sans jargon administratif inutile.
