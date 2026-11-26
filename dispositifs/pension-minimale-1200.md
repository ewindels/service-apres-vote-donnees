---
titre: "Pension minimale à « 1 200 € » (réforme de 2023)"
resume: "La revalorisation des petites pensions a un effet limité : moins d'un tiers des retraités sous 1 200 € en bénéficie, pour un gain moyen de 30 € à 45 € par mois. L'État a chiffré sa promesse sans organiser de suivi comptable, et la mise en œuvre a accumulé retards et 115 M€ d'indus."
theme: retraites
instrument: depense_budgetaire
statut: en_vigueur
date_maj: 2026-11-26
methode: "1.0"

origine:
  loi_fondatrice: "Loi n° 2023-270 du 14 avril 2023 de financement rectificative de la sécurité sociale pour 2023"
  article_loi: "Article 18"
  initiative: "Gouvernement (article 10 du projet de loi de financement rectificative pour 2023)"
  date_entree_vigueur: 2023-09-01
  articles_legi:
    - "L. 114-4 du code de la sécurité sociale"
    - "L. 351-10 du code de la sécurité sociale"
    - "L. 732-54-2 et L. 732-63 du code rural et de la pêche maritime"
population_cible: "Retraités à taux plein des régimes alignés (salariés, indépendants, agricoles) percevant une petite pension, déjà retraités avec 120 trimestres cotisés ou nouveaux retraités."
concernes: "Environ 2 millions de retraités (sur 6,6 millions percevant moins de 1 200 € par mois) : près de 1,8 million d'anciens retraités et 185 000 nouveaux retraités en 2024, dont deux tiers de femmes."
recoupements:
  - report-age-legal-64-ans

historique:
  - date: 2023-09-01
    texte: "Loi n° 2023-270 du 14 avril 2023, article 18, et décret n° 2023-754 du 10 août 2023"
    resume: "Hausse du minimum contributif majoré jusqu'à +100 €/mois (+25 € base, +75 € majoration), indexation sur le SMIC, extension aux déjà-retraités et relèvement du minimum agricole"
    structurante: true
  - date: 2024-12-01
    texte: "Vagues de versement différées de la Cnav (décembre 2024 et octobre 2025)"
    resume: "Versement tardif de la majoration exceptionnelle à 150 000 anciens artisans et commerçants, les révisions manuelles complexes étant reportées au plus tôt à 2027"

