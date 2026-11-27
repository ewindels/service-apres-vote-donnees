# Méthode d'évaluation : les effets d'un dispositif

*La méthode de référence du site, à faire évoluer. Elle a remplacé la méthode des cinq questions.*

## 1. Pourquoi cette méthode

La méthode précédente posait cinq questions, chacune jugée sur deux axes, et en tirait deux verdicts. Elle était complète, mais lourde à lire et à produire, et ne disait pas clairement l'essentiel : savait-on ce que la loi devait changer, s'est-on donné les moyens de le vérifier, et le changement a-t-il eu lieu ?

Cette méthode part de cette question, effet par effet.

**La règle de tout ajout.** Chaque élément de la fiche doit apprendre au lecteur quelque chose d'essentiel qu'aucun autre ne dit déjà. « Utile » ne suffit pas : il faut que l'information vaille la complexité et l'attention qu'elle coûte, à la lecture comme à la production.

## 2. Le principe : trois axes par effet

Pour chaque effet important d'un dispositif, la fiche répond à trois questions, chacune notée en vert, orange ou rouge :

1. **Engagement :** l'État s'est-il fixé un objectif chiffré ?
2. **Mesure :** peut-on suivre l'effet, et l'État l'avait-il prévu ?
3. **Effet :** le dispositif fait-il ce qu'il visait ?

Les trois axes sont indépendants, et aucun n'efface les autres. Un dispositif peut avoir un effet excellent sans que l'État se soit engagé sur rien, ou un engagement précis jamais vérifié. Le lecteur lit d'abord l'effet, la question qu'il se pose ; l'engagement et la mesure disent ensuite si l'État s'était donné les moyens de rendre des comptes.

**On juge le dispositif dans son état actuel.** Les réformes successives n'ont pas chacune leur ligne. Chaque engagement est daté, et les réformes restent visibles sur les graphiques et dans le bloc « Le dispositif » (voir section 4, « Réformes »).

**La charge de la preuve porte sur l'existence du dispositif.** On audite un dispositif (impôt, dépense, niche, règle) pour vérifier si son existence est justifiée, pas sa suppression : supprimer un dispositif n'est pas un dispositif. Lorsqu'un dispositif a été supprimé ou largement réduit (taxe d'habitation sur les résidences principales, CVAE…), la fiche porte sur le dispositif lui-même et son histoire ; les effets observés de sa suppression servent de preuve rétrospective pour mesurer ce qu'il produisait réellement. Seules les réformes ciblées d'un grand impôt pérenne assorties d'une promesse économique propre (baisse du taux d'IS, remplacement de l'ISF par l'IFI) font exception.

## 3. Choisir les effets

### Ce qu'on liste

La question de fond : **quels effets un économiste ou un responsable politique compétent aurait-il prédits, et aurait-il dû mesurer, s'il était rigoureux ?** Que le gouvernement les ait mentionnés ou non.

Règles :

* **On liste des résultats, pas des mécanismes.** Pour la taxe sur le soda, l'effet est la consommation de sucre. Les prix, la reformulation des recettes et le report vers d'autres produits expliquent ce résultat, mais n'en sont pas un : un report vers les gâteaux se voit dans la consommation totale de sucre. Les mécanismes servent de preuves dans les points de l'axe « effet » (voir section 7).
* **Pour chaque effet, on retient l'indicateur le plus proche du but final qui reste mesurable et attribuable au dispositif.** Pour le soda, c'est la consommation de sucre plutôt que l'obésité : l'obésité est le vrai but, mais trop d'autres causes la font varier pour qu'on attribue un écart à la taxe.
* **On ne liste pas de descriptions.** Le taux, l'assiette ou le redevable figurent dans le bloc « Le dispositif ».
  * La répartition « légale » ou mécanique de la charge ou de l'avantage (qui verse la taxe, ou quels déciles bénéficient d'une réduction d'impôt sur le revenu) est une description, pas un effet : elle figure dans `concernes` ou en point factuel, sans faire l'objet d'une ligne notée.
  * En revanche, qui supporte *réellement* le coût une fois que le marché a réagi peut être un effet. Par exemple, une aide au logement captée par des hausses de loyer.

### Quelles lignes

* **L'effet recherché**, toujours : la raison d'être du dispositif dans son état actuel.
* **L'effet budgétaire**, toujours pour un instrument financier (recettes d'une taxe, coût d'une dépense ou d'une niche) ; **facultatif pour une règle** sans flux budgétaire structurant. Pour une règle, les dépenses de mise en œuvre ou de contrôle (changement de panneaux, gestion d'une plateforme) figurent dans `cout_fonctionnement`, sauf si la règle crée un enjeu budgétaire propre majeur (comme le report de l'âge de la retraite).
* **Les effets secondaires**, seulement s'ils passent les quatre filtres :
  1. C'est un changement de comportement ou de marché, pas une description ni une répartition mécanique du barème.
  2. Il était prévisible et on peut le sourcer : l'analyse économique classique de ce type d'outil le prédit, ou l'évaluation d'un dispositif comparable, ou un rapport public. Cela empêche la liste de devenir notre opinion.
  3. Son caractère positif ou négatif est consensuel (hausse des loyers, effet d'aubaine, fraude, destruction d'emplois, non-recours) : on ne crée jamais une ligne d'effet notée sur un arbitrage politique ou idéologique (par exemple, juger en rouge qu'une réduction d'impôt bénéficie aux ménages imposables aisés, ce qui oppose équité horizontale et redistribution verticale).
  4. Il peut changer le jugement porté sur le dispositif. Sinon, il devient au plus un point d'un autre axe.
  * Exemples : les hausses de loyer pour une aide au logement ; l'effet d'aubaine pour un crédit d'impôt, c'est-à-dire des entreprises qui auraient agi de toute façon.
  * **L'absence de mesure n'est jamais un motif d'exclusion** : un effet secondaire important qui passe ces trois filtres doit être inclus dans la fiche même s'il n'a jamais été mesuré (`mesure: aucune`, `effet: non_mesure`). Rendre visible ce que l'État n'a pas mesuré fait partie de l'audit.

