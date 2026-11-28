---
titre: "Contribution sur les hauts revenus"
precision: "Contribution exceptionnelle (CEHR) et différentielle (CDHR)"
resume: "Le duo CEHR-CDHR a un effet limité : la CEHR rapporte près de trois fois sa cible, mais la CDHR n'atteint pas un cinquième de ses 2 Md€ annoncés. L'État a chiffré les recettes mais ignoré l'évitement, massif dès 2024. Le coût de gestion reste non mesuré."
theme: financement
instrument: prelevement
statut: en_vigueur
date_maj: 2026-11-26
methode: "1.0"

origine:
  loi_fondatrice: "Loi n° 2011-1977 du 28 décembre 2011 de finances pour 2012"
  article_loi: "Article 2 (CEHR) et loi n° 2025-127 du 14 février 2025, article 10 (CDHR)"
  initiative: "Gouvernement (PLF 2012 art. 3, élargi par amendement parlementaire ; PLF 2025 art. 3)"
  date_entree_vigueur: 2012-01-01
  articles_legi: ["Article 223 sexies du CGI", "Article 224 du CGI"]
population_cible: "Foyers fiscaux dont le revenu fiscal de référence excède 250 000 € (personne seule) ou 500 000 € (couple)."
concernes: "58 700 foyers redevables de la CEHR en 2022 (contre 29 683 en 2012) ; environ 14 000 foyers redevables de la CDHR sur les revenus 2025 (Sénat, PLF 2025 ; DGFiP Statistiques n° 53)."
recoupements: ["remplacement-isf-ifi", "pacte-dutreil", "quotient-familial"]

historique:
  - date: 2012-01-01
    texte: "Loi n° 2011-1977 du 28 décembre 2011 (LFI 2012), article 2"
    resume: "Création de la CEHR dès les revenus 2011 (3 % > 250 k€/500 k€, 4 % > 500 k€/1 M€), jusqu'au retour à un déficit public nul."
    structurante: true
  - date: 2016-12-29
    texte: "Loi n° 2016-1918 du 29 décembre 2016 (LFR 2016), article 34"
    resume: "Adaptation de l'assiette pour les plus-values en report d'imposition (art. 150-0 B ter du CGI) après décision QPC."
    structurante: false
  - date: 2025-02-14
    texte: "Loi n° 2025-127 du 14 février 2025 (LFI 2025), article 10"
    resume: "Instauration de la CDHR sur les revenus 2025 : impôt minimal de 20 % du RFR retraité, avec acompte de 95 % en décembre 2025."
    structurante: true
  - date: 2026-02-19
    texte: "Loi n° 2026-103 du 19 février 2026 (LFI 2026), article 2"
    resume: "Prorogation de la CDHR jusqu'à ce que le déficit du budget général passe sous 3 % du PIB et ajustement des revenus exceptionnels."
    structurante: true

