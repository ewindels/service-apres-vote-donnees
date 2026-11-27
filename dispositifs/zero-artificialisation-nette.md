---
titre: "Zéro artificialisation nette (ZAN)"
resume: "Trop tôt pour conclure sur le ZAN : la cible court jusqu'en 2031 et les plans locaux restent à réviser. L'État a chiffré l'objectif (-50 %), mais son suivi et ses rapports légaux sont tardifs. Le déficit brut des opérations de renouvellement est estimé à 800 M€/an (scénario central)."
theme: environnement
instrument: regle
statut: en_vigueur
date_maj: 2026-11-26
methode: "1.0"

origine:
  loi_fondatrice: "Loi n° 2021-1104 du 22 août 2021 portant lutte contre le dérèglement climatique et renforcement de la résilience face à ses effets"
  article_loi: "Articles 191 à 194, 206 et 207"
  initiative: "Gouvernement Castex (ministre Barbara Pompili, suite à la Convention citoyenne pour le climat)"
  date_entree_vigueur: 2021-08-22
  articles_legi:
    - "Art. L. 101-2 et L. 101-2-1 du code de l'urbanisme"
    - "Art. L. 2231-1 du CGCT"
population_cible: "Régions, intercommunalités, communes et aménageurs en charge de la planification urbaine (SRADDET, SCoT, PLU et cartes communales)."
concernes: "L'ensemble des collectivités compétentes en urbanisme ; 30 % des communes concentrent 80 % de la consommation d'espaces (Cerema, 2026)."
recoupements: []

historique:
  - date: 2021-08-22
    texte: "Loi n° 2021-1104 du 22 août 2021 (Climat et résilience), art. 191 à 194"
    resume: "Fixe l'objectif de zéro artificialisation nette en 2050 et divise par deux la consommation d'espaces sur 2021-2031."
    structurante: true
  - date: 2023-07-20
    texte: "Loi n° 2023-630 du 20 juillet 2023 (facilitation du ZAN), art. 1 à 4"
    resume: "Crée une garantie rurale d'un hectare par commune, un forfait national de 12 500 ha pour les grands projets et reporte les délais."
    structurante: true