Une fiche compte **une à quatre lignes** (au moins deux pour un instrument financier : effet recherché et effet budgétaire). Le nombre n'est pas fixé : une fiche à deux lignes — ou à une seule ligne pour une règle sans enjeu budgétaire ni effet secondaire retenu — est normale.

### Parcimonie et orthogonalité

Pour arbitrer quels effets retenir, scinder ou écarter, on raisonne comme une analyse en composantes principales : on cherche le petit nombre d'axes qui résument l'essentiel sans redondance.

* **Garder les deux** si deux effets sont tous les deux importants et apportent des informations **relativement orthogonales** — en particulier lorsque leurs résultats divergent (par exemple, pour le Pacte Dutreil, le maintien du contrôle familial *atteint* d'un côté, et l'investissement et l'emploi *non atteints* de l'autre).
* **N'en retenir qu'un** si deux effets se recoupent largement ou si l'un est clairement plus central et pertinent que l'autre : l'effet secondaire ou redondant devient alors un point factuel dans la carte principale.

### Plusieurs raisons d'être

* **Un objectif de financement** (« rapporter des recettes à la sécurité sociale ») est porté par la ligne budgétaire. Il ne fait pas de la ligne budgétaire un effet recherché. C'est le cas du soda : son effet recherché est la baisse du sucre, ses recettes sont jugées sur leur propre ligne.
* **Deux objectifs de comportement réellement distincts** (par exemple, réduire une consommation et développer une filière) : les deux lignes sont marquées « effet recherché ». Le bilan retient l'effet le moins favorable des deux, sauf lorsqu'un objectif est *atteint* et l'autre *non atteint* : le bilan agrégé est alors *limité*.

## 4. Les trois axes

### Engagement

| Couleur | Valeur | Sens |
| --- | --- | --- |
| vert | **Chiffré** | Une cible chiffrée avec un horizon (ou un plafond, pour un effet indésirable). |
| orange | **Sans chiffre** | L'effet est évoqué (« réduire la consommation »), sans cible mesurable. Un point cite la phrase. |
| rouge | **Ignoré** *(ou **Aucun chiffrage**)* | Rien dans les sources ci-dessous. Pour un effet secondaire prévisible, c'est un constat en soi ; sur une ligne budgétaire, dépense votée à guichet ouvert sans plafond ni prévision sérieuse. |

**Où chercher : le standard d'une entreprise cotée.** Un chiffre compte s'il a été rendu public par le gouvernement ou le rapporteur, par les canaux où un lecteur sérieux le chercherait. C'est l'équivalent des objectifs qu'une entreprise annonce dans ses communiqués ou son rapport annuel. Une annonce en séance ou dans un communiqué compte donc. On consulte, dans cet ordre :

1. l'exposé des motifs de l'article ;
2. l'étude d'impact ou l'évaluation préalable ;
3. le rapport du rapporteur général ou de la commission ;
4. le compte rendu du débat sur l'article, à l'Assemblée et au Sénat ;
5. le communiqué ou le dossier de presse du ministère au moment du vote ;
6. les indicateurs du projet de loi de finances, l'année du vote et la suivante.

Si le chiffre n'est dans aucune de ces sources, il est **« sans chiffre »**. Un objectif qu'il faut des heures de fouille pour retrouver n'a pas été communiqué, et ne peut pas être opposé à l'État. Les sources de l'axe listent tous les documents consultés.

**Cibles issues d'un plan national.** Un objectif chiffré publié hors de la loi fiscale, dans un plan gouvernemental officiel (par exemple un programme national de lutte contre le tabac), compte comme engagement chiffré si trois conditions sont réunies : il est chiffré et daté, il porte sur l'indicateur exact suivi par la fiche, et le dispositif en est le levier principal. Un point précise alors que la cible couvre l'ensemble du plan. À l'inverse, une recommandation individuelle non datée (un verre de boisson sucrée par jour dans le PNNS) ou un objectif macroéconomique qui dépasse largement le dispositif (3 % du PIB en recherche pour le CIR) restent « sans chiffre ».

**Une estimation n'est pas toujours une cible.** Une estimation de recettes supplémentaires « à comportements inchangés », donnée pour une réforme, est un calcul mécanique, pas un engagement sur ce que rapportera le dispositif. Elle n'est pas une cible. La cible reste la dernière annonce du rendement total du dispositif, avec sa date, et ces estimations figurent dans les points de l'engagement. Exemple : le soda garde sa cible de 120 M€ (2012), malgré les estimations des réformes de 2018 et 2025.