effets:
  - libelle: "Revalorisation des petites pensions"
    role: recherche
    nature: comportement
    indicateur: "Gain mensuel moyen pour les anciens retraités bénéficiaires (Cnav et MSA)"
    unite: "€/mois"
    engagement:
      note: chiffre
      cibles:
        sens: au_moins
        periodes:
          - { debut: 2023, annee_ref: 2023, valeur: 57, source: "PLFRSS 2023, étude d'impact, p. 111 (680 €/an)" }
      constat: "L'État a inscrit dans la loi une pension à 85 % du SMIC net et annoncé 1,8 million de bénéficiaires."
      points:
        - "Pour une carrière complète au SMIC à temps plein, la loi vise « 85% du SMIC net projeté », soit environ 1 200 € brut par mois (PLFRSS 2023, étude d'impact, p. 105-106)."
        - "Le minimum contributif majoré augmente de 100 € maximum (+25 € sur la base, +75 € sur la majoration) et est indexé sur le SMIC (étude d'impact, p. 105)."
        - "Pour les déjà-retraités, « 1,8 million de retraités, dont 60 % de femmes, bénéficieront ainsi d’une augmentation de leur pension », de 680 €/an (~57 €/mois) en moyenne (p. 110-111)."
        - "Pour les nouveaux retraités, l'étude prévoyait 60 à 70 % de bénéficiaires dans les trois premiers déciles, pour plus de 400 €/an en moyenne (étude d'impact, p. 110-111)."
      sources:
        - &plfrss2023_ei
          label: "PLFRSS 2023 n° 760, étude d'impact, article 10, p. 105-115"
          url: "https://www.assemblee-nationale.fr/dyn/16/textes/l16b0760_etude-impact"
        - &lfrss2023_ta
          label: "LFRSS 2023, texte adopté définitif AN n° 91, article 18"
          url: "https://www.assemblee-nationale.fr/dyn/opendata/PRJLANR5L16BTA0091.html"
    mesure:
      note: tardive
      constat: "Aucun indicateur annuel consolidé n'a été créé au vote ; le premier bilan global vient de la Cour des comptes."
      points:
        - "La loi charge le Comité de suivi des retraites de vérifier l'atteinte des 85 % du SMIC net pour le seul cas-type d'une carrière complète au SMIC (art. L. 114-4 du CSS)."
        - "Aucun indicateur d'objectif dédié à la réforme de 2023 sur les petites pensions n'a été ajouté au rapport d'évaluation des retraites annexé au PLFSS (REPSS Retraites 2026, p. 7-8)."
        - "La Drees a publié une étude ponctuelle sur les nouveaux retraités de 2024 et le REPSS 2026 ne donne que le stock du régime général fin 2025 (REPSS Retraites 2026, p. 58 et 63)."
        - "Il a fallu le rapport 2026 de la Cour des comptes pour consolider en 2024 les gains moyens Cnav et MSA sur les anciens et nouveaux retraités (RALFSS 2026, p. 27 et 315-317)."
      sources:
        - *plfrss2023_ei
        - &repss2026
          label: "DSS, Rapport d'évaluation des politiques de sécurité sociale (REPSS) Retraites, 2026, p. 7-11 et 58-64"
          url: "https://evaluation.securite-sociale.fr/files/live/sites/Repss/files/M%c3%a9diath%c3%a8que/Rapports/PLACSS%202025%20-%20Edition%202026/PLACSS%202025%20Annexe%201%20-%20REPSS%20Retraites%202026.pdf"
        - &ralfss2026
          label: "Cour des comptes, Sécurité sociale 2026 (RALFSS), mai 2026, chap. IX, p. 27 et 289-317"
          url: "https://www.ccomptes.fr/fr/publications/securite-sociale-2026"
    effet:
      note: limite
      constat: "Moins d'un tiers des petites pensions bénéficie de la hausse, avec des gains moyens de 30 € à 45 € par mois."
      points:
        - "« Moins du tiers des retraités percevant des pensions inférieures à 1 200 € s’est avéré éligible. », soit 2 millions sur 6,6 millions (Cour des comptes, RALFSS 2026, p. 27 et 317)."
        - "« Les gains associés ont été en général inférieurs à 100 € par mois » : 45 €/mois en moyenne pour les anciens retraités (51 € Cnav, 18 € MSA) et 30 € pour les nouveaux (p. 316-317)."
        - "Les 85 % du SMIC net sont atteints pour une carrière complète au SMIC (+66 €/mois), mais reculeraient sous ce seuil dès la génération 1995 (RALFSS 2026, p. 307 ; COR, 2026, p. 178)."
        - "Chez les exploitants agricoles à carrière complète, la hausse du minimum est annulée à 0 € net par la baisse mécanique du complément différentiel (RALFSS 2026, p. 310)."
      sources:
        - *ralfss2026
        - *repss2026
        - &cor2026
          label: "Conseil d'orientation des retraites, Rapport annuel, juin 2026, p. 155, 172 et 178"
          url: "https://www.cor-retraites.fr/rapports-du-cor/rapport-annuel-cor-juin-2026-evolutions-perspectives-retraites-france"
    serie:
      debut_graphique: 2023
      trous: non_publies
      points:
        - { annee: 2024, valeur: 45, producteur: independant, source: "Cour des comptes, Sécurité sociale 2026 (RALFSS), mai 2026, p. 27 et 316 (Cnav hors indépendants et MSA)" }

  - libelle: "Coût pour les régimes de retraite"
    role: budget
    nature: cout
    indicateur: "Surcoût annuel des revalorisations des petites pensions"
    unite: "€"
    engagement:
      note: chiffre
      cibles:
        sens: au_plus
        periodes:
          - { debut: 2023, fin: 2023, annee_ref: 2023, valeur: 440000000, source: "PLFRSS 2023, étude d'impact, p. 109 (4 mois)" }
          - { debut: 2024, fin: 2024, annee_ref: 2023, valeur: 1380000000, source: "PLFRSS 2023, étude d'impact, p. 109" }
          - { debut: 2025, fin: 2025, annee_ref: 2023, valeur: 1470000000, source: "PLFRSS 2023, étude d'impact, p. 109" }
          - { debut: 2026, fin: 2026, annee_ref: 2023, valeur: 1560000000, source: "PLFRSS 2023, étude d'impact, p. 109" }
      constat: "L'État a chiffré un surcoût de 440 M€ en 2023 puis de 1,38 Md€ à 1,56 Md€ par an jusqu'en 2026."
      points:
        - "L'étude d'impact prévoit 440 M€ en 2023 (4 mois), 1 380 M€ en 2024, 1 470 M€ en 2025 et 1 560 M€ en 2026 pour les minima de pension (PLFRSS 2023, étude d'impact, p. 109)."
        - "Cette trajectoire mêle le stock (environ 1,3 Md€/an dès 2024) et la montée en charge des nouveaux retraités (80 M€ en 2024, 200 M€ en 2025, 300 M€ en 2026, étude d'impact, p. 109)."
        - "Aucune prévision de coût des minima n'est publiée au-delà de 2026 dans l'étude d'impact (PLFRSS 2023, étude d'impact, p. 109)."
      sources:
        - *plfrss2023_ei
    mesure:
      note: par_autres
      constat: "Les caisses ne suivent pas le coût complet de la réforme ; la Cour des comptes a reconstitué un chiffre partiel."
      points:
        - "Selon la Cour des comptes, « les dépenses liées aux revalorisations du minimum contributif et de la pension majorée de référence ne sont pas suivies par les caisses de retraite » (p. 315)."
        - "La Cnav n'isole que la majoration exceptionnelle du stock (91,4 M€ en 2023, 958,2 M€ en 2024, 850,7 M€ en 2025), pas le surcoût sur les nouveaux retraités (États financiers 2025, p. 97)."
        - "La Commission des comptes de la sécurité sociale a chiffré un surcoût de 0,9 Md€ en 2024, mais a cessé de publier cette ligne dans ses rapports 2025 et 2026 (CCSS 2024, p. 169)."
        - "Le chiffrage de 940 M€ reconstitué par la Cour pour 2024 exclut encore les anciens artisans et commerçants et le surcoût agricole actualisé (RALFSS 2026, p. 315-316)."
      sources:
        - *ralfss2026
        - &cnav_ef2025
          label: "Cnav, Branche retraite — États financiers 2025, p. 95-98 et 245"
          url: "https://www.lassuranceretraite.fr/portail-info/files/live/sites/pub/files/PDF/etat-financier-2025.pdf"
        - &cnav_stats2025
          label: "Assurance retraite, Recueil statistique 2025, p. 65 et 106-108"
          url: "https://www.lassuranceretraite.fr/portail-info/files/live/sites/pub/files/PDF/assurance-retraite-recueil-stats-25.pdf"
        - &ccss2024
          label: "Commission des comptes de la sécurité sociale, Rapport, octobre 2024, p. 169, 171 et 231"
          url: "https://www.securite-sociale.fr/la-secu-en-detail/comptes-de-la-securite-sociale/rapports-de-la-commission"
    effet:
      constat: "Le surcoût reconstitué pour 2024 atteint 940 M€, soit un tiers de moins que la prévision, sur un périmètre incomplet."
      points:
        - "En 2024, la Cour des comptes évalue le surcoût à 940 M€ (800 M€ Cnav stock, 73 M€ MSA stock et 67 M€ nouveaux retraités), contre 1,38 Md€ prévus (RALFSS 2026, p. 292 et 315-316)."
        - "Cet écart reflète des gains moyens plus faibles qu'attendu, les retards de mise en paiement et l'absence de chiffrage des anciens indépendants et du minimum agricole (p. 315-316)."
        - "En 2025, la seule majoration exceptionnelle du régime général reflue à 850,7 M€ (-11,2 %) après les rappels versés en 2024 (Cnav, États financiers 2025, p. 97)."
      sources:
        - *ralfss2026
        - *cnav_ef2025
        - *ccss2024
    serie:
      trous: non_publies
      points:
        - { annee: 2024, valeur: 940000000, producteur: independant, source: "Cour des comptes, Sécurité sociale 2026 (RALFSS), mai 2026, p. 292 et 315-316 (hors anciens indépendants et PMR agricole)" }

  - libelle: "Dossiers en attente et indus"
    role: secondaire
    nature: comportement
    indicateur: "Dossiers en attente de calcul définitif du minimum contributif"
    unite: "dossiers"
    engagement:
      note: sans_chiffre
      constat: "L'État a promis des versements achevés en un an, sans anticiper ni borner les retards de calcul et les indus."
      points:
        - "L'étude d'impact annonçait que les premiers versements interviendraient « au plus tard en septembre 2024, avec un effet rétroactif au 1er septembre 2023 » (PLFRSS 2023, p. 114)."
        - "Elle ne chiffrait aucun risque de stock de dossiers bloqués par les échanges inter-régimes ni de trop-perçus liés à la complexité du calcul (PLFRSS 2023, étude d'impact, p. 113-114)."
      sources:
        - *plfrss2023_ei
    mesure:
      note: par_autres
      constat: "L'ampleur des dossiers en attente et des versements indus n'a été établie que par l'audit de la Cour des comptes."
      points:
        - "La Cour des comptes a chiffré les dossiers en attente de calcul définitif fin 2024 et fin 2025 ainsi que le montant cumulé des versements indus (RALFSS 2026, p. 312-313)."
        - "Les états financiers 2025 de la Cnav provisionnent 598 M€ pour les échanges inter-régimes et 62,2 M€ pour la majoration exceptionnelle, sans pouvoir chiffrer la vague 4 (p. 85 et 245)."
      sources:
        - *ralfss2026
        - *cnav_ef2025
    effet:
      note: avere
      constat: "Plus de 640 000 dossiers restaient en attente fin 2025 et 115 M€ d'indus ont été versés sans base légale."
      points:
        - "L'échéance de septembre 2024 a été dépassée : 150 000 anciens indépendants n'ont été servis qu'en décembre 2024 et octobre 2025, et 92 088 révisions manuelles attendent (RALFSS 2026, p. 312)."
        - "Pour ces dossiers manuels, « La révision ne pourra intervenir au plus tôt qu’en 2027. », auxquels s'ajoutent 41 472 anomalies d'échanges inter-régimes (Cnav, États financiers 2025, p. 245)."
        - "Les dossiers de nouveaux retraités en attente de calcul définitif atteignaient 540 000 fin 2024 (salariés du régime général) et 640 000 fin novembre 2025 sur champ élargi (RALFSS 2026, p. 313)."
        - "Une lettre ministérielle jugée illégale a engendré des indus évalués à « 33 M€ pour la première année de versement de la majoration exceptionnelle et à 115 M€ en cumulé » (RALFSS 2026, p. 312)."
      sources:
        - *ralfss2026
        - *cnav_ef2025
    serie:
      debut_graphique: 2023
      trous: non_publies
      points:
        - { annee: 2024, valeur: 540000, producteur: independant, source: "Cour des comptes, Sécurité sociale 2026 (RALFSS), mai 2026, p. 313 (salariés du régime général, fin 2024)" }
        - { annee: 2025, valeur: 640000, producteur: independant, rupture: "Champ élargi (indép. + MSA)", source: "Cour des comptes, Sécurité sociale 2026 (RALFSS), mai 2026, p. 313 n. 453 (salariés, indépendants et salariés agricoles, fin nov. 2025)" }

