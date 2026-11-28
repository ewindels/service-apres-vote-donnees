---
titre: "Taxe carbone"
precision: "Composante carbone des taxes sur l'énergie"
resume: "La composante carbone a un effet limité sur les émissions fossiles, gelée fin 2018 après une hausse budgétaire. Faute de comptabilité dédiée et d'évaluation de l'État, son rendement et son impact restent mal connus ; son poids pèse davantage sur les ménages modestes et ruraux."
theme: environnement
instrument: prelevement
statut: en_vigueur
date_maj: 2026-11-24
methode: "1.0"
origine:
  loi_fondatrice: "Loi n° 2013-1278 du 29 décembre 2013 de finances pour 2014"
  article_loi: "Article 32"
  initiative: "Gouvernement (article 20 du projet de loi de finances pour 2014, sur recommandation du Comité pour la fiscalité écologique)"
  date_entree_vigueur: 2014-04-01
  articles_legi:
  - "L. 312-1 à L. 312-107 du CIBS"
  - "265, 266 quinquies et 266 quinquies B du code des douanes (abrogés)"
population_cible: "Consommateurs de carburants et de combustibles fossiles (produits pétroliers, gaz naturel et charbon), hors secteurs exonérés ou remboursés."
concernes: "Ménages (65 % des recettes estimées de la part carbone en 2019), entreprises et administrations (35 %), hors industries sous quotas européens, aviation, maritime et pêche exonérés (CPO, 2019, rapport particulier n° 5, p. 30)."
historique:
- date: 2014-04-01
  texte: "Loi n° 2013-1278 du 29 décembre 2013 de finances pour 2014, article 32"
  resume: "Introduction d'une part carbone dans les taxes sur les énergies fossiles (TICPE, TICGN, TICC) fixée à 7 €/t de CO₂ en 2014 (compensée sur les carburants et le fioul), 14,50 € en 2015 et 22 € en 2016 ; fin de l'exonération de gaz naturel des ménages"
- date: 2015-08-17
  texte: "Loi n° 2015-992 du 17 août 2015 relative à la transition énergétique pour la croissance verte, article 1er (et LFR 2015, article 14)"
  resume: "Objectif de valeur de la tonne de carbone porté à 56 € en 2020 et 100 € en 2030 ; tarif 2017 inscrit à 30,50 €/t de CO₂"
  structurante: true
- date: 2018-01-01
  texte: "Loi n° 2017-1837 du 30 décembre 2017 de finances pour 2018, article 16"
  resume: "Accélération de la trajectoire : tonne de CO₂ portée à 44,60 € en 2018 et programmée jusqu'à 86,20 € en 2022 (+10,40 €/an), couplée au rattrapage gazole-essence"
  structurante: true
- date: 2019-01-01
  texte: "Loi n° 2018-1317 du 28 décembre 2018 de finances pour 2019, article 64"
  resume: "Gel de la composante carbone à son niveau de 2018 (44,60 €/t de CO₂) et suppression de la trajectoire 2019-2022 à la suite du mouvement des « gilets jaunes »"
  structurante: true
- date: 2022-01-01
  texte: "Ordonnance n° 2021-1843 du 22 décembre 2021"
  resume: "Recodification des taxes intérieures (TICPE, TICGN, TICC, TICFE) en une accise unique sur les énergies dans le CIBS, sans isoler la part carbone"