**Lignes budgétaires (`role: budget`, en particulier `nature: cout`).** Pour éviter de traiter à égalité une enveloppe encadrée et une dépense ouverte sans chiffrage, l'axe « Engagement » distingue trois niveaux sur les lignes budgétaires :
* **`chiffre` (vert)** : un plafond ou une trajectoire pluriannuelle chiffrée et en vigueur sur le périmètre du dispositif ;
* **`sans_chiffre` (orange)** : une cible chiffrée antérieure abandonnée (conservée dans `engagement.cibles` sur ses années passées, par exemple MaPrimeRénov' ou le bonus écologique), une estimation de coût ponctuelle sur le bon périmètre mais sans plafond pérenne, ou un impôt ancien à vocation de rendement sans cible pluriannuelle globale ;
* **`ignore` (rouge, affiché « Aucun chiffrage »)** : une dépense ou une perte de recettes votée à guichet ouvert sans plafond ni prévision sérieuse de coût sur son périmètre (par exemple le CPF 2018, le bouclier tarifaire, les aides à l'embauche d'apprentis ou le Pacte Dutreil).

Une enveloppe annuelle votée en loi de finances (LFI) ou une trajectoire de *montée en puissance* de moyens (par exemple une loi de programmation promettant un triplement de crédits) **n'est pas un plafond de maîtrise de coût** : ne la renseigne pas comme `cibles` en `sens: au_plus` (ce qui produirait un verdict « Maîtrisé » trompeur en cas de sous-exécution faute de bénéficiaires ou de gel de crédits). Retiens `sans_chiffre` s'il n'existe pas de plafond pérenne sur le coût complet, et explique le décrochage dans les points. De même, pour un dispositif co-financé par des fonds publics et des acteurs privés obligatoires (par exemple Assurance maladie obligatoire et complémentaires santé responsables), la série de la ligne `role: budget` suit le **seul coût public**, tandis que la charge privée obligatoire est documentée dans les points ou, si elle passe les quatre filtres, dans un effet secondaire dédié.

**Cibles en variation ou en fourchette.** Lorsqu'une promesse officielle est annoncée en fourchette (par exemple « 300 à 400 vies sauvées par an » pour les 80 km/h), on retient la borne minimale comme seuil d'atteinte (`au_moins: 300`) et la fourchette complète figure dans les points. Lorsqu'elle porte sur une variation par rapport à un scénario contrefactuel, la série trace soit l'effet causal estimé dans l'unité de la cible, soit le niveau annuel de l'indicateur avec la cible convertie dans cette unité (et expliquée dans les points).

**Réforme ciblée d'un grand impôt.** Lorsque, par exception (section 2), une fiche porte sur une réforme ciblée d'un grand impôt pérenne assortie d'une promesse économique propre (baisse du taux d'IS, remplacement de l'ISF par l'IFI), sa ligne budgétaire porte sur le **coût propre de la réforme** (`nature: cout`, manque à gagner annuel estimé), comparé à la perte annoncée (`sens: au_plus`), et non sur les recettes totales de l'impôt résiduel.

**Coût brut, coût statique et comparaisons pluriannuelles.** Sur toute ligne budgétaire (`role: budget`, `nature: cout`), lorsqu'un montant ne déduit ni d'éventuels effets de retour macroéconomiques ou fiscaux (ex. chiffrage *Voies et moyens* « à comportements inchangés » d'une niche ou baisse d'impôt) ni les dépenses substituées (ex. allocations versées en lieu et place d'une autre prestation), le `constat` — et le `resume` s'il reprend le chiffre — le qualifie explicitement de **« coût brut »** ou **« coût statique »** (et précise « à l'entrée, avant imposition à la sortie » pour un différé d'impôt). De même, sur une période longue (> 10 ans), on évite les multiplicateurs en euros courants sans mentionner l'inflation ni les extensions de périmètre décidées par la loi, afin de ne pas présenter une revalorisation votée comme un dérapage.

### Mesure

| Couleur | Valeur | Sens |
| --- | --- | --- |
| vert | **Prévue** | Le texte ou ses documents prévoyaient une mesure régulière de l'effet au vote (indicateur suivi, rapport obligatoire, évaluation à date fixe), et elle existe toujours. |
| orange | **Interrompue** | Une mesure était prévue au vote et a bien été menée, mais s'est arrêtée alors que le dispositif continue (par exemple un comité d'évaluation dissous après cinq ans). |
| orange | **Tardive** | L'État a organisé une mesure après coup : il l'a commandée ou programmée. La fiche donne la date. |
| orange | **Par d'autres** | L'État n'a rien organisé, mais des chercheurs ou une institution indépendante ont mesuré l'effet. |
| rouge | **Aucune** | Personne n'a mesuré l'effet. Les sources de l'axe disent où nous avons cherché. |

Cet axe juge **l'État** : une mesure faite par d'autres ne vaut jamais vert. La régularité compte aussi : une seule étude en dix ans se voit dans le graphique (section 6).

**Suivi administratif vs évaluation prévue par la loi.** La note `prevue` (vert) exige que l'État assure un suivi régulier de l'indicateur retenu **et** ait honoré les bilans ou évaluations prévus au vote. Si une clause légale d'évaluation n'a pas été remise à échéance (ou a été remplacée par une mission tardive), ou si le suivi causal prévu au lancement a été arrêté alors que seules des statistiques administratives descriptives continuent, la note passe en **`tardive`** ou **`interrompue`** (orange).

**Notre estimation.** La plupart des dispositifs n'ont pas de série publique sur leur indicateur. La fiche donne alors, chaque fois que des données publiques le permettent, notre propre ordre de grandeur, tiré de la statistique publique ou de la recherche économique. Quatre règles :
* **Toujours signalée comme telle** : encadré en pointillés, points en pointillés sur le graphique, libellé « Notre estimation ».
* **Chaque nombre est justifié** : la formule, chaque donnée d'entrée avec sa source et sa page, le résultat, et ses limites (périmètre, arrondis, ce qu'elle ne dit pas sur la cause).
* **Une solidité** : *bonne* pour un chiffre publié propre au dispositif, simplement actualisé ou combiné ; *moyenne* pour un calcul simple sur des données officielles proches de l'indicateur ; *faible* pour une moyenne d'un autre périmètre, ou un résultat transposé d'un autre pays.
* **Elle ne change aucune note** : ni la mesure (l'État n'a toujours rien publié), ni l'effet (qui suit la cible ou les évaluations).