effets:
  - libelle: "Recettes de la CEHR"
    role: recherche
    nature: recettes
    indicateur: "Recettes annuelles de la CEHR, par année de revenus"
    unite: "€"
    engagement:
      note: chiffre
      cibles:
        sens: au_moins
        periodes:
          - { debut: 2011, annee_ref: 2011, valeur: 420000000, source: "Sénat, rapport n° 107, PLF 2012, art. 3" }
      constat: "L'État a annoncé 420 M€ par an après amendement, jusqu'au retour à un déficit public nul."
      points:
        - "Le projet initial visait 200 M€ sur 2011-2013 au taux de 3 % au-delà de 500 000 € (PLF 2012, Évaluations préalables, art. 3, p. 19)."
        - "L'amendement parlementaire a créé les tranches à 3 % et 4 % : « le rendement attendu passerait de 200 million d'euros à 420 millions d'euros » (Sénat, rapport n° 107, PLF 2012)."
        - "La durée a été étendue « jusqu'à l'imposition des revenus de l'année au titre de laquelle le déficit public des administrations publiques est nul » (Sénat, rapport n° 139, PLF 2026)."
        - "Les seuils n'ayant jamais été indexés sur l'inflation, le rendement s'est accru mécaniquement sans nouvelle cible officielle (Sénat, rapport n° 144, PLF 2025)."
      sources:
        - { label: "PLF 2012, Évaluations préalables, art. 3, p. 15-19", url: "https://www.budget.gouv.fr/documentation/documents-budgetaires/exercice-2012" }
        - { label: "Assemblée nationale, rapport n° 3805 t. II, PLF 2012, art. 3", url: "https://www.assemblee-nationale.fr/13/rapports/r3805-tII.asp" }
        - { label: "Sénat, rapport n° 107, PLF 2012, art. 3", url: "https://www.senat.fr/rap/l11-107-2-1-1/l11-107-2-1-11.html" }
        - { label: "Sénat, rapport n° 139, PLF 2026, art. 2", url: "https://www.senat.fr/rap/l25-139-21/l25-139-212.html" }
    mesure:
      note: tardive
      constat: "La CEHR est fondue dans l'impôt sur le revenu au budget ; aucun suivi dédié n'était prévu au vote."
      points:
        - "Aucune clause de bilan ni de rapport au Parlement n'a été inscrite en loi de finances pour 2012 (PLF 2012, Évaluations préalables, art. 3, p. 19)."
        - "Dans Voies et moyens I, la CEHR n'a pas de ligne budgétaire propre et reste agrégée dans l'impôt sur le revenu net (PLF 2012 à 2027, Voies et moyens, t. I)."
        - "La DGFiP suit la CEHR dans le fichier déclaratif POTE et publie son montant ou ses variations dans ses notes annuelles sur l'IR (DGFiP Statistiques n° 41 et n° 53)."
        - "Faute de série complète publiée, les années 2011 à 2015 manquent en base homogène et 2016 à 2024 sont reconstituées depuis les variations officielles (DGFiP Statistiques n° 53)."
      sources:
        - { label: "PLF 2012 à 2027, Voies et moyens, t. I", url: "https://www.budget.gouv.fr/documentation/documents-budgetaires" }
        - { label: "DGFiP Statistiques n° 41, L'impôt sur le revenu 2024, nov. 2025, p. 1-5", url: "https://www.impots.gouv.fr/sites/default/files/media/9_statistiques/0_etudes_et_stats/0_publications/dgfip_statistiques/2025/num41_11/dgfip_stat_41.pdf" }
        - { label: "DGFiP Statistiques n° 53, L'impôt sur le revenu 2025, nov. 2026, p. 1-5", url: "https://www.impots.gouv.fr/sites/default/files/media/9_statistiques/0_etudes_et_stats/0_publications/dgfip_statistiques/2026/num53_11/dgfip_stat_53_ir_2025.pdf" }
        - { label: "Cour des comptes, La famille dans la fiscalité, 2023, p. 33", url: "https://www.ccomptes.fr/fr/publications/la-famille-dans-la-fiscalite" }
    effet:
      constat: "1,39 Md€ sur les revenus 2025, près de trois fois la cible actualisée, après un pic à 1,94 Md€ en 2024."
      points:
        - "Sur les revenus 2025, la CEHR atteint 1,39 Md€, en recul de 28,3 % après le pic exceptionnel de 2024 (DGFiP Statistiques n° 53, nov. 2026, p. 4-5)."
        - "Le nombre de foyers assujettis a doublé en dix ans, passant de 29 683 en 2012 à 58 700 en 2022, sous l'effet de la non-indexation des seuils (Sénat, rapport n° 144, PLF 2025)."
        - "Le produit est très volatil car concentré sur les revenus du capital : il a bondi en 2018 (+445 M€) puis en 2021 (+564 M€) et 2024 (+522 M€) (DGFiP Statistiques n° 53, Graphique 1)."
        - "En 2025, un foyer du dernier millième acquitte en moyenne 31 000 € de CEHR, soit près de 95 fois la moyenne du dernier dixième (DGFiP Statistiques n° 53, p. 5)."
      sources:
        - { label: "DGFiP Statistiques n° 53, L'impôt sur le revenu 2025, nov. 2026, p. 4-5 et données Excel", url: "https://www.impots.gouv.fr/sites/default/files/media/9_statistiques/0_etudes_et_stats/0_publications/dgfip_statistiques/2026/num53_11/dgfip_stat_53_ir_2025.pdf" }
        - { label: "DGFiP Statistiques n° 41, L'impôt sur le revenu 2024, nov. 2025, p. 5", url: "https://www.impots.gouv.fr/sites/default/files/media/9_statistiques/0_etudes_et_stats/0_publications/dgfip_statistiques/2025/num41_11/dgfip_stat_41.pdf" }
        - { label: "Sénat, rapport n° 144, PLF 2025, art. 3", url: "https://www.senat.fr/rap/l24-144-21/l24-144-212.html" }
    estimation:
      constat: "Les recettes de la CEHR auraient progressé de 609 M€ sur les revenus 2016 à 1,94 Md€ sur ceux de 2024."
      points:
        - "Formule : niveau 2025 publié (1,39 Md€, Tableau 2) diminué récursivement des variations annuelles officielles 2017-2025 (DGFiP Statistiques n° 53, Graphique 1)."
        - "Résultats : 609 M€ (2016), 604 M€ (2017), 1 049 M€ (2018), 1 014 M€ (2019), 929 M€ (2020), 1 493 M€ (2021), 1 520 M€ (2022), 1 416 M€ (2023), 1 938 M€ (2024)."
        - "Cohérence vérifiée : 929 M€ sur 2020 face aux 925 M€ constatés en 2021 (Cour des comptes, 2023, p. 33) et 1 520 M€ sur 2022 face à 1,46 Md€ (Sénat, rapport n° 144, PLF 2025)."
        - "Limites : données POTE arrêtées à septembre de chaque année (hors reliquats ultérieurs) ; l'arrondi du point d'ancrage 2025 (1,39 Md€) induit une marge de ±5 M€."
      solidite: bonne
      sources:
        - { label: "DGFiP Statistiques n° 53, Graphique 1 et Tableau 2 (fichier Excel), nov. 2026", url: "https://www.impots.gouv.fr/sites/default/files/media/9_statistiques/0_etudes_et_stats/0_publications/dgfip_statistiques/2026/num53_11/dgfip_stat_53_ir_2025.pdf" }
        - { label: "Cour des comptes, La famille dans la fiscalité, 2023, p. 33", url: "https://www.ccomptes.fr/fr/publications/la-famille-dans-la-fiscalite" }
    serie:
      trous: non_retrouves
      points:
        - { annee: 2016, valeur: 609000000, producteur: estimation, source: "Reconstitué depuis DGFiP Statistiques n° 53, Graphique 1 et Tableau 2" }
        - { annee: 2017, valeur: 604000000, producteur: estimation, source: "Reconstitué depuis DGFiP Statistiques n° 53, Graphique 1 et Tableau 2" }
        - { annee: 2018, valeur: 1049000000, producteur: estimation, source: "Reconstitué depuis DGFiP Statistiques n° 53, Graphique 1 et Tableau 2" }
        - { annee: 2019, valeur: 1014000000, producteur: estimation, source: "Reconstitué depuis DGFiP Statistiques n° 53, Graphique 1 et Tableau 2" }
        - { annee: 2020, valeur: 929000000, producteur: estimation, source: "Reconstitué depuis DGFiP Statistiques n° 53, Graphique 1 et Tableau 2" }
        - { annee: 2021, valeur: 1493000000, producteur: estimation, source: "Reconstitué depuis DGFiP Statistiques n° 53, Graphique 1 et Tableau 2" }
        - { annee: 2022, valeur: 1520000000, producteur: estimation, source: "Reconstitué depuis DGFiP Statistiques n° 53, Graphique 1 et Tableau 2" }
        - { annee: 2023, valeur: 1416000000, producteur: estimation, source: "Reconstitué depuis DGFiP Statistiques n° 53, Graphique 1 et Tableau 2" }
        - { annee: 2024, valeur: 1938000000, producteur: estimation, source: "Reconstitué depuis DGFiP Statistiques n° 53, Graphique 1 et Tableau 2" }
        - { annee: 2025, valeur: 1390000000, producteur: etat, source: "DGFiP Statistiques n° 53, nov. 2026, Tableau 2, p. 4" }

  - libelle: "Recettes de la CDHR"
    role: recherche
    nature: recettes
    indicateur: "Recettes budgétaires annuelles de la CDHR"
    unite: "€"
    engagement:
      note: chiffre
      cibles:
        sens: au_moins
        periodes:
          - { debut: 2025, annee_ref: 2025, valeur: 2000000000, source: "PLF 2025, Évaluations préalables, art. 3, p. 26" }
      constat: "L'État a annoncé 2 Md€ par an à la création, avant de rabaisser ses prévisions dès la prorogation."
      points:
        - "Le projet de loi de finances tablait sur « +2 » Md€ par an sur 2025-2027, pour 24 300 foyers redevables (PLF 2025, Évaluations préalables, art. 3, p. 25-26)."
        - "La prévision inscrite en loi de finances initiale pour 2025 s'élevait à 1 873 M€ (PLF 2027, Voies et moyens, t. I, p. 30)."
        - "Après l'échec du premier acompte, le gouvernement a abaissé sa prévision 2026 à 650 M€ en nouvelle lecture, puis 790 M€ révisés et 600 M€ pour 2027 (Sénat, rapport n° 312 ; PLF 2027, VM I, p. 30)."
        - "La LFI 2026 a prorogé la CDHR jusqu'à ce que le déficit du budget général passe sous 3 % du PIB, la pérennisant de fait comme la CEHR (Sénat, rapport n° 312, PLF 2026)."
      sources:
        - { label: "PLF 2025, Évaluations préalables, art. 3, p. 25-26", url: "https://www.budget.gouv.fr/documentation/documents-budgetaires/exercice-2025" }
        - { label: "PLF 2025, Voies et moyens, t. I, p. 25", url: "https://www.budget.gouv.fr/documentation/documents-budgetaires/exercice-2025" }
        - { label: "PLF 2027, Voies et moyens, t. I, p. 30", url: "https://www.budget.gouv.fr/documentation/documents-budgetaires/exercice-2027" }
        - { label: "Sénat, rapport n° 312, PLF 2026 (nouvelle lecture), art. 2", url: "https://www.senat.fr/rap/l25-312/l25-3128.html" }
    mesure:
      note: prevue
      constat: "La CDHR dispose d'une ligne budgétaire dédiée dès sa création et d'un suivi déclaratif annuel."
      points:
        - "Contrairement à la CEHR, les recettes encaissées de la CDHR figurent sur une ligne distincte dans Voies et moyens I (PLF 2027, Voies et moyens, t. I, p. 30)."
        - "La DGFiP publie également le montant émis sur les avis d'imposition et le nombre de foyers concernés dans son bilan annuel de l'IR (DGFiP Statistiques n° 53, p. 1 et 4)."
        - "Aucune clause d'évaluation ni de rapport au Parlement n'est toutefois prévue dans la loi de finances (PLF 2025, Évaluations préalables, art. 3, p. 26)."
      sources:
        - { label: "PLF 2027, Voies et moyens, t. I, p. 30", url: "https://www.budget.gouv.fr/documentation/documents-budgetaires/exercice-2027" }
        - { label: "DGFiP Statistiques n° 43, Recettes du budget 2025, 2026", url: "https://www.impots.gouv.fr/etudes-et-statistiques" }
        - { label: "DGFiP Statistiques n° 53, L'impôt sur le revenu 2025, nov. 2026, p. 1 et 4", url: "https://www.impots.gouv.fr/sites/default/files/media/9_statistiques/0_etudes_et_stats/0_publications/dgfip_statistiques/2026/num53_11/dgfip_stat_53_ir_2025.pdf" }
    effet:
      constat: "369 M€ encaissés en 2025, moins d'un cinquième des 2 Md€ annoncés, et 623 M€ au total sur les avis."
      points:
        - "« Les recettes se sont élevées à 369 M€ en 2025, en moins-value de -1 504 M€ par rapport à la prévision de la loi de finances initiale pour 2025 » (PLF 2027, Voies et moyens, t. I, p. 30)."
        - "En intégrant le solde liquidé en 2026, la CDHR atteint 623 M€ sur les revenus 2025 pour environ 14 000 foyers, soit moins d'un tiers de la promesse (DGFiP Statistiques n° 53, p. 1 et 4)."
        - "Le Sénat parle d'un « effondrement du rendement » lié à l'adoption tardive de la LFI 2025, aux aménagements d'assiette et aux comportements d'évitement (Sénat, rapport n° 312, PLF 2026)."
        - "Avant même tout évitement, l'IPP estimait le rendement statique maximal à 1,2 Md€ pour 16 300 foyers, avec un taux effectif plafonnant à 18,9 % (IPP, Mesures socio-fiscales LF 2025, p. 4-5)."
      sources:
        - { label: "PLF 2027, Voies et moyens, t. I, p. 30", url: "https://www.budget.gouv.fr/documentation/documents-budgetaires/exercice-2027" }
        - { label: "DGFiP Statistiques n° 53, L'impôt sur le revenu 2025, nov. 2026, p. 1 et 4", url: "https://www.impots.gouv.fr/sites/default/files/media/9_statistiques/0_etudes_et_stats/0_publications/dgfip_statistiques/2026/num53_11/dgfip_stat_53_ir_2025.pdf" }
        - { label: "Sénat, rapport n° 312, PLF 2026 (nouvelle lecture), art. 2", url: "https://www.senat.fr/rap/l25-312/l25-3128.html" }
        - { label: "IPP, Évaluation des mesures socio-fiscales de la LF 2025, juin 2025, p. 4-5", url: "https://www.ipp.eu/wp-content/uploads/2026/04/chapitre_2_fiscalite_web.pdf" }
    serie:
      trous: non_publies
      points:
        - { annee: 2025, valeur: 369000000, producteur: etat, source: "PLF 2027, Voies et moyens, t. I, p. 30" }

  - libelle: "Évitement et décalage de revenus"
    role: secondaire
    nature: comportement
    indicateur: "Impôts personnels du top 0,001 % en % du revenu économique"
    unite: "%"
    engagement:
      note: ignore
      constat: "Aucun chiffrage ni garde-fou comportemental n'a été prévu lors de la création de la CEHR ou de la CDHR."
      points:
        - "Le chiffrage de la CDHR a été établi « sans tenir compte des effets comportementaux qui ne sont pas chiffrables » (PLF 2025, Évaluations préalables, art. 3, p. 26)."
        - "L'évaluation préalable de la CEHR n'évoquait qu'un impact marginal sur la consommation, sans analyser l'optimisation ou les holdings (PLF 2012, Évaluations préalables, art. 3, p. 18)."
        - "Assises sur le seul revenu fiscal de référence, ni la CEHR ni la CDHR n'intègrent les bénéfices capitalisés dans les sociétés holdings (CPO, Imposition du patrimoine, déc. 2025, p. 211)."
      sources:
        - { label: "PLF 2012, Évaluations préalables, art. 3, p. 18", url: "https://www.budget.gouv.fr/documentation/documents-budgetaires/exercice-2012" }
        - { label: "PLF 2025, Évaluations préalables, art. 3, p. 26", url: "https://www.budget.gouv.fr/documentation/documents-budgetaires/exercice-2025" }
        - { label: "CPO, Corriger les principales distorsions de l'imposition du patrimoine, déc. 2025, p. 211", url: "https://www.ccomptes.fr/fr/institutions-associees/conseil-des-prelevements-obligatoires-cpo" }
    mesure:
      note: par_autres
      constat: "L'État n'a pas évalué l'évitement ; l'IPP et le CPO l'ont documenté sur données fiscales."
      points:
        - "Aucune évaluation causale des comportements d'optimisation n'a été commandée par l'État lors des votes de 2012, 2025 ou 2026 (PLF 2012, 2025 et 2026, Évaluations préalables)."
        - "L'IPP a mesuré dès 2023 la chute du taux effectif personnel au sommet de la distribution via les holdings, puis simulé la CDHR en 2025 et 2026 (IPP, Note n° 92 et rapports LF 2025/2026)."
        - "La DGFiP relève de façon descriptive l'anticipation probable de revenus en 2024 avant la CDHR, sans en isoler l'ampleur causale (DGFiP Statistiques n° 41, p. 3 et n° 53, p. 3)."
      sources:
        - { label: "IPP, Note n° 92, Quels impôts les milliardaires paient-ils ?, juin 2023, p. 5-8", url: "https://www.ipp.eu/wp-content/uploads/2025/05/92_Note_IPP_Billionaires-version-actualisee.pdf" }
        - { label: "IPP, Évaluation des mesures socio-fiscales LF/LFSS 2026, juin 2026, p. 8-12", url: "https://www.ipp.eu/wp-content/uploads/2026/08/chapitre_fiscalite_2026-3.pdf" }
        - { label: "CPO, Corriger les principales distorsions de l'imposition du patrimoine, déc. 2025, p. 211", url: "https://www.ccomptes.fr/fr/institutions-associees/conseil-des-prelevements-obligatoires-cpo" }
        - { label: "DGFiP Statistiques n° 53, L'impôt sur le revenu 2025, nov. 2026, p. 3", url: "https://www.impots.gouv.fr/sites/default/files/media/9_statistiques/0_etudes_et_stats/0_publications/dgfip_statistiques/2026/num53_11/dgfip_stat_53_ir_2025.pdf" }
    effet:
      note: avere
      constat: "L'évitement est avéré : holdings hors assiette au sommet et anticipation massive de dividendes fin 2024."
      points:
        - "Avec les holdings, les impôts personnels (IR, CEHR, prélèvements sociaux) tombent à 2 % du revenu économique au top 0,001 %, contre 46 % au top 0,1 % (IPP, Note n° 92, 2023, p. 1 et 5)."
        - "L'IPP conclut qu'en retenant le RFR, la CDHR « rate la cible des ménages particulièrement aisés » qui logent leurs revenus en holdings (IPP, LF 2025, p. 6 ; CPO, déc. 2025, p. 211)."
        - "Les dividendes des ménages ont bondi de +14 Md€ en 2024 puis chuté de -10 Md€ en 2025, signe d'une anticipation massive avant la CDHR (Insee, cité par IPP, LF 2026, p. 10)."
        - "En 2024, les foyers théoriquement redevables à la CDHR ont crû de +27 % contre +12 % pour les autres hauts revenus, puis la CEHR a reculé de 28 % en 2025 (IPP, 2026, p. 12 ; DGFiP Stat 53, p. 5)."
      sources:
        - { label: "IPP, Note n° 92, Quels impôts les milliardaires paient-ils ?, juin 2023, p. 1 et 5", url: "https://www.ipp.eu/wp-content/uploads/2025/05/92_Note_IPP_Billionaires-version-actualisee.pdf" }
        - { label: "IPP, Évaluation des mesures socio-fiscales de la LF 2025, juin 2025, p. 6", url: "https://www.ipp.eu/wp-content/uploads/2026/04/chapitre_2_fiscalite_web.pdf" }
        - { label: "IPP, Évaluation des mesures socio-fiscales LF/LFSS 2026, juin 2026, p. 10-12", url: "https://www.ipp.eu/wp-content/uploads/2026/08/chapitre_fiscalite_2026-3.pdf" }
        - { label: "CPO, Corriger les principales distorsions de l'imposition du patrimoine, déc. 2025, p. 211", url: "https://www.ccomptes.fr/fr/institutions-associees/conseil-des-prelevements-obligatoires-cpo" }
    serie:
      trous: non_publies
      points:
        - { annee: 2016, valeur: 2, producteur: independant, source: "IPP, Note n° 92, juin 2023, p. 5 (IR + CEHR + PS en % du revenu économique du top 0,001 %)" }