cout_fonctionnement:
  mesure: non_mesure
  constat: "Aucun coût de gestion ou informatique n'est isolé pour la revalorisation des petites pensions."
  points:
    - "« La majoration exceptionnelle des petites pensions a été la mesure de la réforme des retraites de 2023 la plus complexe à mettre en œuvre. » (Cour des comptes, RALFSS 2026, p. 356)."
    - "La Cnav ne tient pas de comptabilité analytique par mesure : seul un coût prévisionnel global de 46,5 M€ est estimé pour toute la réforme de 2023, sans chiffre isolé pour la MSA (p. 365-366)."
    - "Les états financiers et le rapport d'activité 2025 de la Cnav ne détaillent pas ce surcoût dans les 1,725 Md€ de charges de gestion courante (Rapport d'activité 2025, p. 110)."
  sources:
    - &ralfss2026_ch11
      label: "Cour des comptes, Sécurité sociale 2026 (RALFSS), mai 2026, chap. XI, p. 356 et 365-366"
      url: "https://www.ccomptes.fr/fr/publications/securite-sociale-2026"
    - &cnav_ra2025
      label: "Assurance retraite, Rapport d'activité national 2025, p. 110 et 112"
      url: "https://www.lassuranceretraite.fr/portail-info/files/live/sites/pub/files/PDF/rapport-activite-2025.pdf"

responsable:
  gestion:
    qui: "Caisse nationale d'assurance vieillesse (Cnav) et Mutualité sociale agricole (MSA), sous tutelle de la direction de la sécurité sociale (DSS)"
    source: *ralfss2026
  argent:
    qui: "Branche vieillesse de la Sécurité sociale (régime général, indépendants et régimes agricoles)"
    source: *plfrss2023_ei
---