### Effet

| Couleur | Valeur | Avec une cible chiffrée | Sans cible |
| --- | --- | --- | --- |
| vert | **Atteint** *(ou **Évité**)* | La cible est atteinte. | Les évaluations jugent l'effet net et significatif (ou l'effet secondaire indésirable évité). |
| orange | **Limité** *(ou **Modéré**)* | L'effet va dans le bon sens et atteint au moins 50 % de la cible, sans la remplir. | Les évaluations jugent l'effet réel mais faible, ou mitigé (ou l'effet secondaire modéré). |
| rouge | **Non atteint** *(ou **Avéré**)* | Moins de 50 % de la cible, aucun effet notable, ou un effet contraire. | Les évaluations ne trouvent aucun effet, un effet contraire, ou un effet secondaire indésirable avéré. |
| gris | **Non mesuré** | Aucune mesure. | Aucune mesure. |
| gris | **Trop tôt pour conclure** | Dispositif récent entré en vigueur dont le bilan n'est pas encore échu. | Idem. |

Pour un effet secondaire indésirable (`role: secondaire`), on garde les mêmes couleurs (vert = bon pour le citoyen, rouge = problème) mais on utilise les libellés **`evite` (Évité)**, **`modere` (Modéré)** et **`avere` (Avéré)**. Pour un co-bénéfice souhaitable, on garde `atteint / limite / non_atteint`. La note **`trop_tot` (Trop tôt pour conclure)** sert aux dispositifs récents déjà en vigueur (ou en expérimentation officielle) afin de figer dès le lancement l'engagement et le protocole de mesure, puis de mettre la fiche à jour à parution du premier bilan.

**Sans cible, la couleur suit la conclusion des évaluations, pas la nôtre.** Juger nous-mêmes qu'une baisse de 2 % est « faible » serait une opinion. On retient la conclusion, sur le sens visé, de la plus récente évaluation institutionnelle complète, en privilégiant une **institution indépendante ou collégiale** (Cour des comptes, CPO, France Stratégie, comité d'évaluation officiel, inspection générale) sur un rapport parlementaire partisan. À défaut, on suit la conclusion d'une recherche publiée. Si le corpus institutionnel récent est ouvertement divisé (dissensus documenté entre évaluations institutionnelles, ou réserves formelles de la présidence d'une commission d'enquête), on retient **`limite`** (orange) en citant les deux positions. Un point cite la conclusion retenue mot pour mot ; la significativité statistique et les dispositifs comparables l'étayent dans d'autres points, sans la remplacer.