cout_fonctionnement:
  mesure: non_mesure
  constat: "L'État n'isole pas le coût de collecte ; la CDHR impose en outre un fort coût de conformité."
  points:
    - "Les évaluations préalables des PLF 2012, 2025 et 2026 indiquent « Sans objet » pour la charge administrative (PLF 2012 EP, p. 19 ; PLF 2025 EP, p. 26 ; PLF 2026 EP, p. 14)."
    - "La DGFiP ne publie que son taux d'intervention global tous impôts confondus (0,53 % en 2025), sans isoler la CEHR ni la CDHR (RAP 2025, Gestion des finances publiques)."
    - "La CEHR s'appuie sur la déclaration d'IR, mais l'acompte de 95 % de la CDHR exige un autocalcul complexe sans doctrine BOFiP publiée (Sénat, rapport n° 139, PLF 2026)."
    - "Service-public.gouv.fr a conseillé de recourir à un expert-comptable pour calculer l'acompte, sous peine d'une majoration de 20 % (Sénat, rapport n° 139, PLF 2026)."
  sources:
    - { label: "PLF 2012, 2025 et 2026, Évaluations préalables", url: "https://www.budget.gouv.fr/documentation/documents-budgetaires" }
    - { label: "RAP 2025, Mission Gestion des finances publiques, programme 156", url: "https://www.budget.gouv.fr/documentation/documents-budgetaires/exercice-2025" }
    - { label: "Sénat, rapport n° 139, PLF 2026, art. 2", url: "https://www.senat.fr/rap/l25-139-21/l25-139-212.html" }

responsable:
  gestion:
    qui: "Direction générale des finances publiques (DGFiP), selon les règles de l'impôt sur le revenu"
    source: { label: "Article 223 sexies et article 224 du CGI ; PLF 2025, EP, art. 3", url: "https://www.budget.gouv.fr/documentation/documents-budgetaires/exercice-2025" }
  argent:
    qui: "Budget général de l'État"
    source: { label: "PLF 2027, Voies et moyens, t. I, p. 30", url: "https://www.budget.gouv.fr/documentation/documents-budgetaires/exercice-2027" }
---