effets:
- libelle: "Émissions de gaz à effet de serre"
  role: recherche
  nature: comportement
  indicateur: "Émissions de gaz à effet de serre des transports et des bâtiments"
  unite: "Mt CO₂éq"
  engagement:
    note: sans_chiffre
    cibles:
      sens: au_plus
      periodes:
      - debut: 2017
        fin: 2017
        valeur: 233.3
        source: "PLF 2014, évaluation préalable art. 20 (-3 Mt CO₂ à l'horizon 2017 vs 2013)"
    constat: "Une cible ponctuelle à l'horizon 2017 lors de la création, puis aucun objectif chiffré d'émissions lors de la hausse."
    points:
    - "Le PLF 2014 (art. 20, exposé des motifs, p. 48) vise une hausse « proportionnée au contenu en dioxyde de carbone » pour tenir compte de « son impact sur l'effet de serre »."
    - "L'évaluation préalable du PLF 2014 (rapport AN n° 1428, t. II, p. 485) chiffrait l'économie à « respectivement 1 et 2 millions de tonnes de CO2 à l'horizon 2017 » (transports et bâtiment)."
    - "En 2017, l'évaluation préalable du PLF 2018 (art. 9, p. 67 et 69) reconnaît que le rythme est « déterminé au regard des objectifs de recettes » sans chiffrer la baisse d'émissions attendue."
    - "La loi de 2015 visait -40 % d'émissions en 2030 et un carbone à 100 €/t, mais le gel à 44,60 €/t fin 2018 a retiré à la taxe le rôle de levier principal de la trajectoire."
    sources:
    - &src_plf2014
      label: "Projet de loi de finances pour 2014 (n° 1395), exposé des motifs de l'article 20, p. 48"
      url: "https://www.assemblee-nationale.fr/14/projets/pl1395.asp"
    - &src_r1428
      label: "Assemblée nationale, Rapport général n° 1428 sur le PLF 2014, tome II, Christian Eckert, article 20, p. 453-487"
      url: "https://www.assemblee-nationale.fr/14/rapports/r1428-tII.asp"
    - &src_plf2018_ep
      label: "Projet de loi de finances pour 2018, Évaluation préalable de l'article 9, p. 63-71"
      url: "https://www.assemblee-nationale.fr/15/dossiers/loi_finances_2018.asp"
    - &src_cpo2019
      label: "Conseil des prélèvements obligatoires, La fiscalité environnementale au défi de l'urgence climatique, septembre 2019, p. 48 et 165"
      url: "https://www.ccomptes.fr/fr/publications/la-fiscalite-environnementale-au-defi-de-lurgence-climatique"
  mesure:
    note: par_autres
    constat: "L'État n'a prévu ni organisé d'évaluation ; seuls des chercheurs ont estimé l'effet sur les transports ou l'industrie."
    points:
    - "En 2013, lors du vote de l'article 20 (AN, CRI du 21 oct. 2013, 1re séance), le Gouvernement et le rapporteur général ont fait rejeter un amendement demandant un rapport d'évaluation."
    - "La rubrique « Modalités de suivi de la disposition (durée d'application, évaluation) » de l'évaluation préalable du PLF 2018 (art. 9, p. 71) se borne à : « Le dispositif proposé est pérenne. »"
    - "En 2019, le CPO (Rapport particulier n° 4, p. 42) relève qu'« il ne semble pas y avoir d'étude empirique sur l'impact de la mise en place de la composante carbone en France »."
    - "Des chercheurs (Gloriant, 2018 ; Dussaux, OCDE, 2020) ont mené des évaluations sectorielles ; selon le CPO (2026, p. 34), l'attribution globale aux politiques reste un « objet de recherche »."
    sources:
    - label: "Assemblée nationale, Compte rendu intégral de la 1re séance du 21 octobre 2013 (débat sur l'article 20 du PLF 2014)"
      url: "https://www.assemblee-nationale.fr/14/cri/2013-2014/20140030.asp"
    - *src_plf2018_ep
    - &src_cpo2019_rp4
      label: "CPO, Rapport particulier n° 4, Les effets macroéconomiques et environnementaux de la fiscalité carbone, septembre 2019, p. 42 et 107"
      url: "https://www.ccomptes.fr/system/files/2019-09/20190918-rapport-particulier4-CPO-fiscalite-environnementale.pdf"
    - &src_cpo2026
      label: "Conseil des prélèvements obligatoires, Quel avenir pour la fiscalité de l'énergie ?, juin 2026, p. 25, 34 et 59-62"
      url: "https://www.ccomptes.fr/fr/publications/quel-avenir-pour-la-fiscalite-de-lenergie"
  effet:
    note: limite
    constat: "Les études sectorielles estiment une baisse modeste des émissions, freinée par le pétrole bas puis par le gel du barème."
    points:
    - "Les émissions des transports et des bâtiments ont stagné de 2014 à 2017 (219,2 à 223,9 Mt CO₂éq), la chute du baril ayant masqué l'introduction de la taxe (CPO 2019, RP4 p. 39 ; SDES, 2025)."
    - "Sur 2014-2016, une approche par contrôle synthétique « n'a pas permis de détecter un effet statistiquement significatif de la taxe carbone sur les émissions » (Gloriant, CPO 2019, RP5 p. 25)."
    - "Par élasticité-prix, Gloriant (2018, cité par CPO 2019, RP5 p. 25) évalue la baisse induite dans le transport routier léger entre 0,6 et 1,7 Mt de CO₂ en 2017, soit -0,6 % à -1,7 % du secteur."
    - "Dans l'industrie (8 % des émissions soumises, hors quotas), la hausse des prix de l'énergie et de la taxe carbone a réduit les émissions des firmes assujetties (Dussaux, OCDE n° 154, 2020)."
    sources:
    - &src_cpo2019_rp5
      label: "CPO, Rapport particulier n° 5, Les effets économiques de la fiscalité environnementale sur les ménages et les entreprises, septembre 2019, p. 8-9, 24-25 et 30-35"
      url: "https://www.ccomptes.fr/system/files/2019-09/20190918-rapport-particulier5-CPO-fiscalite-environnementale.pdf"
    - *src_cpo2019_rp4
    - &src_sdes2025
      label: "SDES et Citepa, Chiffres clés du climat – France, Europe et Monde, édition 2025, p. 52-54"
      url: "https://www.statistiques.developpement-durable.gouv.fr/chiffres-cles-du-climat-france-europe-et-monde-edition-2025"
    - label: "Damien Dussaux, Les effets conjugués des prix de l'énergie et de la taxe carbone sur la performance économique et environnementale des entreprises françaises du secteur manufacturier, OCDE n° 154, 2020"
      url: "https://doi.org/10.1787/b84b1b7d-en"
  serie:
    trous: non_publies
    points:
    - annee: 2009
      valeur: 242.7
      producteur: contexte
      source: "Citepa, inventaire Secten (SDES, Chiffres clés du climat 2025, p. 54 : transports + bâtiments)"
    - annee: 2010
      valeur: 242.8
      producteur: contexte
      source: "Citepa, inventaire Secten (SDES, Chiffres clés du climat 2025, p. 54 : transports + bâtiments)"
    - annee: 2011
      valeur: 228.7
      producteur: contexte
      source: "Citepa, inventaire Secten (SDES, Chiffres clés du climat 2025, p. 54 : transports + bâtiments)"
    - annee: 2012
      valeur: 234.5
      producteur: contexte
      source: "Citepa, inventaire Secten (SDES, Chiffres clés du climat 2025, p. 54 : transports + bâtiments)"
    - annee: 2013
      valeur: 236.3
      producteur: contexte
      source: "Citepa, inventaire Secten (SDES, Chiffres clés du climat 2025, p. 54 : transports + bâtiments)"
    - annee: 2014
      valeur: 219.2
      producteur: contexte
      source: "Citepa, inventaire Secten (SDES, Chiffres clés du climat 2025, p. 54 : transports + bâtiments)"
    - annee: 2015
      valeur: 223.8
      producteur: contexte
      source: "Citepa, inventaire Secten (SDES, Chiffres clés du climat 2025, p. 54 : transports + bâtiments)"
    - annee: 2016
      valeur: 224.6
      producteur: contexte
      source: "Citepa, inventaire Secten (SDES, Chiffres clés du climat 2025, p. 54 : transports + bâtiments)"
    - annee: 2017
      valeur: 223.9
      producteur: contexte
      source: "Citepa, inventaire Secten (SDES, Chiffres clés du climat 2025, p. 54 : transports + bâtiments)"
    - annee: 2018
      valeur: 216.9
      producteur: contexte
      source: "Citepa, inventaire Secten (SDES, Chiffres clés du climat 2025, p. 54 : transports + bâtiments)"
    - annee: 2019
      valeur: 212.3
      producteur: contexte
      source: "Citepa, inventaire Secten (SDES, Chiffres clés du climat 2025, p. 54 : transports + bâtiments)"
    - annee: 2020
      valeur: 186.7
      producteur: contexte
      source: "Citepa, inventaire Secten (SDES, Chiffres clés du climat 2025, p. 54 : transports + bâtiments)"
    - annee: 2021
      valeur: 203.5
      producteur: contexte
      source: "Citepa, inventaire Secten (SDES, Chiffres clés du climat 2025, p. 54 : transports + bâtiments)"
    - annee: 2022
      valeur: 196.3
      producteur: contexte
      source: "Citepa, inventaire Secten (SDES, Chiffres clés du climat 2025, p. 54 : transports + bâtiments)"
    - annee: 2023
      valeur: 183.8
      producteur: contexte
      source: "Citepa, inventaire Secten (SDES, Chiffres clés du climat 2025, p. 54 : transports + bâtiments)"
    - annee: 2024
      valeur: 182.0
      producteur: contexte
      source: "Citepa, inventaire Secten (SDES, Chiffres clés du climat 2025, p. 54 : transports + bâtiments)"