Pour les recettes et les coûts, les seuils sont fixes (appliqués à la cible corrigée de l'inflation IPC Insee, tracée telle quelle sur le graphique) :

| Couleur | Coût (`nature: cout`) | Recettes (`nature: recettes`) |
| --- | --- | --- |
| vert | **Maîtrisé** : au plus le plafond annoncé (corrigé de l'inflation). | **Atteint** : la cible est atteinte ou dépassée. |
| orange | **Dépassé** : jusqu'à 1,5 fois le plafond (+50 %). | **Limité** : entre la moitié de la cible et la cible. |
| rouge | **Très dépassé** : au-delà de 1,5 fois le plafond (> +50 %). | **Non atteint** : moins de la moitié de la cible. |

Des recettes supérieures à la cible sont **atteintes** : c'est ainsi que le lecteur l'entend. Quand elles signalent un comportement qui n'a pas changé, c'est la ligne de l'effet recherché qui le dit, et le chapô fait le lien. Pour ne pas pénaliser un dispositif ancien tout en restant strict sur les dépassements, la cible en euros évolue chaque année avec l'inflation (indice IPC Insee, base 2015, `src/data/inflation.ts`) entre son année d'annonce (`annee_ref`, par défaut `debut`) et l'année mesurée — le tracé orange sur le graphique reflète exactement cette cible actualisée. Sans cible, une ligne budgétaire a un effet gris, **« Mesuré, sans cible »** (distinct de « Effet non mesuré » dans les bilans et filtres) : il n'y a rien à quoi comparer le montant.

### Réformes

On juge le dispositif tel qu'il est aujourd'hui :
* **L'engagement retenu** est celui qui est en vigueur pour le dispositif actuel, avec sa date.
* **Une cible antérieure abandonnée sans avoir été atteinte** est signalée par le constat de l'engagement. Sans cette règle, il suffirait de réformer un dispositif pour effacer ses promesses non tenues.
* **Le graphique** marque l'entrée en vigueur et chaque réforme structurante (section 6).

## 5. Le bilan du dispositif

Le bilan affiche **l'effet de la ligne « effet recherché »** en titre (ou, s'il y en a deux, le moins favorable des deux — sauf lorsque l'un est *atteint* et l'autre *non atteint*, auquel cas le bilan agrégé retient un effet *limité*, section 3). Son engagement et sa mesure s'affichent juste en dessous. Les autres lignes (budget, effets secondaires) suivent, chacune avec ses trois axes. Avec la règle du « pire des lignes », presque tout finirait au même bilan, qui ne distinguerait plus rien.

### Le chiffre du tableau de bord

Chaque thème (section 10) affiche un compteur héros : **la part des dispositifs audités sans suivi actif de l'État** (`X sur Y`). Entrent dans ce compte les dispositifs dont la mesure de l'effet recherché n'est pas `prevue` : **interrompue, tardive, faite par d'autres, ou aucune**. Ce que nous n'avons pas encore vérifié n'entre pas dans le compte.

Juste dessous figurent les montants annuels en cours des dispositifs concernés, **toujours séparés par sens** — coûts publics (dépenses, niches fiscales, manques à gagner de baisses d'impôts) d'un côté, prélèvements de l'autre — afin de ne jamais additionner des recettes et des dépenses. Les dispositifs abrogés n'y entrent que s'ils conservent une incidence budgétaire en cours (`incidence_en_cours: true`, par exemple Pinel jusqu'en 2038).

Le critère porte sur la seule mesure, pas sur l'effet : un dispositif dont des chercheurs ont mesuré l'effet de leur propre initiative, ou dont le comité de suivi a été dissous, reste sans suivi actif de l'État. Il ne porte pas non plus sur l'engagement, pour que le chiffre ne mélange pas deux reproches.

### Couleurs et formes

Quatre règles, tirées des bonnes pratiques de visualisation et d'accessibilité :

* **Une couleur, un sens partout** : vert = bon pour le citoyen, orange = insuffisant, rouge = défaillant, gris = non mesuré.
* **Ne jamais coder un état par la seule couleur** (règle d'accessibilité WCAG 1.4.1) : le libellé est toujours écrit à côté.
* **La forme dit le type de jugement** : une **case carrée** pour l'engagement et la mesure, qui jugent l'État ; une **pastille ronde** pour l'effet, qui juge le dispositif. Le site garde ainsi le code de sa méthode précédente : carré pour l'information, rond pour le jugement.
* **L'absence de données n'est pas un échec du dispositif** : un effet non mesuré est gris, et c'est l'axe « mesure », en rouge, qui porte le manquement.

« Pas encore vérifié » par nos soins s'affiche en contour pointillé gris, sur n'importe quel axe.

## 6. Un graphique par mesure

Comme les comptes d'une entreprise cotée couvrent chaque trimestre, **chaque ligne a son graphique** : la valeur de l'indicateur, année par année, mesurée ou estimée par nous.

* **Période :** depuis cinq ans avant l'entrée en vigueur (le point de départ), jusqu'à la dernière année écoulée (ou depuis `debut_graphique` pour cadrer un dispositif très ancien, le tableau conservant toute la série). L'année en cours n'a pas encore de bilan annuel : elle n'apparaît pas, pour ne pas la compter comme un trou. Une année écoulée sans chiffre est un trou, même si la publication tarde : comme pour une entreprise cotée, le délai de publication fait partie du constat. Une ligne budgétaire commence à l'entrée en vigueur : il n'y a pas de recettes avant la création. Une année sans donnée reste un trou visible.
* **Fréquence :** annuelle. La plupart des dispositifs n'atteignent même pas cette régularité.
* **Cibles :** une série annuelle en escalier (`engagement.cibles`), tracée uniquement sur les années qui avaient une cible. Une cible peut évoluer dans le temps ou disparaître : on voit d'un coup d'œil pour chaque année N si l'État s'était fixé un objectif. Une cible disparue reste visible sur ses années passées tout en laissant la note d'engagement actuelle à `sans_chiffre`.
* **Réformes :** un repère vertical pour l'entrée en vigueur et pour chaque réforme marquée `structurante` dans l'historique.
* **Trous :** une année sans mesure du dispositif est **montrée comme un trou**, jamais interpolée : la ligne s'interrompt, et la bande de couverture sous l'axe la marque en hachures. Le champ `trous` dit ce qu'on en sait : `non_publies` si nous avons prouvé que le chiffre n'est publié nulle part (« sans chiffre publié »), `non_retrouves` sinon (« sans chiffre retrouvé à ce jour »). La régularité de la mesure fait partie du constat : une seule étude en dix ans se voit comme un point isolé.
* **Ruptures de série :** lorsqu'un changement de méthode ou de périmètre empêche de relier deux années entre elles sans pour autant constituer un trou de mesure, le champ facultatif `rupture` (court libellé sur le premier point du nouveau périmètre) coupe le trait entre les deux années et trace un repère discret sans hachurer la bande de couverture.
* **Niches fiscales de TVA depuis 2022 :** à compter du PLF 2024 (exercice 2022), *Voies et moyens II* ne chiffre plus que la part État des dépenses fiscales de TVA, et non le manque à gagner toutes administrations publiques (État, Sécurité sociale, collectivités). Pour conserver un coût public comparable dans le temps et cohérent avec les cibles initiales, la série budgétaire d'une niche de TVA reste sur le périmètre « toutes administrations publiques » : les années jusqu'en 2021 sont en `etat` et les années 2022 et suivantes sont prolongées en `estimation` (trait pointillé, solidité `bonne`) en divisant la part État publiée par la fraction officielle de l'État dans la TVA nette (*Voies et moyens I*), tandis que les montants bruts part État figurent dans les points.
* **Producteur :** chaque point indique son statut (`etat`, `independant`, `estimation` ou `contexte`), chacun avec son code visuel : plein bleu, cerclé bleu, cerclé bleu en pointillés, ou gris discret (`contexte`, qui laisse la bande de couverture hachurée).
* **Notre estimation**, dès que des données publiques le permettent : tracée en pointillés, jamais confondue avec une mesure de l'État, et accompagnée de son calcul, de sa solidité et de ses limites. L'objectif est que chaque effet dispose d'un graphique lisible — nous faisons au moins le travail d'ordre de grandeur que l'État n'a pas fait.
* **Indicateur de contexte (`producteur: contexte`) :** si l'indicateur causal exact n'est pas mesuré, on peut tracer l'indicateur national ou sectoriel le plus proche (ou référencer une série partagée de `src/data/series.ts` via `serie.ref`). Tracé en gris sans bande bleue, il donne l'arrière-plan visuel sans jamais passer pour une mesure du dispositif.
* **Cohérence graphique ↔ mesure (évaluation ponctuelle en 1 point) :** dès qu'un effet est intégré à la fiche et dispose d'une mesure (`mesure` autre que `aucune`), **cette mesure doit apparaître sur le graphique**, afin que le tracé ne semble jamais contredire les constats des axes `mesure` et `effet`. Lorsqu'une seule évaluation chiffrée existe sur toute la période (étude causale sur cohorte, chiffre d'enquête sourcé, y compris un effet causal nul égal à 0), on l'inscrit comme **point isolé** sur le graphique temporel (`producteur: independant` ou `etat`, avec le périmètre précisé dans l'indicateur et la source) : elle rend visible à la fois le résultat mesuré et la rareté de la mesure au milieu d'années hachurées. Lorsque toutes les valeurs sont à 0, l'axe vertical est centré autour de la ligne zéro pour qu'elle reste clairement lisible.
* **État vide temporel (aucune donnée) :** réservé aux seuls cas où il n'existe ni mesure chiffrée de l'indicateur, ni cible, ni estimation réaliste. La carte affiche alors tout de même le cadre graphique temporel (axe des années depuis l'entrée en vigueur jusqu'à la dernière année écoulée, repères des réformes structurantes, bande de couverture 100 % hachurée), avec un message neutre et factuel en gris (« Jamais mesuré depuis [année] » si `mesure: aucune`, ou « Aucune série annuelle publiée depuis [année] » sinon). L'axe « Mesure : Aucune » porte déjà le rouge ; le graphique respecte la grammaire couleur (gris = non mesuré).