effets:
  - libelle: "Consommation d'espaces (ENAF)"
    role: recherche
    nature: comportement
    indicateur: "Consommation annuelle d'espaces naturels, agricoles et forestiers"
    unite: "ha"
    engagement:
      note: chiffre
      cibles:
        sens: au_plus
        periodes:
          - { debut: 2021, fin: 2030, valeur: 11337, source: "Loi Climat et résilience (art. 191) et Cerema, Fichiers fonciers 2026" }
      constat: "Objectif inscrit dans la loi : diviser par deux la consommation d'espaces sur dix ans, zéro net en 2050."
      points:
        - "La loi exige que « la consommation totale d’espace observée à l’échelle nationale soit inférieure à la moitié de celle observée sur les dix années précédant cette date » (Loi 2021-1104, art. 191)."
        - "Sur la référence 2011-2020 (226 734 ha selon les Fichiers fonciers retraités), la cible équivaut à 113 367 ha au plus sur dix ans, soit 11 337 ha/an (Cerema, 2026)."
        - "L'étude d'impact estimait qu'une baisse vers 10 000 ha/an en 2032 économiserait 50 000 à 70 000 ha et éviterait 0,95 à 1,33 Mt de CO2 par an (Étude d'impact, 2021, p. 424)."
        - "La loi de juillet 2023 maintient ces cibles mais crée un forfait national de 12 500 ha pour les grands projets et une garantie d'un hectare par commune (Loi 2023-630, art. 3 et 4)."
      sources:
        - { label: "Loi n° 2021-1104 du 22 août 2021, art. 191 à 194 (texte adopté Sénat)", url: "https://www.senat.fr/leg/tas20-140.html" }
        - { label: "Projet de loi Climat et résilience, exposé des motifs, fév. 2021, p. 8", url: "https://www.assemblee-nationale.fr/dyn/15/textes/l15b3875_projet-loi.pdf" }
        - { label: "Étude d'impact du projet de loi Climat et résilience, fév. 2021, p. 424", url: "https://www.assemblee-nationale.fr/dyn/15/textes/l15b3875_etude-impact" }
        - { label: "Loi n° 2023-630 du 20 juillet 2023, art. 1 à 4 (texte adopté Sénat)", url: "https://www.senat.fr/leg/tas22-163.html" }
    mesure:
      note: tardive
      constat: "Suivi annuel publié par le Cerema, mais outil national livré avec retard et rapports légaux non remis."
      points:
        - "Le portail national publie chaque année la consommation d'espaces, mais avec 18 mois de décalage, des révisions rétroactives et hors voirie non cadastrée (Cerema, 2026, p. 8)."
        - "L'outil mesurant l'artificialisation nette (OCS GE de l'IGN), annoncé pour 2023 (Étude d'impact, p. 453), n'a été achevé qu'en septembre 2025 (Cerema, 2026, p. 6 ; Insee, 2026, p. 3)."
        - "Les rapports au Parlement exigés à six mois sur la fiscalité et le financement (lois de 2021 et 2023) n'ont pas été remis à échéance (AN, rapport n° 2464, 2024, p. 42 ; Sénat)."
        - "Les bilans régionaux sont attendus au premier semestre 2027 et le rapport quinquennal national (art. 207) reste à publier ; les chiffres 2025 ne sont pas parus (Loi 2023-630, art. 2)."
      sources:
        - { label: "Cerema, Analyse de la consommation d'ENAF 2011-2025, juin 2026, p. 6-8", url: "https://artificialisation.developpement-durable.gouv.fr/sites/artificialisation/files/fichiers/2026/06/determinants_2011-2025.pdf" }
        - { label: "Insee Première n° 2103, mai 2026, p. 3", url: "https://www.insee.fr/fr/statistiques/fichier/8985542/IP2103.pdf" }
        - { label: "Assemblée nationale, rapport d'information n° 2464, 2024, p. 41-42", url: "https://www.assemblee-nationale.fr/dyn/16/rapports/cion-eco/l16b2464_rapport-information.pdf" }
        - { label: "Sénat, état d'application de la loi Climat et résilience", url: "https://www.senat.fr/application-des-lois/pjl20-551.html" }
    effet:
      note: trop_tot
      constat: "Trop tôt pour juger : la cible court jusqu'en 2031 et les plans locaux ne sont pas encore révisés."
      points:
        - "Les échéances des plans locaux ont été reportées à fin 2024 (régions), février 2027 (SCoT) et février 2028 (PLU) ; en 2024, seuls 27 % des PLU étaient en révision (Sénat, 2024, p. 20)."
        - "Sur 2021-2024, 72 658 ha ont déjà été consommés, soit 64 % de l'enveloppe décennale cible (113 367 ha) en quatre ans sur dix (Cerema, Fichiers fonciers 2026)."
        - "Le recul à 15 119 ha en 2024 est jugé provisoire par le Cerema (sous-estimation de la dernière année) et lié à la baisse de la construction depuis 2020 (Cerema, 2026, p. 7 et 10)."
        - "L'efficacité constructive plafonne depuis 2021 (2 291 m² par hectare en 2023), signe que la baisse récente ne prouve pas un effet du ZAN (Cerema, 2026, p. 11 ; Cour des comptes, 2023, p. 39)."
      sources:
        - { label: "Cerema, Analyse de la consommation d'ENAF 2011-2025, juin 2026, p. 4, 7-11", url: "https://artificialisation.developpement-durable.gouv.fr/sites/artificialisation/files/fichiers/2026/06/determinants_2011-2025.pdf" }
        - { label: "Sénat, rapport d'information n° 19 (suivi du ZAN), oct. 2024, p. 20-21", url: "https://www.senat.fr/rap/r24-019/r24-0191.pdf" }
        - { label: "Cour des comptes, Fiscalité locale et artificialisation des sols (RP4), 2023, p. 39", url: "https://www.ccomptes.fr/fr/publications/la-fiscalite-locale-et-lartificialisation-des-sols" }
    serie:
      trous: non_publies
      points:
        - { annee: 2011, valeur: 29470, producteur: etat, source: "Cerema, Fichiers fonciers 2026 (conso-com.csv)" }
        - { annee: 2012, valeur: 27619, producteur: etat, source: "Cerema, Fichiers fonciers 2026 (conso-com.csv)" }
        - { annee: 2013, valeur: 25173, producteur: etat, source: "Cerema, Fichiers fonciers 2026 (conso-com.csv)" }
        - { annee: 2014, valeur: 22632, producteur: etat, source: "Cerema, Fichiers fonciers 2026 (conso-com.csv)" }
        - { annee: 2015, valeur: 20511, producteur: etat, source: "Cerema, Fichiers fonciers 2026 (conso-com.csv)" }
        - { annee: 2016, valeur: 20977, producteur: etat, source: "Cerema, Fichiers fonciers 2026 (conso-com.csv)" }
        - { annee: 2017, valeur: 21172, producteur: etat, source: "Cerema, Fichiers fonciers 2026 (conso-com.csv)" }
        - { annee: 2018, valeur: 20877, producteur: etat, source: "Cerema, Fichiers fonciers 2026 (conso-com.csv)" }
        - { annee: 2019, valeur: 18754, producteur: etat, source: "Cerema, Fichiers fonciers 2026 (conso-com.csv)" }
        - { annee: 2020, valeur: 19549, producteur: etat, source: "Cerema, Fichiers fonciers 2026 (conso-com.csv)" }
        - { annee: 2021, valeur: 20130, producteur: etat, source: "Cerema, Fichiers fonciers 2026 (conso-com.csv)" }
        - { annee: 2022, valeur: 19336, producteur: etat, source: "Cerema, Fichiers fonciers 2026 (conso-com.csv)" }
        - { annee: 2023, valeur: 18073, producteur: etat, source: "Cerema, Fichiers fonciers 2026 (conso-com.csv)" }
        - { annee: 2024, valeur: 15119, producteur: etat, source: "Cerema, Fichiers fonciers 2026 (conso-com.csv, provisoire)" }

  - libelle: "Surcoût du renouvellement urbain"
    role: secondaire
    nature: comportement
    indicateur: "Surcoût annuel estimé de l'effort de renouvellement urbain (2021-2031)"
    unite: "M€"
    engagement:
      note: sans_chiffre
      constat: "L'étude d'impact anticipait des opérations plus onéreuses, sans aucun chiffrage ni plafond de surcoût."
      points:
        - "L'étude d'impact avertit que la réforme peut « rendre plus onéreux les actions et opérations d’aménagement et immobilières » (Étude d'impact, 2021, p. 422)."
        - "Elle évoque aussi un risque de spéculation foncière en zone tendue, sans chiffrer le coût public de la transition ni créer de financement dédié (Étude d'impact, 2021, p. 422)."
        - "La loi renvoie le sujet à un rapport au Parlement à six mois sur les coûts de construction et la fiscalité, réitéré en 2023 sans plafond chiffré (Loi 2021-1104, art. 194 VI)."
      sources:
        - { label: "Étude d'impact du projet de loi Climat et résilience, fév. 2021, p. 422", url: "https://www.assemblee-nationale.fr/dyn/15/textes/l15b3875_etude-impact" }
        - { label: "Loi n° 2021-1104 du 22 août 2021, art. 194 VI", url: "https://www.senat.fr/leg/tas20-140.html" }
    mesure:
      note: tardive
      constat: "Aucun chiffrage au vote : la première évaluation publique des surcoûts n'a été réalisée qu'en 2025."
      points:
        - "Faute de remise des rapports légaux, le Sénat constatait fin 2024 qu'« aucune étude fiable ne permet actuellement de quantifier ces surcoûts » (Sénat, rapport n° 19, 2024, p. 16)."
        - "La mission conjointe IGF-IGEDD (juillet 2025, publiée en mai 2026) a livré les premiers scénarios chiffrés jusqu'en 2031, sans chiffrage au-delà ni suivi annuel (IGF-IGEDD, 2025, p. 5)."
        - "L'État ne dispose pas encore d'un suivi national annuel des bilans déficitaires d'aménagement ni de la part exacte du renouvellement urbain (IGF-IGEDD, 2025, p. 7)."
      sources:
        - { label: "Sénat, rapport d'information n° 19 (suivi du ZAN), oct. 2024, p. 16 et 32", url: "https://www.senat.fr/rap/r24-019/r24-0191.pdf" }
        - { label: "IGF et IGEDD, Conséquences de la sobriété foncière sur l'économie de l'aménagement, juil. 2025, p. 5-7", url: "https://www.vie-publique.fr/rapport/299696-evaluation-des-consequences-de-la-sobriete-fonciere-sur-leconomie-de" }
    effet:
      note: avere
      constat: "Surcoût avéré : déficit financier brut d'aménagement estimé à 800 M€/an en scénario central (0 à 3,4 Md€)."
      points:
        - "Les opérations de renouvellement urbain affichent un déficit moyen d'environ 750 k€/ha, couvert par des subventions publiques à hauteur de près de 30 % des recettes (IGF-IGEDD, 2025, p. 5)."
        - "Le surcoût de l'effort supplémentaire jusqu'en 2031 est estimé entre 0 et 3,4 Md€/an selon la densification, et à environ 800 M€/an en scénario central (IGF-IGEDD, 2025, p. 5-6)."
        - "Le recyclage de friches et la réhabilitation restent plus coûteux que l'extension urbaine, et ces coûts tendront à croître après 2031 (IGF-IGEDD, 2025, p. 5 ; Sénat, 2024, p. 16)."
        - "En revanche, la mission conclut que le ZAN ne limite pas en tant que tel la construction et a un impact négligeable sur les recettes fiscales locales (IGF-IGEDD, 2025, p. 5)."
      sources:
        - { label: "IGF et IGEDD, Conséquences de la sobriété foncière sur l'économie de l'aménagement, juil. 2025, p. 5-6 et 23", url: "https://www.vie-publique.fr/rapport/299696-evaluation-des-consequences-de-la-sobriete-fonciere-sur-leconomie-de" }
        - { label: "Sénat, rapport d'information n° 19 (suivi du ZAN), oct. 2024, p. 16", url: "https://www.senat.fr/rap/r24-019/r24-0191.pdf" }
    serie:
      trous: non_publies
      points:
        - { annee: 2025, valeur: 800, producteur: etat, source: "IGF-IGEDD, rapport n° 016204-01, juil. 2025, p. 6 (scénario central)" }

