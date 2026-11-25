# Service après-vote — Données publiques

Ce dépôt contient l’ensemble des données qui alimentent **[service-apres-vote.fr](https://service-apres-vote.fr)** : les fiches d’audit des politiques publiques françaises, les référentiels macroéconomiques utilisés (inflation, séries partagées, taxonomie) et la méthodologie qui encadre la notation.

Le site est compilé directement à partir de ce dépôt : toute modification publiée ici met automatiquement à jour le site, et son historique reste entièrement consultable.

## Structure du dépôt

| Chemin | Contenu |
| --- | --- |
| `dispositifs/*.md` | Une fiche par dispositif public (frontmatter YAML structuré, sans corps Markdown). |
| `referentiels/inflation.json` | Indice des prix à la consommation Insee (IPC base 2015, série `001763852`) utilisé pour actualiser les cibles budgétaires en euros constants. |
| `referentiels/series.json` | Séries de contexte macroéconomiques partagées entre plusieurs fiches. |
| `referentiels/taxonomie.json` | Liste officielle des thèmes et des instruments. |
| `methode.md` | La méthode complète (choix des effets, trois axes, règles de preuve et de notation). |
| `scripts/check-fiche.mjs` | Script de validation du schéma, des limites de longueur et du calcul des notes. |

## Contester un point, corriger une erreur ou proposer un dispositif

Toutes les fiches sont contestables à partir de sources primaires vérifiables (lois, études d’impact, annexes budgétaires, Insee, DGFiP, Cour des comptes, France Stratégie, évaluations académiques publiées).

- **Signaler une erreur ou un biais** : ouvrez une [issue « Erreur »](https://github.com/ewindels/service-apres-vote-donnees/issues/new?template=erreur.yml) en indiquant la fiche concernée et la source primaire.
- **Ajouter un chiffre récent ou un nouveau rapport** : ouvrez une [issue « Mise à jour »](https://github.com/ewindels/service-apres-vote-donnees/issues/new?template=mise-a-jour.yml) ou proposez directement une Pull Request.
- **Suggérer un prochain dispositif à auditer** : ouvrez une [issue « Nouveau dispositif »](https://github.com/ewindels/service-apres-vote-donnees/issues/new?template=nouveau-dispositif.yml).

Avant d’ouvrir une Pull Request, consultez [`CONTRIBUTING.md`](CONTRIBUTING.md) et [`methode.md`](methode.md).

## Valider localement

```bash
npm install
npm test                                    # valide toutes les fiches
node scripts/check-fiche.mjs <id-fiche>     # valide une fiche précise
```

## Exports et réutilisation

Les fiches sont également disponibles en téléchargement direct sur le site :
- JSON complet : https://service-apres-vote.fr/data/dispositifs.json
- CSV synthétique : https://service-apres-vote.fr/data/dispositifs.csv

## Licence

- **Données, fiches et méthodologie** (`dispositifs/`, `referentiels/`, `methode.md`) : **Licence Ouverte / Open Licence v2.0 (Etalab)**, compatible CC BY 4.0. Merci de citer *Service après-vote (service-apres-vote.fr)* et la date de mise à jour.
- **Scripts de validation** (`scripts/`) : **Licence MIT**.

Voir [`LICENSE`](LICENSE) pour le détail.