**Ce que tout graphique affiche**, pour se lire sans aide :
* **un titre** : l'indicateur et son unité (« Recettes de la taxe, par an, en euros ») ;
* **un axe des valeurs** : trois graduations rondes depuis zéro, avec de l'air au-dessus du maximum ;
* **un axe des années** : la première, la dernière, et les années rondes entre les deux ;
* **une bande de couverture** sous l'axe : une case par année, pleine s'il existe un chiffre, hachurée sinon. Elle dit d'un coup d'œil combien d'années manquent, sans charger le tracé ;
* **des étiquettes directes** : toutes les valeurs quand il y en a trois ou moins, sinon la dernière seule ;
* **une bulle par année**, au survol, au clavier ou au toucher : l'année, la valeur en gras, qui l'a produite et la source ; pour une année vide, la raison ;
* **une légende** : les formes de points présentes, et le nombre d'années sans chiffre ;
* **le tableau des chiffres**, dans le menu de la carte, pour qui ne peut ou ne veut pas lire le graphique.

**Évolution n'est pas effet.** Une courbe montre comment l'indicateur a bougé, pas ce qui est dû au dispositif : la consommation de sucre peut baisser pour d'autres raisons. L'axe « effet » s'appuie sur les évaluations qui isolent l'effet du dispositif. Le graphique les illustre, il ne les remplace pas ; quand les deux divergent, un point de l'effet le dit.

## 7. La carte d'un effet

Chaque effet suit la même recette, pour que les agents la produisent sans hésiter et que le lecteur la lise sans effort. Deux niveaux de lecture seulement : **visible**, la note et une phrase par axe ; **replié**, les preuves, dans un seul menu par effet. C'est la divulgation progressive recommandée par le Nielsen Norman Group et le guide de rédaction de GOV.UK : la conclusion d'abord, un seul niveau de détail, jamais de menu dans un menu.

### Les champs

| Champ | Contenu | Limite |
| --- | --- | --- |
| `libelle` | Le nom de l'effet. | 40 caractères |
| `role`, `nature` | Effet recherché, budgétaire ou secondaire ; comportement, recettes ou coût. | — |
| `indicateur`, `unite` | Ce que l'on mesure, affiché sous le titre. | 80 caractères |
| `engagement`, `mesure`, `effet` | Les trois axes, de même forme (ci-dessous). | — |
| `estimation` | Notre ordre de grandeur, s'il y en a un : `constat`, `points` (le calcul), `solidite`, `sources`, aux mêmes limites qu'un axe. | — |
| `serie` | Les chiffres de l'indicateur seuls : une valeur par année, son producteur et sa source, et `trous` (section 6). Aucun texte : la légende se calcule. | — |

Chaque axe :

| Champ | Contenu | Limite |
| --- | --- | --- |
| `note` | La valeur de l'axe, selon la section 4. Calculée pour l'effet des recettes et des coûts. | — |
| `constat` | **Une phrase**, la conclusion d'abord, qui se comprend sans lire le détail : pas de référence de page, ni de date, de sigle ou de nom qui demande le détail pour être compris (« lors des deux réformes », pas « en 2018 et 2025 »). | 120 caractères, une seule phrase |
| `points` | Ce qui justifie la note : citation, chiffres, mécanismes, évaluation retenue, réserves sur les données. Une idée par point, avec sa source entre parenthèses. | 4 points de 200 caractères au plus |
| `sources` | Tous les documents consultés pour cet axe, y compris ceux où rien n'a été trouvé. | au moins un |

S'y ajoute `engagement.cibles`, les cibles chiffrées par période : `{ sens, periodes: [{ debut, fin?, valeur, source }] }` (`fin` omis signifie que la cible reste en vigueur).