- libelle: "Recettes"
  role: budget
  nature: recettes
  indicateur: "Recettes de la composante carbone des accises sur les énergies"
  unite: €
  engagement:
    note: chiffre
    cibles:
      sens: au_moins
      periodes:
      - debut: 2014
        fin: 2014
        valeur: 340000000
        source: "PLF 2014, exposé des motifs art. 20, p. 48"
      - debut: 2015
        fin: 2015
        annee_ref: 2014
        valeur: 2500000000
        source: "PLF 2014, exposé des motifs art. 20, p. 48"
      - debut: 2016
        annee_ref: 2014
        valeur: 4000000000
        source: "PLF 2014, exposé des motifs art. 20, p. 48"
    constat: "4 Md€ par an annoncés pour 2016 à la création ; la réforme de 2018 n'a chiffré que des gains à comportement inchangé."
    points:
    - "L'exposé des motifs de l'article 20 du PLF 2014 (p. 48) annonce : « Le rendement attendu de cette mesure est de 340 M€ en 2014, 2,5 Mds€ en 2015 puis 4 Mds€ en 2016 »."
    - "L'article 9 du PLF 2018 (p. 45) relève les tarifs jusqu'en 2022 « Dans un objectif de rendement budgétaire », chiffré de +2,7 Md€ en 2018 à +10,8 Md€ en 2022 (rapport AN n° 273, t. II, p. 274)."
    - "Pour 2018 (barème à 44,60 €/t, maintenu depuis), la DGDDI et la DLF anticipaient 9,2 Md€ de recettes de composante carbone hors TVA, dont 7,0 Md€ en TICPE et 2,2 Md€ en TICGN (CPO 2019, RP4 p. 107)."
    - "En décembre 2018, la LFI 2019 (art. 64) supprime les hausses 2019-2022, réduisant la prévision de TICPE et TICGN de 2,9 Md€ dès 2019 (rapport AN n° 1504, p. 268)."
    sources:
    - *src_plf2014
    - &src_r0273
      label: "Assemblée nationale, Rapport général n° 273 sur le PLF 2018, tome II, Joël Giraud, article 9, p. 254-279"
      url: "https://www.assemblee-nationale.fr/15/rapports/r0273-tII.asp"
    - *src_cpo2019_rp4
    - &src_r1504
      label: "Assemblée nationale, Rapport n° 1504 en nouvelle lecture sur le PLF 2019, Joël Giraud, article 18 terdecies, p. 268-270"
      url: "https://www.assemblee-nationale.fr/dyn/15/rapports/cion_fin/l15b1504_rapport-fond.pdf"
  mesure:
    note: aucune
    constat: "Simple modalité de calcul des accises, la composante carbone ne fait l'objet d'aucun suivi comptable isolé par l'État."
    points:
    - "Le CPO (2019, p. 165) constate que « les recettes de la composante carbone ne sont pas isolées de celles de la TICPE, ce qui ne permet pas d'en suivre l'usage »."
    - "La DGDDI et la DLF ont estimé les recettes anticipées à 9,2 Md€ en 2018 (CPO 2019, RP4 p. 107), et le modèle Elfe du CGDD à 8,0 Md€ en 2019 sur la base des consommations de 2016 (CPO 2019, RP5 p. 30)."
    - "Aucune série d'exécution de la part carbone n'est publiée après 2019 : les annexes Voies et moyens (tome I) suivent uniquement le total de chaque accise (TICPE, TICGN, TICC)."
    - "La recodification de 2022 dans le CIBS (art. L. 312-1 et s.) a unifié l'accise sur les énergies sans davantage distinguer la fraction issue du barème carbone (CPO, 2026, p. 59)."
    sources:
    - *src_cpo2019
    - *src_cpo2019_rp4
    - *src_cpo2019_rp5
    - *src_cpo2026
  effet:
    constat: "Estimée à 8,0 Md€ par le CGDD en 2019, soit le double de la cible de 2016, mais les émissions ont peu reculé."
    points:
    - "Entre 2013 et 2018, les recettes exécutées des trois accises fossiles (TICPE, TICGN, TICC) sont passées de 24,8 Md€ à 35,4 Md€ (+10,6 Md€), avant de plafonner autour de 34 à 35,7 Md€ hors Covid."
    - "Sur la base des volumes de 2016, le modèle Elfe du CGDD évalue la part carbone nette à 8,0 Md€ en 2019 (hors TVA), payée à 65 % par les ménages et 35 % par les entreprises (CPO 2019, RP5 p. 30)."
    - "La hausse de la part carbone a accru le coût des exonérations et remboursements d'accise, passé de 5,6 Md€ en 2014 à 7,6 Md€ en 2017 (AN n° 273, p. 266) et 15 Md€ en 2024 (CPO 2026, p. 61)."
    - "Taxe régressive (poids supérieur pour les ménages modestes et ruraux) ; moins de 10 % des émissions industrielles paient le taux plein par souci de compétitivité (CPO 2019, RP5 p. 8-9)."
    sources:
    - *src_cpo2019_rp5
    - *src_r0273
    - *src_cpo2026
    - &src_vm1
      label: "PLF 2019 à 2027, Évaluation des voies et moyens, tome I (recettes d'accises sur les énergies)"
      url: "https://www.budget.gouv.fr/documentation/documents-budgetaires"
  serie:
    trous: non_publies
    points:
    - annee: 2014
      valeur: 230000000
      producteur: estimation
      source: "Notre calcul : écart des accises fossiles (TICPE, TICGN, TICC) par rapport à 2013 (24,82 Md€)"
    - annee: 2015
      valeur: 2330000000
      producteur: estimation
      source: "Notre calcul : écart des accises fossiles par rapport à 2013 (24,82 Md€)"
    - annee: 2016
      valeur: 4470000000
      producteur: estimation
      source: "Notre calcul : écart des accises fossiles par rapport à 2013 (24,82 Md€)"
    - annee: 2017
      valeur: 7320000000
      producteur: estimation
      source: "Notre calcul : écart des accises fossiles par rapport à 2013 (24,82 Md€)"
    - annee: 2018
      valeur: 9200000000
      producteur: etat
      source: "DGDDI et DLF, rendement anticipé en 2018 hors TVA, cité par le CPO (2019, RP4, p. 107)"
    - annee: 2019
      valeur: 8000000000
      producteur: etat
      source: "CGDD, modèle Elfe (base consommations 2016, hors TVA), cité par le CPO (2019, RP5, p. 30)"
    - annee: 2020
      valeur: 3410000000
      producteur: estimation
      source: "Notre calcul : écart des accises fossiles par rapport à 2013 (chute Covid-19)"
    - annee: 2021
      valeur: 9590000000
      producteur: estimation
      source: "Notre calcul : écart des accises fossiles par rapport à 2013 (24,82 Md€)"
    - annee: 2022
      valeur: 9490000000
      producteur: estimation
      source: "Notre calcul : écart des accises fossiles par rapport à 2013 (24,82 Md€)"
    - annee: 2023
      valeur: 9070000000
      producteur: estimation
      source: "Notre calcul : écart des accises fossiles par rapport à 2013 (24,82 Md€)"
    - annee: 2024
      valeur: 9530000000
      producteur: estimation
      source: "Notre calcul : écart des accises fossiles par rapport à 2013 (24,82 Md€)"
    - annee: 2025
      valeur: 9990000000
      producteur: estimation
      source: "Notre calcul : écart des accises fossiles par rapport à 2013 (24,82 Md€)"
  estimation:
    constat: "Le surplus annuel d'accises fossiles par rapport à 2013 atteint 7,3 Md€ en 2017 puis oscille autour de 9,5 Md€."
    points:
    - "Faute de comptabilité isolée hors 2018-2019, on rapproche le total exécuté des trois accises fossiles (TICPE brute, TICGN et TICC) de son niveau de 2013 avant la part carbone (24,82 Md€)."
    - "Recettes 2013-2016 : TICPE totale (24,65 ; 24,60 ; 26,75 ; 28,69 Md€, rapport AN n° 96, 2017, p. 97) + TICGN et TICC (0,17 ; 0,45 ; 0,40 ; 0,60 Md€, tarifs art. 32 LFI 2014 et volumes SDES)."
    - "Recettes 2017-2025 : TICPE brute totale + TICGN + TICC dans Voies et moyens tome I (PLF 2019 à 2027), soit 32,14 Md€ en 2017, 35,40 Md€ en 2018, 35,72 Md€ en 2019 et 34,81 Md€ en 2025."
    - "Limites : l'écart à 2013 inclut aussi le rattrapage gazole-essence (+2 ct/l en 2015, +1 ct en 2016 et 2017, +2,6 ct en 2018), la hausse du tarif du gaz en 2024 et l'effet des variations de volumes."
    solidite: moyenne
    sources:
    - label: "Assemblée nationale, Rapport d'information n° 96 sur l'application des mesures fiscales, Joël Giraud, juillet 2017, p. 97"
      url: "https://www.assemblee-nationale.fr/dyn/opendata/RINFANR5L15B0096.html"
    - *src_vm1
    - *src_cpo2019_rp5
