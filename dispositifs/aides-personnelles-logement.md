---
titre: "Aides personnelles au logement (APL)"
resume: "Les aides au logement atteignent leur cible sur le taux d'effort net des ménages modestes, mais leur effet inflationniste sur les loyers privés est avéré. L'État fixe et suit une cible annuelle sur le taux d'effort, mais ignore l'effet sur les loyers. Leur coût atteint 16,4 Md€ en 2025."
theme: logement
instrument: depense_budgetaire
rattachement:
  mission: "Cohésion des territoires"
  programme: "109 — Aide à l'accès au logement"
  source:
    label: "Cour des comptes, NEB 2025 Cohésion des territoires, 2026, p. 20"
    url: "https://www.ccomptes.fr/sites/default/files/2026-04/NEB-2026-Cohesion-territoires.pdf"
statut: en_vigueur
date_maj: 2026-11-24
methode: "1.0"

origine:
  loi_fondatrice: "Loi n° 77-1 du 3 janvier 1977 portant réforme de l'aide au logement"
  article_loi: "Articles 1er, 5 et 11 (création de l'APL, complétant l'ALF de 1948 et l'ALS de 1971)"
  initiative: "Gouvernement (réforme Barre)"
  date_entree_vigueur: 1977-01-03
  articles_legi: ["Articles L. 821-1 à L. 824-2 du Code de la construction et de l'habitation"]
population_cible: "Ménages aux revenus modestes (locataires du parc social ou privé, résidents en foyer et anciens accédants) sous condition de ressources."
concernes: "5,71 millions d'allocataires fin 2025 (17 % des ménages et 40 % des locataires, SDES 2026)."
recoupements: ["reduction-impot-pinel"]

historique:
  - date: 1977-01-03
    texte: "Loi n° 77-1 du 3 janvier 1977, articles 5 et 11"
    resume: "Création de l'aide personnalisée au logement (APL), qui complète l'ALF (1948) et l'ALS (1971)."
    structurante: true
  - date: 1991-01-01
    texte: "Réforme du « bouclage » (1991-1993)"
    resume: "Ouverture progressive de l'ALS à tous les ménages modestes, notamment les étudiants."
    structurante: true
  - date: 2001-01-01
    texte: "LFI 2001 et décrets de décembre 2000"
    resume: "Instauration d'un barème unique pour les trois aides personnelles (APL, ALF, ALS)."
    structurante: true
  - date: 2017-10-01
    texte: "Décret du 28 septembre 2017"
    resume: "Baisse forfaitaire de 5 € par mois pour l'ensemble des allocataires (392 M€ d'économie en 2018)."
  - date: 2018-01-01
    texte: "LFI 2018, article 126"
    resume: "Réduction de loyer de solidarité (RLS) en HLM compensant une baisse d'APL, et fin progressive de l'APL accession."
    structurante: true
  - date: 2021-01-01
    texte: "Décret du 30 décembre 2019 (contemporanéisation)"
    resume: "Calcul sur les revenus des 12 derniers mois glissants au lieu des revenus de deux ans auparavant."
    structurante: true
  - date: 2025-01-01
    texte: "LFI 2025"
    resume: "Suppression des taxes affectées au FNAL : le fonds est financé à 100 % par le programme 109 de l'État."