**D'où viennent les limites.** GOV.UK recommande 25 mots au plus par phrase, et les guides de langage clair visent 15 à 20 mots : 120 caractères en font environ 20. Dans une colonne de la carte, cela tient en quatre lignes, et les trois constats gardent la même hauteur. Au-delà de quatre points, une liste ne se parcourt plus d'un regard : ce qui ne tient pas n'est pas essentiel. Le schéma refuse une fiche qui dépasse ces limites : le site ne se construit pas.

### L'ordre d'affichage

1. Le rôle en surtitre, le nom, l'indicateur.
2. Les trois axes côte à côte : nom, marque et note, constat.
3. Le graphique (section 6), avec sa légende calculée.
4. Notre estimation, s'il y en a une.
5. Un seul menu « Détail et sources » : pour chaque axe, ses points et ses sources ; le calcul de notre estimation ; puis les chiffres année par année.

### La fiche autour des cartes

1. **Le chapô**, écrit en dernier. Il suit la règle des résumés pour décideurs : la conclusion d'abord (« bottom line up front », la pyramide inversée).
   * Phrase 1 : l'effet de l'effet recherché, avec le mot de sa note (« un effet limité »).
   * Phrase 2 : l'engagement et la mesure.
   * Phrase 3, facultative : un fait budgétaire ou secondaire marquant, s'il n'est pas déjà dans la phrase 1.
   * 300 caractères et trois phrases au plus, vérifiés au build. Chaque fait cité figure dans une carte.
   * **Neutralité et symétrie d'exposition.** Les `libelle`, `constat` et `resume` évitent tout terme normatif ou accusateur (« captation », « contournement », « mitage », « dérapage ») pour qualifier un mécanisme légal ou un comportement économique. Le chapô n'isole pas un coût brut ou un effet négatif sans sa contrepartie directe lorsqu'elle est documentée dans la fiche (gain net pour les bénéficiaires, retour fiscal mesuré, périmètre partiel de l'évaluation), ni ne gomme une réserve méthodologique majeure déjà présente dans les `points`.
2. **Le bilan** : le nom de l'effet recherché en surtitre, son effet en titre, son engagement et sa mesure dessous, puis une ligne par effet, suivie d'une ligne dédiée au **coût de fonctionnement** (qui renvoie vers son bloc).
3. **Les cartes des effets.**
4. **Le coût de fonctionnement**, bloc compact placé après les cartes d'effets (sans graphique ni trois axes, puisqu'il n'y a ni promesse ni effet causal) : il répond à la question *« combien coûte la machine (collecte, versement, contrôle, opérateur) pour faire tourner ce dispositif, indépendamment de son rendement ou des montants transférés ? »*.
   * `mesure` (case carrée, qui juge l'État) : `etat` (vert, coût propre isolé et publié par l'État), `tiers` (orange, estimé par une institution indépendante ou des chercheurs), ou `non_mesure` (rouge, non isolé ou non publié). Un taux moyen global de frais de gestion (par exemple celui de la DGFiP tous impôts confondus) **ne compte pas** comme mesure du dispositif.
   * `montant` (en euros, annuel par défaut ou `cumule: true`), `annee` et `part_budget` (en % du budget du dispositif), facultatifs.
   * `constat` (120 caractères, une phrase), `points` (4 points de 200 caractères au plus, incluant le coût de conformité pour les ménages ou entreprises s'il est documenté) et `sources` (y compris les sources consultées prouvant l'absence de chiffre).
   * Absent = « Pas encore vérifié » par nos soins (contour pointillé gris).
5. **Le dispositif en détail**, replié en pied de page sous ce titre fixe, car c'est de la référence et non du récit : qui l'a proposé, le texte fondateur, l'entrée en vigueur, les articles du code, sur quoi il porte, qui le gère, qui reçoit l'argent, le nombre de redevables s'il est connu, puis les réformes datées. Le statut n'est affiché que si le dispositif est abrogé (`statut: abroge`, y compris en cas d'extinction budgétaire et opérationnelle officielle sans loi d'abrogation formelle : 0 € en LFI et arrêt acté par décret, avec `incidence_en_cours: true` tant que des crédits de liquidation courent) ; la date de dernière mise à jour et la version de méthodologie figurent sous le chapô, et un lien « Signaler une erreur » clôt la fiche.

La fiche n'a pas de texte libre : tout ce qu'elle dit tient dans le chapô, les constats et les points. Les sources sont celles de chaque axe.

Ce qui a disparu des méthodes précédentes :
* **les cinq questions et « Les comptes de l'État »** : l'axe « mesure » et les trous du graphique disent la même chose, plus directement ;
* **l'alerte et la note sous le graphique** : elles répétaient une note rouge et son constat ;
* **le partage, le texte libre « Intention et réalité », la liste globale des sources et le texte des articles** : ils répétaient le reste de la fiche, ou n'apprenaient rien d'essentiel ;
* **« Qui paie, qui en profite »** : le bloc « Le dispositif », sauf quand le partage réel de la charge est un effet (section 3) ;
* **l'annexe des recommandations et les « autres pistes »** : elles disent comment améliorer le dispositif, pas s'il tient ses engagements. Exception : quand un dispositif comparable a atteint l'effet visé (le modèle britannique pour le soda), c'est un point de l'effet.

## 8. Règles de preuve