cout_fonctionnement:
  mesure: non_mesure
  constat: "Seul le coût de l'observatoire IGN est publié (plus de 20 M€ sur cinq ans) ; les autres coûts ne sont pas isolés."
  points:
    - "La production de l'OCS GE par l'IGN est financée par l'État pour un coût global de plus de 20 millions d'euros sur la période 2021-2025 (DGALN, Fascicule 1, 2025, p. 37)."
    - "Aucun coût annuel isolé n'est publié pour le portail de l'artificialisation (Cerema) ni pour le surcroît de contrôle de légalité des préfectures (Étude d'impact, 2021, p. 447)."
    - "Le coût de révision des documents d'urbanisme et d'ingénierie pour les collectivités n'est pas chiffré globalement ; l'hétérogénéité locale est jugée difficile à quantifier (IGF-IGEDD, 2025, p. 10)."
    - "Des soutiens d'accompagnement existent via le Fonds vert (300 M€ friches et 100 M€/an renaturation dès 2023), sans budget dédié au pilotage global du ZAN (DGALN, 2025, p. 6 ; Sénat, 2024, p. 32)."
  sources:
    - { label: "DGALN, Fascicule 1 ZAN — Définir et observer, août 2025, p. 6 et 37", url: "https://artificialisation.developpement-durable.gouv.fr/sites/artificialisation/files/fichiers/2025/08/ZAN_FASCICULE_1_44P_v20250801.pdf" }
    - { label: "Étude d'impact du projet de loi Climat et résilience, fév. 2021, p. 446-447", url: "https://www.assemblee-nationale.fr/dyn/15/textes/l15b3875_etude-impact" }
    - { label: "IGF et IGEDD, Conséquences de la sobriété foncière sur l'économie de l'aménagement, juil. 2025, p. 10", url: "https://www.vie-publique.fr/rapport/299696-evaluation-des-consequences-de-la-sobriete-fonciere-sur-leconomie-de" }
    - { label: "Sénat, rapport d'information n° 19 (suivi du ZAN), oct. 2024, p. 14 et 32", url: "https://www.senat.fr/rap/r24-019/r24-0191.pdf" }

responsable:
  gestion:
    qui: "Ministère de la Transition écologique (DGALN), préfectures, régions, intercommunalités et communes ; observation par le Cerema et l'IGN."
    source:
      label: "DGALN, Fascicule 1 ZAN — Définir et observer, août 2025, p. 4 et 37"
      url: "https://artificialisation.developpement-durable.gouv.fr/sites/artificialisation/files/fichiers/2025/08/ZAN_FASCICULE_1_44P_v20250801.pdf"
  argent:
    qui: "Aucun prélèvement dédié ; l'observation nationale (OCS GE) est financée par l'État et l'accompagnement s'appuie sur le Fonds vert."
    source:
      label: "DGALN, Fascicule 1 ZAN — Définir et observer, août 2025, p. 6 et 37"
      url: "https://artificialisation.developpement-durable.gouv.fr/sites/artificialisation/files/fichiers/2025/08/ZAN_FASCICULE_1_44P_v20250801.pdf"
---