cout_fonctionnement:
  mesure: non_mesure
  constat: "La composante carbone est intégrée aux accises sur l'énergie, sans coût de collecte isolé ni aux douanes ni aux impôts."
  points:
    - "La composante carbone n'a pas de recouvrement distinct : elle est intégrée aux accises sur l'énergie, transférées des douanes aux impôts (DGFiP) entre 2021 et 2024."
    - "Les coûts directs de gestion de la fiscalité douanière et énergétique (363 M€ en 2021 aux douanes) et de la DGFiP (1,58 Md€) ne sont pas ventilés par taxe (Cour des comptes, juin 2023, p. 52-54)."
    - "Les rapports de la Cour des comptes (2024) et du CPO (2019, 2026) sur la fiscalité de l'énergie ne publient aucun coût de gestion isolé pour la composante carbone."
  sources:
    - { label: "Cour des comptes, La collecte des prélèvements versés par les entreprises, juin 2023, p. 36-38, 52-54", url: "https://www.ccomptes.fr/fr/publications/la-collecte-des-prelevements-verses-par-les-entreprises" }
    - { label: "Cour des comptes, La place de la fiscalité de l'énergie dans la politique énergétique et climatique, sept. 2024", url: "https://www.ccomptes.fr/fr/publications/la-place-de-la-fiscalite-de-lenergie-dans-la-politique-energetique-et-climatique" }

responsable:
  gestion:
    qui: "Direction générale des douanes et droits indirects (DGDDI), transférée à la DGFiP entre 2021 et 2024"
    source:
      label: "PLF 2027, Évaluation des voies et moyens, tome 1, p. 33-37"
      url: "https://www.budget.gouv.fr/documentation/documents-budgetaires"
  argent:
    qui: "Budget général de l'État, collectivités territoriales (régions et départements), AFITF et CAS Transition énergétique (2017-2020)"
    source:
      label: "CPO, Quel avenir pour la fiscalité de l'énergie ?, juin 2026, p. 52"
      url: "https://www.ccomptes.fr/fr/publications/quel-avenir-pour-la-fiscalite-de-lenergie"
---