effets:
  - libelle: "Allègement du coût du logement"
    role: recherche
    nature: comportement
    indicateur: "Taux d'effort net médian des bénéficiaires"
    unite: "%"
    engagement:
      note: chiffre
      cibles:
        sens: au_plus
        periodes:
          - { debut: 2022, fin: 2022, valeur: 18.2, source: "Budget de l'État, RAP 2022 Programme 109 (data.economie.gouv.fr)" }
          - { debut: 2023, fin: 2024, valeur: 19.9, source: "Budget de l'État, RAP 2023 et 2024 Programme 109 (data.economie.gouv.fr)" }
          - { debut: 2025, valeur: 19.1, source: "Budget de l'État, RAP 2025 Programme 109, cité par Cour des comptes, NEB 2025, 2026, p. 39" }
      constat: "L'État fixe désormais un plafond annuel de taux d'effort net dans son budget, après une loi fondatrice sans chiffre."
      points:
        - "La loi de 1977 vise à « adapter les dépenses de logement à la situation de famille et aux ressources des occupants, tout en laissant subsister un effort de leur part » (Sénat, TA n° 78, art. 1er)."
        - "Dans le budget de l'État (programme 109), la cible plafond du taux d'effort net médian est fixée à 19,9 % en 2023-2024, puis abaissée à 19,1 % en 2025 (Cour des comptes, NEB 2025, 2026, p. 39)."
        - "Cette cible vise à éviter une hausse du taux d'effort plutôt qu'à le réduire, la priorité budgétaire étant de maîtriser la dépense (Cour des comptes, NEB 2025, 2026, p. 39)."
        - "La cible 2022 (18,2 %) reposait encore sur l'ancien calcul ; le relèvement à 19,9 % en 2023 reflète le recalage lié aux revenus contemporains (Cour des comptes, 2025, p. 64)."
      sources:
        - { label: "Sénat, Loi n° 77-1 du 3 janvier 1977, texte adopté n° 78, art. 1er", url: "https://www.senat.fr/leg/1976-1977/ta1976_1977_0078.pdf" }
        - { label: "Cour des comptes, NEB 2025 Cohésion des territoires, 2026, p. 39", url: "https://www.ccomptes.fr/sites/default/files/2026-04/NEB-2026-Cohesion-territoires.pdf" }
        - { label: "Ministère de l'Économie, Performance du budget de l'État P109 (2022-2024)", url: "https://data.economie.gouv.fr/explore/dataset/performance-execution-et-atteinte-de-la-cible-du-budget-de-l-etat-jusqu-au-niveau-sous-indicateur/" }
        - { label: "Cour des comptes, Contemporanéisation des APL, 2025, p. 64", url: "https://www.ccomptes.fr/sites/default/files/2025-01/20250129-S2024-1417-Contemporaneisation-des-aides-personnelles-au-logement.pdf" }
    mesure:
      note: prevue
      constat: "L'État suit chaque année le taux d'effort net médian des allocataires, malgré des ruptures de série et des lacunes."
      points:
        - "La loi de 1977 imposait un rapport annuel au Parlement (art. 39) ; le budget suit depuis un indicateur annuel de taux d'effort net produit par la Cnaf (Cour des comptes, 2015, p. 25)."
        - "Le suivi sur cas-types a été remplacé par des données réelles, puis rompu en 2022 (+1,5 point lors du passage aux revenus contemporains en juin ; Cour des comptes, 2025, p. 64)."
        - "La Cnaf a interrompu après 2022 son bilan comparatif de la réforme « pour des raisons méthodologiques » et a remis en retard le chiffre 2024 (Cour des comptes, 2025, p. 58 ; NEB 2024, p. 77)."
        - "Le non-recours est estimé autour de 5 % sans suivi fin, et la Cnaf souffre d'un fort taux d'anomalies déclaratives (7,4 % ; Cour des comptes, 2025, p. 70, 74-75)."
      sources:
        - { label: "Sénat, Loi n° 77-1 du 3 janvier 1977, texte adopté n° 78, art. 39", url: "https://www.senat.fr/leg/1976-1977/ta1976_1977_0078.pdf" }
        - { label: "Cour des comptes, Les aides personnelles au logement, 2015, p. 25", url: "https://www.ccomptes.fr/sites/default/files/EzPublish/20150916-rapport-APL.pdf" }
        - { label: "Cour des comptes, Contemporanéisation des APL, 2025, p. 58, 64, 70, 74-75", url: "https://www.ccomptes.fr/sites/default/files/2025-01/20250129-S2024-1417-Contemporaneisation-des-aides-personnelles-au-logement.pdf" }
        - { label: "Cour des comptes, NEB 2024 Cohésion des territoires, 2025, p. 77", url: "https://www.ccomptes.fr/sites/default/files/2025-04/NEB-2024-Cohesion-territoires_0.pdf" }
    effet:
      note: atteint
      constat: "Le taux d'effort net médian reste sous la cible plafond, mais masque de forts écarts entre parc social et parc privé."
      points:
        - "Le taux d'effort net médian s'établit à 18,3 % en 2025, sous la cible de 19,1 %, après 18,9 % en 2024 et 19,1 % en 2023 (Cour des comptes, NEB 2025, 2026, p. 39 ; RAP 2023-2024)."
        - "Les aides sont fortement redistributives (75 % des allocataires dans les trois premiers déciles), mais l'écart reste massif : 14,0 % en HLM contre 25,1 % dans le privé en 2025 (RAP 2025)."
        - "La Cour relève : « Les aides personnelles permettent de réduire significativement ce taux, sans parvenir cependant à contrarier son augmentation. » (Cour des comptes, 2015, p. 7)."
        - "La réforme des revenus en temps réel n'a pas changé ce taux et « le projet de réforme n’a pas remédié aux failles structurelles du dispositif » (Cour des comptes, 2025, p. 6, 64)."
      sources:
        - { label: "Cour des comptes, NEB 2025 Cohésion des territoires, 2026, p. 39", url: "https://www.ccomptes.fr/sites/default/files/2026-04/NEB-2026-Cohesion-territoires.pdf" }
        - { label: "Ministère de l'Économie, Performance de la dépense RAP 2025 P109", url: "https://data.economie.gouv.fr/explore/dataset/performance-de-la-depense-rap-2025/" }
        - { label: "Cour des comptes, Les aides personnelles au logement, 2015, p. 7, 99", url: "https://www.ccomptes.fr/sites/default/files/EzPublish/20150916-rapport-APL.pdf" }
        - { label: "Cour des comptes, Contemporanéisation des APL, 2025, p. 6, 64", url: "https://www.ccomptes.fr/sites/default/files/2025-01/20250129-S2024-1417-Contemporaneisation-des-aides-personnelles-au-logement.pdf" }
    serie:
      debut_graphique: 2019
      trous: non_publies
      points:
        - { annee: 2019, valeur: 19.8, producteur: etat, source: "DHUP/Cnaf (série reconstituée), cité par Cour des comptes, 2025, p. 65" }
        - { annee: 2020, valeur: 19.9, producteur: etat, source: "DHUP/Cnaf (série reconstituée), cité par Cour des comptes, 2025, p. 65" }
        - { annee: 2021, valeur: 20.0, producteur: etat, source: "DHUP/Cnaf (série reconstituée), cité par Cour des comptes, 2025, p. 65" }
        - { annee: 2022, valeur: 19.3, producteur: etat, source: "Budget de l'État, RAP 2022 Programme 109 (data.economie.gouv.fr)" }
        - { annee: 2023, valeur: 19.1, producteur: etat, source: "Budget de l'État, RAP 2023 Programme 109 (data.economie.gouv.fr)" }
        - { annee: 2024, valeur: 18.9, producteur: etat, source: "Budget de l'État, RAP 2024 Programme 109 (data.economie.gouv.fr)" }
        - { annee: 2025, valeur: 18.3, producteur: etat, source: "Budget de l'État, RAP 2025 P109, cité par Cour des comptes, NEB 2025, 2026, p. 39" }

  - libelle: "Coût public des aides"
    role: budget
    nature: cout
    indicateur: "Montant annuel des aides personnelles versées"
    unite: "€"
    engagement:
      note: ignore
      constat: "Dépense de guichet, les aides n'ont aucun plafond ni prévision pluriannuelle, seulement des crédits annuels."
      points:
        - "Ni la loi de 1977 ni les réformes suivantes ne plafonnent la dépense totale ; les crédits votés chaque année ont souvent été dépassés en exécution (Cour des comptes, 2015, p. 39 ; NEB 2025, p. 23)."
        - "La réforme de 2018 visait 1,7 Md€ d'économies, dont 1,5 Md€ via la baisse de loyer HLM (RLS), ramenée à 1,3 Md€ puis 900 M€ en 2026 (PLF 2018, EP, p. 295 ; NEB 2025, p. 37)."
        - "La réforme des revenus en temps réel promettait 1,25 Md€ d'économie en 2020 puis 1,4 Md€ en 2022, pour 1,11 Md€ réalisés en 2021 et 1,40 Md€ en 2024 (Cour des comptes, 2025, p. 55 ; NEB 2024, p. 47)."
        - "La baisse de 5 € par mois fin 2017 a généré 392 M€ d'économies en année pleine en 2018 (Cour des comptes, 2025, p. 16)."
      sources:
        - { label: "Cour des comptes, Les aides personnelles au logement, 2015, p. 39", url: "https://www.ccomptes.fr/sites/default/files/EzPublish/20150916-rapport-APL.pdf" }
        - { label: "PLF 2018, Évaluation préalable de l'article 52, p. 295", url: "https://www.assemblee-nationale.fr/dyn/15/textes/l15b0235_projet-loi" }
        - { label: "Cour des comptes, Contemporanéisation des APL, 2025, p. 16, 55", url: "https://www.ccomptes.fr/sites/default/files/2025-01/20250129-S2024-1417-Contemporaneisation-des-aides-personnelles-au-logement.pdf" }
        - { label: "Cour des comptes, NEB 2025 Cohésion des territoires, 2026, p. 23, 37", url: "https://www.ccomptes.fr/sites/default/files/2026-04/NEB-2026-Cohesion-territoires.pdf" }
    mesure:
      note: prevue
      constat: "Les montants versés sont comptés chaque année dans le Compte du logement et le budget de l'État, sans trou."
      points:
        - "Le Compte du logement (SDES) publie une série annuelle continue des trois aides (APL, ALF, ALS) en France entière de 1984 à 2025 (SDES, Compte du logement 2025, tableau 342)."
        - "La dépense FNAL atteint 16,76 Md€ en 2025 en budget contre 16,43 Md€ de prestations au Compte du logement, l'écart tenant aux frais de gestion (~2 % ; NEB 2025, p. 20)."
        - "La Cnaf et la MSA publient chaque année le nombre d'allocataires et les montants mensuels moyens par type d'aide (SDES, 2026, p. 61-62)."
      sources:
        - { label: "SDES, Rapport du compte du logement 2025, 2026, p. 60-62 et tableau 342", url: "https://www.statistiques.developpement-durable.gouv.fr/rapport-du-compte-du-logement-2025" }
        - { label: "Cour des comptes, NEB 2025 Cohésion des territoires, 2026, p. 20", url: "https://www.ccomptes.fr/sites/default/files/2026-04/NEB-2026-Cohesion-territoires.pdf" }
    effet:
      constat: "Les aides atteignent 16,4 Md€ en 2025, en rebond après la baisse due aux réformes récentes."
      points:
        - "Après un pic à 18,1 Md€ en 2016, la dépense a reculé de 14,4 % jusqu'à 15,4 Md€ en 2022 sous l'effet de la baisse de 5 €, de la RLS et des revenus en temps réel (SDES, 2026, p. 61)."
        - "Depuis 2022, les aides repartent à la hausse (+3,0 % en 2025 à 16,4 Md€) avec la revalorisation des barèmes liée à l'inflation (SDES, 2026, p. 61)."
        - "Pour la réforme de 2021, « L’économie budgétaire a donc bien procédé d’un effet volume (nombre d’allocataires) et non d’un effet prix (montant moyen de l’aide) » (Cour des comptes, 2025, p. 77)."
        - "L'IPP estime l'économie de cette réforme à 1,17 Md€ (-8,1 %), avec 2,65 millions de foyers perdants (surtout jeunes actifs) contre 1,30 million de gagnants (IPP, Rapport n° 35, 2021, p. 7-8, 79)."
      sources:
        - { label: "SDES, Rapport du compte du logement 2025, 2026, p. 61 et tableau 342", url: "https://www.statistiques.developpement-durable.gouv.fr/rapport-du-compte-du-logement-2025" }
        - { label: "Cour des comptes, Contemporanéisation des APL, 2025, p. 55, 77", url: "https://www.ccomptes.fr/sites/default/files/2025-01/20250129-S2024-1417-Contemporaneisation-des-aides-personnelles-au-logement.pdf" }
        - { label: "IPP, Rapport n° 35 : Les aides au logement en temps réel, 2021, p. 7-8, 79", url: "https://www.ipp.eu/wp-content/uploads/2025/06/35_aides-logement-temps-reel-evaluation-impact-juillet-2021.pdf" }
    serie:
      debut_graphique: 2000
      trous: non_publies
      points:
        - { annee: 1984, valeur: 4527000000, producteur: etat, source: "SDES, Compte du logement 2025, tableau 342" }
        - { annee: 1985, valeur: 4960000000, producteur: etat, source: "SDES, Compte du logement 2025, tableau 342" }
        - { annee: 1986, valeur: 5481000000, producteur: etat, source: "SDES, Compte du logement 2025, tableau 342" }
        - { annee: 1987, valeur: 5992000000, producteur: etat, source: "SDES, Compte du logement 2025, tableau 342" }
        - { annee: 1988, valeur: 6507000000, producteur: etat, source: "SDES, Compte du logement 2025, tableau 342" }
        - { annee: 1989, valeur: 6982000000, producteur: etat, source: "SDES, Compte du logement 2025, tableau 342" }
        - { annee: 1990, valeur: 7531000000, producteur: etat, source: "SDES, Compte du logement 2025, tableau 342" }
        - { annee: 1991, valeur: 8070000000, producteur: etat, source: "SDES, Compte du logement 2025, tableau 342" }
        - { annee: 1992, valeur: 8825000000, producteur: etat, source: "SDES, Compte du logement 2025, tableau 342" }
        - { annee: 1993, valeur: 9776000000, producteur: etat, source: "SDES, Compte du logement 2025, tableau 342" }
        - { annee: 1994, valeur: 10402000000, producteur: etat, source: "SDES, Compte du logement 2025, tableau 342" }
        - { annee: 1995, valeur: 10846000000, producteur: etat, source: "SDES, Compte du logement 2025, tableau 342" }
        - { annee: 1996, valeur: 11123000000, producteur: etat, source: "SDES, Compte du logement 2025, tableau 342" }
        - { annee: 1997, valeur: 11420000000, producteur: etat, source: "SDES, Compte du logement 2025, tableau 342" }
        - { annee: 1998, valeur: 11771000000, producteur: etat, source: "SDES, Compte du logement 2025, tableau 342" }
        - { annee: 1999, valeur: 12188000000, producteur: etat, source: "SDES, Compte du logement 2025, tableau 342" }
        - { annee: 2000, valeur: 12325000000, producteur: etat, source: "SDES, Compte du logement 2025, tableau 342" }
        - { annee: 2001, valeur: 12671000000, producteur: etat, source: "SDES, Compte du logement 2025, tableau 342" }
        - { annee: 2002, valeur: 13256000000, producteur: etat, source: "SDES, Compte du logement 2025, tableau 342" }
        - { annee: 2003, valeur: 13415000000, producteur: etat, source: "SDES, Compte du logement 2025, tableau 342" }
        - { annee: 2004, valeur: 13879000000, producteur: etat, source: "SDES, Compte du logement 2025, tableau 342" }
        - { annee: 2005, valeur: 13797000000, producteur: etat, source: "SDES, Compte du logement 2025, tableau 342" }
        - { annee: 2006, valeur: 14136000000, producteur: etat, source: "SDES, Compte du logement 2025, tableau 342" }
        - { annee: 2007, valeur: 14235000000, producteur: etat, source: "SDES, Compte du logement 2025, tableau 342" }
        - { annee: 2008, valeur: 15191000000, producteur: etat, source: "SDES, Compte du logement 2025, tableau 342" }
        - { annee: 2009, valeur: 15606000000, producteur: etat, source: "SDES, Compte du logement 2025, tableau 342" }
        - { annee: 2010, valeur: 15921000000, producteur: etat, source: "SDES, Compte du logement 2025, tableau 342" }
        - { annee: 2011, valeur: 16350000000, producteur: etat, source: "SDES, Compte du logement 2025, tableau 342" }
        - { annee: 2012, valeur: 16723000000, producteur: etat, source: "SDES, Compte du logement 2025, tableau 342" }
        - { annee: 2013, valeur: 17384000000, producteur: etat, source: "SDES, Compte du logement 2025, tableau 342" }
        - { annee: 2014, valeur: 17702000000, producteur: etat, source: "SDES, Compte du logement 2025, tableau 342" }
        - { annee: 2015, valeur: 18007000000, producteur: etat, source: "SDES, Compte du logement 2025, tableau 342" }
        - { annee: 2016, valeur: 18109000000, producteur: etat, source: "SDES, Compte du logement 2025, tableau 342" }
        - { annee: 2017, valeur: 18002000000, producteur: etat, source: "SDES, Compte du logement 2025, tableau 342" }
        - { annee: 2018, valeur: 16956000000, producteur: etat, source: "SDES, Compte du logement 2025, tableau 342" }
        - { annee: 2019, valeur: 16659000000, producteur: etat, source: "SDES, Compte du logement 2025, tableau 342" }
        - { annee: 2020, valeur: 16615000000, producteur: etat, source: "SDES, Compte du logement 2025, tableau 342" }
        - { annee: 2021, valeur: 15672000000, producteur: etat, source: "SDES, Compte du logement 2025, tableau 342" }
        - { annee: 2022, valeur: 15411000000, producteur: etat, source: "SDES, Compte du logement 2025, tableau 342" }
        - { annee: 2023, valeur: 15608000000, producteur: etat, source: "SDES, Compte du logement 2025, tableau 342" }
        - { annee: 2024, valeur: 15944000000, producteur: etat, source: "SDES, Compte du logement 2025, tableau 342" }
        - { annee: 2025, valeur: 16428000000, producteur: etat, source: "SDES, Compte du logement 2025, tableau 342" }

  - libelle: "Hausse des loyers privés"
    role: secondaire
    nature: comportement
    indicateur: "Loyers effectifs rapportés à l'inflation (base 100 en 1990)"
    unite: "base 100"
    engagement:
      note: ignore
      constat: "L'État ne s'est jamais fixé d'objectif ni de plafond sur l'effet inflationniste des aides sur les loyers."
      points:
        - "Ni la loi de 1977 ni les réformes suivantes n'évoquent d'objectif de maîtrise de la capture des aides par les bailleurs privés (Sénat, TA n° 78 ; PLF 2018, EP, p. 282-298)."
        - "Le ministère chargé du logement contestait encore l'existence d'un effet inflationniste lors de l'audit de la Cour des comptes en 2015 (Cour des comptes, 2015, p. 60)."
        - "Aucun indicateur du programme 109 ne porte sur l'évolution des loyers privés ou la part d'aide captée par les bailleurs (Cour des comptes, NEB 2025, 2026, p. 39-40)."
      sources:
        - { label: "Sénat, Loi n° 77-1 du 3 janvier 1977, texte adopté n° 78", url: "https://www.senat.fr/leg/1976-1977/ta1976_1977_0078.pdf" }
        - { label: "Cour des comptes, Les aides personnelles au logement, 2015, p. 60", url: "https://www.ccomptes.fr/sites/default/files/EzPublish/20150916-rapport-APL.pdf" }
        - { label: "Cour des comptes, NEB 2025 Cohésion des territoires, 2026, p. 39-40", url: "https://www.ccomptes.fr/sites/default/files/2026-04/NEB-2026-Cohesion-territoires.pdf" }
    mesure:
      note: par_autres
      constat: "L'État n'a jamais organisé de mesure régulière : seules des études ponctuelles de chercheurs ont évalué cet effet."
      points:
        - "Malgré la recommandation de la Cour des comptes en 2015 de lancer une étude officielle, aucune mesure publique régulière n'a été instituée (Cour des comptes, 2015, p. 11, 61)."
        - "L'effet a été mesuré ponctuellement par des chercheurs jusqu'en 2016 (Fack 2005 ; Grislain-Letrémy et Trévien, Insee 2014 puis Banque de France 2023), mais rien depuis les réformes de 2017-2021."
        - "Faute de série sur l'effet propre des aides, le graphique trace en gris l'indice Insee des loyers effectifs rapporté à l'inflation (contexte, tous locataires ; Banque de France, 2023)."
      sources:
        - { label: "Cour des comptes, Les aides personnelles au logement, 2015, p. 11, 59-61", url: "https://www.ccomptes.fr/sites/default/files/EzPublish/20150916-rapport-APL.pdf" }
        - { label: "Cour des comptes, Contemporanéisation des APL, 2025, p. 12", url: "https://www.ccomptes.fr/sites/default/files/2025-01/20250129-S2024-1417-Contemporaneisation-des-aides-personnelles-au-logement.pdf" }
        - { label: "C. Grislain-Letrémy et C. Trévien, Banque de France, Billet n° 302, 2023", url: "https://www.banque-france.fr/fr/publications-et-statistiques/publications/aides-au-logement-un-moindre-effet-haussier-sur-les-loyers-si-loffre-sajuste" }
        - { label: "Insee, IPC loyers effectifs (001764622) et IPC hors tabac (001763852)", url: "https://www.insee.fr/fr/statistiques/serie/001764622" }
    effet:
      note: avere
      constat: "Une part importante des aides dans le parc privé est captée par des hausses de loyers, sans gain de qualité."
      points:
        - "Sur la réforme de 1991-1993, G. Fack estime que 78 % des aides au logement ont été absorbées par la hausse des loyers privés, pour 22 % de gain réel (Insee, Économie et Statistique, 2005, p. 29)."
        - "Sur 2000-2016, « L’effet positif sur les loyers se maintient avec une ampleur constante » sur les 3 pièces et +, l'offre atténuant la hausse sur les studios (Banque de France, 2023)."
        - "La Cour confirme : « Une part significative de l’aide au logement serait en effet captée par les propriétaires bailleurs. » (Cour des comptes, 2015, p. 60)."
        - "Aucune étude ne mesure l'effet depuis 2016 ; la Cour le juge « moins prégnant », plus de 90 % des loyers privés dépassant les plafonds du barème (Cour des comptes, 2025, p. 12)."
      sources:
        - { label: "G. Fack, Économie et Statistique n° 381-382, Insee, 2005, p. 17, 29, 33", url: "https://www.insee.fr/fr/statistiques/fichier/1376573/es381-382b.pdf" }
        - { label: "C. Grislain-Letrémy et C. Trévien, Insee Analyses n° 19, 2014, p. 1-3", url: "https://www.insee.fr/fr/statistiques/1521337" }
        - { label: "C. Grislain-Letrémy et C. Trévien, Banque de France, Billet n° 302, 2023", url: "https://www.banque-france.fr/fr/publications-et-statistiques/publications/aides-au-logement-un-moindre-effet-haussier-sur-les-loyers-si-loffre-sajuste" }
        - { label: "Cour des comptes, Les aides personnelles au logement, 2015, p. 8, 59-61 ; Contemporanéisation, 2025, p. 12", url: "https://www.ccomptes.fr/sites/default/files/2025-01/20250129-S2024-1417-Contemporaneisation-des-aides-personnelles-au-logement.pdf" }
    serie:
      debut_graphique: 1990
      trous: non_publies
      points:
        - { annee: 1990, valeur: 100.0, producteur: contexte, source: "Calcul sur Insee, IPC loyers 001764622 et IPC hors tabac 001763852" }
        - { annee: 1991, valeur: 101.6, producteur: contexte, source: "Calcul sur Insee, IPC loyers 001764622 et IPC hors tabac 001763852" }
        - { annee: 1992, valeur: 104.4, producteur: contexte, source: "Calcul sur Insee, IPC loyers 001764622 et IPC hors tabac 001763852" }
        - { annee: 1993, valeur: 106.9, producteur: contexte, source: "Calcul sur Insee, IPC loyers 001764622 et IPC hors tabac 001763852" }
        - { annee: 1994, valeur: 108.5, producteur: contexte, source: "Calcul sur Insee, IPC loyers 001764622 et IPC hors tabac 001763852" }
        - { annee: 1995, valeur: 109.5, producteur: contexte, source: "Calcul sur Insee, IPC loyers 001764622 et IPC hors tabac 001763852" }
        - { annee: 1996, valeur: 109.8, producteur: contexte, source: "Calcul sur Insee, IPC loyers 001764622 et IPC hors tabac 001763852" }
        - { annee: 1997, valeur: 110.2, producteur: contexte, source: "Calcul sur Insee, IPC loyers 001764622 et IPC hors tabac 001763852" }
        - { annee: 1998, valeur: 111.7, producteur: contexte, source: "Calcul sur Insee, IPC loyers 001764622 et IPC hors tabac 001763852" }
        - { annee: 1999, valeur: 113.1, producteur: contexte, source: "Calcul sur Insee, IPC loyers 001764622 et IPC hors tabac 001763852" }
        - { annee: 2000, valeur: 111.2, producteur: contexte, source: "Calcul sur Insee, IPC loyers 001764622 et IPC hors tabac 001763852" }
        - { annee: 2001, valeur: 109.9, producteur: contexte, source: "Calcul sur Insee, IPC loyers 001764622 et IPC hors tabac 001763852" }
        - { annee: 2002, valeur: 110.7, producteur: contexte, source: "Calcul sur Insee, IPC loyers 001764622 et IPC hors tabac 001763852" }
        - { annee: 2003, valeur: 111.7, producteur: contexte, source: "Calcul sur Insee, IPC loyers 001764622 et IPC hors tabac 001763852" }
        - { annee: 2004, valeur: 113.0, producteur: contexte, source: "Calcul sur Insee, IPC loyers 001764622 et IPC hors tabac 001763852" }
        - { annee: 2005, valeur: 115.1, producteur: contexte, source: "Calcul sur Insee, IPC loyers 001764622 et IPC hors tabac 001763852" }
        - { annee: 2006, valeur: 117.0, producteur: contexte, source: "Calcul sur Insee, IPC loyers 001764622 et IPC hors tabac 001763852" }
        - { annee: 2007, valeur: 118.9, producteur: contexte, source: "Calcul sur Insee, IPC loyers 001764622 et IPC hors tabac 001763852" }
        - { annee: 2008, valeur: 118.3, producteur: contexte, source: "Calcul sur Insee, IPC loyers 001764622 et IPC hors tabac 001763852" }
        - { annee: 2009, valeur: 120.6, producteur: contexte, source: "Calcul sur Insee, IPC loyers 001764622 et IPC hors tabac 001763852" }
        - { annee: 2010, valeur: 120.8, producteur: contexte, source: "Calcul sur Insee, IPC loyers 001764622 et IPC hors tabac 001763852" }
        - { annee: 2011, valeur: 119.7, producteur: contexte, source: "Calcul sur Insee, IPC loyers 001764622 et IPC hors tabac 001763852" }
        - { annee: 2012, valeur: 119.4, producteur: contexte, source: "Calcul sur Insee, IPC loyers 001764622 et IPC hors tabac 001763852" }
        - { annee: 2013, valeur: 120.4, producteur: contexte, source: "Calcul sur Insee, IPC loyers 001764622 et IPC hors tabac 001763852" }
        - { annee: 2014, valeur: 121.2, producteur: contexte, source: "Calcul sur Insee, IPC loyers 001764622 et IPC hors tabac 001763852" }
        - { annee: 2015, valeur: 121.9, producteur: contexte, source: "Calcul sur Insee, IPC loyers 001764622 et IPC hors tabac 001763852" }
        - { annee: 2016, valeur: 122.1, producteur: contexte, source: "Calcul sur Insee, IPC loyers 001764622 et IPC hors tabac 001763852" }
        - { annee: 2017, valeur: 121.1, producteur: contexte, source: "Calcul sur Insee, IPC loyers 001764622 et IPC hors tabac 001763852" }
        - { annee: 2018, valeur: 118.9, producteur: contexte, source: "Calcul sur Insee, IPC loyers 001764622 et IPC hors tabac 001763852" }
        - { annee: 2019, valeur: 118.3, producteur: contexte, source: "Calcul sur Insee, IPC loyers 001764622 et IPC hors tabac 001763852" }
        - { annee: 2020, valeur: 118.5, producteur: contexte, source: "Calcul sur Insee, IPC loyers 001764622 et IPC hors tabac 001763852" }
        - { annee: 2021, valeur: 117.7, producteur: contexte, source: "Calcul sur Insee, IPC loyers 001764622 et IPC hors tabac 001763852" }
        - { annee: 2022, valeur: 112.5, producteur: contexte, source: "Calcul sur Insee, IPC loyers 001764622 et IPC hors tabac 001763852" }
        - { annee: 2023, valeur: 109.6, producteur: contexte, source: "Calcul sur Insee, IPC loyers 001764622 et IPC hors tabac 001763852" }
        - { annee: 2024, valeur: 110.1, producteur: contexte, source: "Calcul sur Insee, IPC loyers 001764622 et IPC hors tabac 001763852" }
        - { annee: 2025, valeur: 111.6, producteur: contexte, source: "Calcul sur Insee, IPC loyers 001764622 et IPC hors tabac 001763852" }