Le skill `nouvelle-fiche` décrit la procédure ; les règles sont celles-ci :
* **Des documents primaires seulement** : un extrait de moteur de recherche, un article de presse ou un résumé ne sont jamais une source.
* **Chaque fait a une source précise, avec sa page.**
* **Chaque citation est vérifiée mot pour mot** dans le document ; sinon, elle est reformulée sans guillemets.
* **Chaque chiffre est attribué à qui l'a produit**, pas au rapport qui le cite : on remonte à la note de bas de page.
* **Une série ne mélange pas les périmètres ni les bases comptables** : deux sources qui ne concordent pas ne se fusionnent pas ; on explique l'écart et on garde la série la plus longue et cohérente.
* **Une mesure prévue n'est pas une mesure faite**, et une mesure faite par d'autres n'est pas une mesure de l'État.
* **L'absence se prouve** : les sources de l'axe listent les documents consultés.
* **Rien n'est extrapolé** : notre propre calcul est une estimation, signalée et justifiée.
* Faits, citations et conclusions restent distincts.

**Documents bloqués.** Les recherches sont faites par des agents, et certains sites bloquent les téléchargements automatiques par un filtre anti-robots. L'agent ne contourne pas le blocage (ni archive web, ni miroir) : il demande à un humain de télécharger le document et de le déposer dans `sources/<id-de-la-fiche>/` (ou `sources/_communes/` s'il est transversal). Un document qu'on n'a pas pu ouvrir n'est pas un document absent : l'agent ne conclut jamais « sans chiffre » ou « aucune mesure » à cause d'un blocage. Tant que le document manque, la ligne reste « pas encore vérifiée ».

## 9. Exemple : la taxe sur les boissons sucrées

| Effet | Engagement | Mesure | Effet |
| --- | --- | --- | --- |
| **Consommation de sucre** (effet recherché) | orange · **Sans chiffre** : aucun objectif chiffré sur le sucre, ni à la création ni lors des deux réformes. | orange · **Tardive** : rien n'était prévu au vote ; l'État n'a programmé d'évaluation que sept ans plus tard. | orange · **Limité** : baisse marginale selon le Sénat, environ 1 g de sucre par jour et par ménage. |
| **Recettes** (budget) | vert · **Chiffré** : 120 M€ par an annoncés à la création, en 2012. | vert · **Prévue** : recettes comptées chaque année, mais 2024 et 2025 ne sont pas publiées. | vert · **Atteint** : 486 M€ en 2023, quatre fois la cible. |

Notre estimation, sur la ligne de la consommation : le sucre acheté dans les boissons sans alcool aurait baissé d'environ 6 % entre 2013 et 2019 (solidité moyenne).

Chapô : « La taxe soda n'a qu'un effet limité sur le sucre consommé, alors qu'elle rapporte quatre fois ce qui était prévu. L'État ne s'était fixé aucun objectif sur le sucre, et n'a prévu d'en mesurer l'effet que sept ans après sa création. »

## 10. Thèmes et instruments

Le visiteur arrive avec une question de société (« que fait l'État pour la santé, le climat, l'emploi ? »), pas avec une catégorie juridique ni un type de prélèvement. Le site se parcourt donc **par thème**, et l'instrument est un **filtre**.

### Le thème d'une fiche

* **Une fiche est rangée dans le thème de son effet recherché.** La taxe soda vise le sucre : elle est en Santé, pas en « Fiscalité ». Les fiches d'un thème poursuivent ainsi le même but, et se comparent.
* **Chaque thème regroupe des missions du budget de l'État** (`src/themes.ts`). Quand l'État publie un rattachement (le programme budgétaire d'une niche fiscale, dans l'annexe Voies et moyens, tome II), la fiche le cite dans `rattachement` et le suit, sauf si l'effet recherché le contredit clairement ; le constat de l'effet recherché le dit alors.
* **Un dispositif à deux effets recherchés** va dans le thème du premier ; l'autre thème le trouve par les recoupements.
* **Les impôts dont le seul but est de rapporter** (TVA, impôt sur le revenu) vont dans « Financement de l'État ». Leur effet recherché est la recette : c'est un objectif honnête, qui se juge comme les autres.
* **Un thème n'apparaît qu'une fois qu'il a au moins une fiche.** La liste peut s'allonger (culture, sécurité, justice) quand une fiche le demande ; on ne la découpe pas plus fin que les grandes politiques publiques, une dizaine de thèmes au plus.

### L'instrument

Ce que fait l'argent, en quatre valeurs :

| Instrument | L'argent… | Exemples |
| --- | --- | --- |
| Prélèvement | est prélevé | impôt, taxe, cotisation |
| Niche fiscale | n'est pas perçu | réduction, crédit d'impôt, exonération (« dépense fiscale ») |
| Dépense | est versé | subvention, allocation, prime |
| Règle | n'est pas en jeu | norme, obligation, interdiction |

L'instrument n'est pas une rubrique : un même but passe souvent d'un instrument à l'autre (la rénovation énergétique, d'un crédit d'impôt à une prime), et la comparaison la plus utile est celle des instruments d'un même thème. Il s'affiche sur chaque carte et filtre les tableaux de bord. Lorsqu'un dispositif combine deux instruments (par exemple dépenses directes et exonérations fiscales), on retient l'**instrument dominant** (en montant ou en architecture) dans le champ `instrument`, et on détaille la seconde composante dans les points.

### Le chiffre d'un thème

* **Un compteur universel en chiffre héros** : `X sur Y dispositifs audités sans suivi actif de l'État` (section 5). Il s'applique à tous les instruments, y compris les règles sans euros et les niches non chiffrées, et porte la couverture de l'audit dans son dénominateur même.
* **Des montants en euros en cours, toujours séparés par sens** : sous le compteur, les coûts publics (dépenses, niches fiscales et manques à gagner de baisses d'impôts, avec l'équivalent par habitant) et les prélèvements figurent séparément, sans jamais être additionnés entre eux. Les dispositifs abrogés sans incidence courante et les dispositifs sans montant connu sont comptés à part.