cout_fonctionnement:
  mesure: etat
  montant: 328000000
  annee: 2025
  part_budget: 2
  constat: "L'État verse un forfait de 2 % aux caisses (328 M€ en 2025), mais le coût réel de gestion n'est pas évalué."
  points:
    - "Les frais de gestion versés par le FNAL à la CNAF et à la MSA sont fixés réglementairement à 2 % des prestations : 328 M€ en 2025 contre 319 M€ en 2024 (Cour des comptes, NEB 2025, p. 88, 90)."
    - "La Caisse des dépôts perçoit en outre 23 000 € en 2025 pour la gestion comptable du FNAL, tandis que l'administration centrale (DHUP) ne prélève aucun frais propre (NEB 2025, p. 90)."
    - "La Cour des comptes demande de renégocier ce forfait d'ici le PLF 2027 ou la COG 2028-2032 sur la base des coûts effectivement supportés par les caisses (NEB 2025, p. 90-91)."
    - "La contemporanéisation a réduit mécaniquement ces frais de 18 M€ en 2021 (de 332 M€ à 314 M€) alors que l'actualisation des droits s'accélérait (Cour des comptes, 2025, p. 11, 57)."
  sources:
    - { label: "Cour des comptes, NEB 2025 Cohésion des territoires, 2026, p. 88, 90-91", url: "https://www.ccomptes.fr/sites/default/files/2026-04/NEB-2026-Cohesion-territoires.pdf" }
    - { label: "Cour des comptes, Contemporanéisation des APL, 2025, p. 11, 57", url: "https://www.ccomptes.fr/sites/default/files/2025-01/20250129-S2024-1417-Contemporaneisation-des-aides-personnelles-au-logement.pdf" }

responsable:
  gestion:
    qui: "Caisse nationale des allocations familiales (Cnaf) et Mutualité sociale agricole (MSA), sous tutelle de la direction de l'habitat (DHUP), via le Fonds national d'aide au logement (FNAL)."
    source:
      label: "Cour des comptes, Contemporanéisation des APL, 2025, p. 52-53"
      url: "https://www.ccomptes.fr/sites/default/files/2025-01/20250129-S2024-1417-Contemporaneisation-des-aides-personnelles-au-logement.pdf"
  argent:
    qui: "Versé aux ménages bénéficiaires (ou en tiers payant aux bailleurs) ; financé à 100 % par le budget de l'État (programme 109) depuis 2025 après suppression des taxes affectées au FNAL."
    source:
      label: "SDES, Rapport du compte du logement 2025, 2026, p. 60 ; Cour des comptes, NEB 2025, 2026, p. 20"
      url: "https://www.statistiques.developpement-durable.gouv.fr/rapport-du-compte-du-logement-2025"
---
