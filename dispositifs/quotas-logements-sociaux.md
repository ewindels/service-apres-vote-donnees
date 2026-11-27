---
titre: "Quotas de logements sociaux (loi SRU)"
resume: "La loi SRU a un effet limité : elle a soutenu la construction sociale, mais plus de la moitié des communes restent sous quota en 2025 et la mixité progresse peu. L'État suit les quotas sans évaluer la mixité et a supprimé l'échéance 2025. Les prélèvements nets atteignent 141 M€."
theme: logement
instrument: regle
statut: en_vigueur
date_maj: 2026-11-27
methode: "1.0"

origine:
  loi_fondatrice: "Loi n° 2000-1208 du 13 décembre 2000 relative à la solidarité et au renouvellement urbains"
  article_loi: "Article 55 (article 25 du projet de loi)"
  initiative: "Gouvernement (ministère de l'Équipement, des Transports et du Logement)"
  date_entree_vigueur: 2002-01-01
  articles_legi:
    - "Articles L. 302-5 à L. 302-9-2 du code de la construction et de l'habitation"
population_cible: "Communes de plus de 3 500 habitants (1 500 en Île-de-France) situées dans une agglomération ou un EPCI de plus de 50 000 habitants"
concernes: "2 206 communes dans le champ SRU au 1er janvier 2026, dont 1 140 déficitaires au 1er janvier 2025 et 335 carencées sur la période 2023-2025 (DHUP, 2026)"
recoupements:
  - aides-personnelles-logement
  - reduction-impot-pinel

historique:
  - date: 2000-12-13
    texte: "Loi n° 2000-1208 (loi SRU), article 55"
    resume: "Instauration d'un quota de 20 % de logements sociaux en vingt ans (d'ici 2020) et d'un prélèvement annuel sur les communes déficitaires."
    structurante: true
  - date: 2013-01-18
    texte: "Loi n° 2013-61 (loi Duflot I), article 10"
    resume: "Relèvement du quota à 25 % dans les territoires tendus, échéance portée à 2025 et majoration possible jusqu'au quintuplement du prélèvement en cas de carence."
    structurante: true
  - date: 2017-01-27
    texte: "Loi n° 2017-86 (Égalité et citoyenneté), article 97"
    resume: "Révision du périmètre, création d'exemptions sur avis de la Commission nationale SRU et quotas qualitatifs (au moins 30 % de PLAI, au plus 30 % de PLS)."
    structurante: false
  - date: 2018-11-23
    texte: "Loi n° 2018-1021 (loi ELAN), article 131"
    resume: "Élargissement des logements décomptés (accession sociale, bail réel solidaire) et délais d'adaptation pour les communes nouvellement entrantes."
    structurante: false
  - date: 2022-02-21
    texte: "Loi n° 2022-217 (loi 3DS), article 65"
    resume: "Suppression de l'échéance couperet de 2025, pérennisation avec un rythme de rattrapage triennal de 33 % du déficit et création de contrats de mixité sociale."
    structurante: true

effets:
  - libelle: "Respect des quotas de logements sociaux"
    role: recherche
    nature: comportement
    indicateur: "Part des communes du champ SRU atteignant leur quota légal"
    unite: "%"
    engagement:
      note: chiffre
      cibles:
        sens: au_moins
        periodes:
          - debut: 2020
            fin: 2020
            valeur: 100
            source: "Loi SRU du 13 décembre 2000, art. 55 (objectif de 20 % à atteindre en vingt ans)"
          - debut: 2025
            fin: 2025
            valeur: 100
            source: "Loi Duflot I du 18 janvier 2013, art. 10 (échéance 2025, supprimée en 2022 par la loi 3DS)"
      constat: "Un quota légal chiffré existe depuis l'origine, mais l'échéance de 2025 a été abandonnée en 2022 sans être atteinte."
      points:
        - "La loi de 2000 fixe un seuil de 20 % de logements sociaux et un rattrapage triennal de 15 % du déficit, « ce qui permet d’atteindre l’objectif final en vingt ans » (Sénat, 2000, p. 188)."
        - "En 2013, le taux est relevé à 25 % en zone tendue avec une échéance légale à 2025 en quatre périodes triennales (Étude d'impact, PJL 2012, partie III)."
        - "En 2022, la loi 3DS supprime la date butoir de 2025 et pérennise un rattrapage de 33 % du déficit par période triennale, abaissable à 25 % par contrat de mixité sociale (Sénat, 2024, p. 12)."
        - "L'objectif de 2025 était hors de portée pour plus de la moitié des communes historiques selon la DHUP (Cour des comptes, 2021, p. 71)."
      sources:
        - label: "Sénat, Rapport n° 304 (1999-2000) sur le PJL SRU, p. 176-188"
          url: "https://www.senat.fr/rap/l99-304/l99-3041.pdf"
        - label: "Étude d'impact du PJL mobilisation du foncier public (loi Duflot I), 2012"
          url: "https://www.senat.fr/leg/etudes-impact/pjl11-750-ei/pjl11-750-ei.html"
        - label: "Cour des comptes, L'application de l'article 55 de la loi SRU, mars 2021, p. 71"
          url: "https://www.ccomptes.fr/fr/publications/lapplication-de-larticle-55-de-la-loi-sru"
        - label: "Sénat, Rapport n° 675 (2023-2024) sur le PJL logements abordables, p. 12"
          url: "https://www.senat.fr/dossier-legislatif/pjl23-573.html"
    mesure:
      note: prevue
      constat: "Un inventaire annuel et un bilan triennal sont prévus dès la loi d'origine et toujours publiés par l'État."
      points:
        - "La loi de 2000 crée un inventaire contradictoire annuel entre préfet et maire ainsi qu'un suivi triennal des réalisations (Sénat, 2000, p. 183 et 187)."
        - "La DHUP publie chaque année l'inventaire communal SRU en données ouvertes et conduit les bilans triennaux avec la Commission nationale SRU (ministère du Logement, 2024)."
        - "L'inventaire issu du répertoire des bailleurs (RPLS) nécessite toutefois de lourds retraitements manuels : champs erronés et suivi lacunaire des ventes (Cour des comptes, 2021, p. 41-42)."
        - "L'élargissement progressif des logements décomptés (hébergement, accession sociale, BRS) complique la comparabilité du stock dans le temps (Cour des comptes, 2021, p. 8 et 46)."
      sources:
        - label: "Sénat, Rapport n° 304 (1999-2000) sur le PJL SRU, p. 183 et 187"
          url: "https://www.senat.fr/rap/l99-304/l99-3041.pdf"
        - label: "Cour des comptes, L'application de l'article 55 de la loi SRU, mars 2021, p. 8 et 39-46"
          url: "https://www.ccomptes.fr/fr/publications/lapplication-de-larticle-55-de-la-loi-sru"
        - label: "Ministère du Logement, L'article 55 de la loi SRU : mode d'emploi, 2024"
          url: "https://www.ecologie.gouv.fr/larticle-55-loi-solidarite-renouvellement-urbain-sru-mode-demploi"
        - label: "DHUP, Jeu de données Communes et inventaire SRU, data.gouv.fr"
          url: "https://www.data.gouv.fr/datasets/communes-et-inventaire-sru/"
    effet:
      note: limite
      constat: "La loi a soutenu la production de logements sociaux, mais plus de la moitié des communes restent déficitaires."
      points:
        - "Selon la Cour des comptes, « un logement social sur deux ayant été produit en zone SRU depuis l’origine », mais « l’objectif n’est donc que partiellement atteint » (2021, p. 85)."
        - "Au 1er janvier 2025, 43,6 % des communes du champ respectent le quota (961 sur 2 206, périmètre élargi de 136 communes depuis 2020) et 1 140 restent déficitaires (DHUP, data.gouv.fr)."
        - "Après des objectifs triennaux dépassés jusqu'en 2019 (107 %), « seuls 67 % ont été réalisés » sur 2020-2022, avec 711 communes en déficit et 341 carencées (Sénat, 2024, p. 15)."
        - "Sur 2000-2008 autour des seuils (avant 2013), l'effet causal atteint +6,6 % de logements sociaux (+0,7 pt) sans effet significatif sur les prix (Gobillon et Vignolles, 2014, p. 18-21)."
      sources:
        - label: "Cour des comptes, L'application de l'article 55 de la loi SRU, mars 2021, p. 7-8, 71 et 85"
          url: "https://www.ccomptes.fr/fr/publications/lapplication-de-larticle-55-de-la-loi-sru"
        - label: "Sénat, Rapport n° 675 (2023-2024) sur le PJL logements abordables, p. 15"
          url: "https://www.senat.fr/dossier-legislatif/pjl23-573.html"
        - label: "Gobillon et Vignolles, Évaluation de la loi SRU, HAL/PSE, 2014, p. 18-21"
          url: "https://shs.hal.science/halshs-01013384/file/wp201422.pdf"
        - label: "DHUP, Jeu de données Communes et inventaire SRU (2024-2026), data.gouv.fr"
          url: "https://www.data.gouv.fr/datasets/communes-et-inventaire-sru/"
    serie:
      trous: non_retrouves
      points:
        - { annee: 2019, valeur: 47.4, producteur: etat, source: "DHUP, citée par la Cour des comptes, mars 2021, p. 7 et 17 (991 conformes sur 2 091)" }
        - { annee: 2020, valeur: 48.6, producteur: etat, source: "DHUP, citée par le Sénat, rapport n° 614, mai 2021, p. 20 (1 005 conformes sur 2 070)" }
        - { annee: 2023, valeur: 42.4, producteur: etat, source: "DHUP, inventaire SRU au 1er janvier 2023, data.gouv.fr (925 conformes sur 2 184)" }
        - { annee: 2024, valeur: 40.6, producteur: etat, source: "Ministère du Logement (DHUP), 2024 (891 conformes sur 2 196 communes)" }
        - { annee: 2025, valeur: 43.6, producteur: etat, source: "DHUP, inventaire SRU au 1er janvier 2025, data.gouv.fr (961 conformes sur 2 206)" }

  - libelle: "Mixité sociale"
    role: recherche
    nature: comportement
    indicateur: "Indice de ségrégation des 20 % de ménages les plus pauvres (contexte)"
    unite: "%"
    engagement:
      note: sans_chiffre
      constat: "La mixité sociale est le but affiché de la loi, mais sans indicateur ni cible chiffrée."
      points:
        - "Le dispositif vise à favoriser une répartition équilibrée du parc social, garante de la mixité sociale et de la solidarité territoriale (ministère du Logement, 2024)."
        - "Ni la loi de 2000 ni les réformes suivantes ne définissent officiellement la mixité sociale ni ne fixent de cible de baisse de la ségrégation (Cour des comptes, 2021, p. 71-72)."
        - "La loi de 2017 ajoute des seuils par catégorie (au moins 30 % de PLAI, au plus 30 % de PLS), qui visent le financement et non la mixité mesurée (Cour des comptes, 2021, p. 31)."
      sources:
        - label: "Sénat, Rapport n° 304 (1999-2000) sur le PJL SRU, p. 176-188"
          url: "https://www.senat.fr/rap/l99-304/l99-3041.pdf"
        - label: "Cour des comptes, L'application de l'article 55 de la loi SRU, mars 2021, p. 31 et 71-72"
          url: "https://www.ccomptes.fr/fr/publications/lapplication-de-larticle-55-de-la-loi-sru"
        - label: "Ministère du Logement, L'article 55 de la loi SRU : mode d'emploi, 2024"
          url: "https://www.ecologie.gouv.fr/larticle-55-loi-solidarite-renouvellement-urbain-sru-mode-demploi"
    mesure:
      note: par_autres
      constat: "L'État n'évalue pas l'effet sur la mixité sociale ; seuls des chercheurs et France Stratégie l'ont mesuré."
      points:
        - "La Cour des comptes constate que « Les effets de l’article 55 de la SRU sur l’amélioration de la mixité sociale ne sont d’ailleurs pas réellement évalués » (2021, p. 72)."
        - "Les bilans triennaux de l'État se limitent au décompte quantitatif et par type de financement des logements produits, sans indicateur de peuplement ni de ségrégation (Cour des comptes, 2021, p. 72)."
        - "Les seules mesures disponibles proviennent de la recherche (Gobillon et Vignolles, 2014 ; Beaubrun-Diant et Maury, 2020) et d'une étude ponctuelle de France Stratégie (2021)."
      sources:
        - label: "Cour des comptes, L'application de l'article 55 de la loi SRU, mars 2021, p. 71-72"
          url: "https://www.ccomptes.fr/fr/publications/lapplication-de-larticle-55-de-la-loi-sru"
        - label: "Sénat, Rapport d'information n° 614 (2020-2021), p. 56-61"
          url: "https://www.senat.fr/notice-rapport/2020/r20-614-notice.html"
        - label: "Gobillon et Vignolles, Évaluation de la loi SRU, HAL/PSE, 2014, p. 20-21"
          url: "https://shs.hal.science/halshs-01013384/file/wp201422.pdf"
    effet:
      note: limite
      constat: "L'article 55 n'a que faiblement contribué à développer la mixité sociale, selon la Cour des comptes."
      points:
        - "Pour la Cour des comptes, « l’article 55 n’aura que faiblement contribué à développer la mixité sociale, et l’objectif n’est donc que partiellement atteint » (2021, p. 85)."
        - "La ségrégation des logements sociaux a reculé (61 % à 50 %, 1990-2015), mais celle des 20 % plus pauvres reste à 31 % en 2012-2018 (France Stratégie, cité par le Sénat, 2021, p. 56 et 61)."
        - "Pour le Sénat, « la mixité sociale n’a pas progressé » (2021, p. 118), 53 % des communes manquant le volet qualitatif (p. 55) ; effet intra-communal nul (Gobillon et Vignolles, 2014, p. 20)."
        - "L'urgence quantitative peut pousser à concentrer les logements sociaux sur du foncier moins cher, « renforçant ainsi la ségrégation et la « ghettoïsation » » (Cour des comptes, 2021, p. 10)."
      sources:
        - label: "Cour des comptes, L'application de l'article 55 de la loi SRU, mars 2021, p. 10 et 85"
          url: "https://www.ccomptes.fr/fr/publications/lapplication-de-larticle-55-de-la-loi-sru"
        - label: "Sénat, Rapport d'information n° 614 (2020-2021), p. 56, 61 et 118"
          url: "https://www.senat.fr/notice-rapport/2020/r20-614-notice.html"
        - label: "Gobillon et Vignolles, Évaluation de la loi SRU, HAL/PSE, 2014, p. 20-21"
          url: "https://shs.hal.science/halshs-01013384/file/wp201422.pdf"
    serie:
      trous: non_publies
      points:
        - { annee: 2012, valeur: 31, producteur: contexte, source: "France Stratégie (fév. 2021), cité par le Sénat, rapport n° 614, p. 61" }
        - { annee: 2018, valeur: 31, producteur: contexte, source: "France Stratégie (fév. 2021), cité par le Sénat, rapport n° 614, p. 61" }

  - libelle: "Prélèvements sur les communes"
    role: budget
    nature: recettes
    indicateur: "Prélèvements nets recouvrés auprès des communes déficitaires"
    unite: "€"
    engagement:
      note: sans_chiffre
      constat: "Aucun produit cible n'est fixé, la pénalité ayant un rôle incitatif et non budgétaire."
      points:
        - "La loi de 2000 fixe le barème du prélèvement (1 000 F par logement manquant, plafonné à 5 % des dépenses de fonctionnement) sans annoncer de produit national attendu (Sénat, 2000, p. 184)."
        - "Les communes peuvent déduire du prélèvement leurs dépenses directes en faveur du logement social jusqu'à le ramener à zéro (ministère du Logement, 2024)."
        - "La réforme de 2013 permet de quintupler le prélèvement des communes carencées pour inciter à construire plutôt que pour dégager un rendement budgétaire (Étude d'impact, PJL 2012, partie III)."
      sources:
        - label: "Sénat, Rapport n° 304 (1999-2000) sur le PJL SRU, p. 184-186"
          url: "https://www.senat.fr/rap/l99-304/l99-3041.pdf"
        - label: "Étude d'impact du PJL mobilisation du foncier public (loi Duflot I), 2012"
          url: "https://www.senat.fr/leg/etudes-impact/pjl11-750-ei/pjl11-750-ei.html"
        - label: "Ministère du Logement, L'article 55 de la loi SRU : mode d'emploi, 2024"
          url: "https://www.ecologie.gouv.fr/larticle-55-loi-solidarite-renouvellement-urbain-sru-mode-demploi"
    mesure:
      note: prevue
      constat: "Les prélèvements sont calculés et publiés chaque année, mais l'usage final des fonds reversés reste peu suivi."
      points:
        - "Les impôts (DGFiP) recouvrent le prélèvement par neuvièmes et la DHUP publie les montants nets commune par commune en données ouvertes (Cour des comptes, 2021, p. 46 ; data.gouv.fr)."
        - "Le contrôle des dépenses déductibles déclarées par les communes reste difficile, avec des pièces parfois manquantes et aucun plafond par logement (Cour des comptes, 2021, p. 46 et 55)."
        - "La DHUP ne dispose d'aucun suivi national de l'utilisation réelle des prélèvements reversés aux EPCI et EPF, dont les crédits peuvent être fongibles (Cour des comptes, 2021, p. 47)."
      sources:
        - label: "Cour des comptes, L'application de l'article 55 de la loi SRU, mars 2021, p. 45-48 et 55"
          url: "https://www.ccomptes.fr/fr/publications/lapplication-de-larticle-55-de-la-loi-sru"
        - label: "DHUP, Jeu de données Communes et inventaire SRU (2024-2026), data.gouv.fr"
          url: "https://www.data.gouv.fr/datasets/communes-et-inventaire-sru/"
    effet:
      constat: "Les prélèvements nets atteignent 141 M€ en 2025, près de cinq fois le niveau de 2011."
      points:
        - "Les prélèvements nets sont passés de 29,9 M€ en 2011 à 88,7 M€ en 2019 après le durcissement des pénalités de 2013 (Cour des comptes, 2021, p. 45)."
        - "Après le bilan 2020-2022, le taux moyen de majoration passe de 87 % à 127 %, portant le prélèvement net à 141,4 M€ en 2025 (Sénat, 2024, p. 15 ; DHUP, data.gouv.fr)."
        - "Avant dépenses déductibles, le prélèvement brut atteint 240 M€ en 2024, ramené à 141 M€ nets dont 68 M€ de majorations de carence (ministère du Logement, 2024)."
        - "Les majorations de carence sont versées au Fonds national des aides à la pierre (4 à 6 % de ses ressources), tandis que le prélèvement de base va aux EPCI ou EPF (Cour des comptes, 2021, p. 45 et 48)."
      sources:
        - label: "Cour des comptes, L'application de l'article 55 de la loi SRU, mars 2021, p. 45, 48 et 54"
          url: "https://www.ccomptes.fr/fr/publications/lapplication-de-larticle-55-de-la-loi-sru"
        - label: "Ministère du Logement, L'article 55 de la loi SRU : mode d'emploi, 2024"
          url: "https://www.ecologie.gouv.fr/larticle-55-loi-solidarite-renouvellement-urbain-sru-mode-demploi"
        - label: "Sénat, Rapport n° 675 (2023-2024) sur le PJL logements abordables, p. 15"
          url: "https://www.senat.fr/dossier-legislatif/pjl23-573.html"
        - label: "DHUP, Jeu de données Communes et inventaire SRU (2024-2025), data.gouv.fr"
          url: "https://www.data.gouv.fr/datasets/communes-et-inventaire-sru/"
    serie:
      trous: non_retrouves
      points:
        - { annee: 2011, valeur: 29900000, producteur: etat, source: "DHUP, citée par la Cour des comptes, mars 2021, p. 45" }
        - { annee: 2012, valeur: 24300000, producteur: etat, source: "DHUP, citée par la Cour des comptes, mars 2021, p. 45" }
        - { annee: 2013, valeur: 30800000, producteur: etat, source: "DHUP, citée par la Cour des comptes, mars 2021, p. 45" }
        - { annee: 2014, valeur: 51500000, producteur: etat, source: "DHUP, citée par la Cour des comptes, mars 2021, p. 45" }
        - { annee: 2015, valeur: 51100000, producteur: etat, source: "DHUP, citée par la Cour des comptes, mars 2021, p. 45" }
        - { annee: 2016, valeur: 51100000, producteur: etat, source: "DHUP, citée par la Cour des comptes, mars 2021, p. 45" }
        - { annee: 2017, valeur: 76700000, producteur: etat, source: "DHUP, citée par la Cour des comptes, mars 2021, p. 45" }
        - { annee: 2018, valeur: 90000000, producteur: etat, source: "DHUP, citée par la Cour des comptes, mars 2021, p. 45" }
        - { annee: 2019, valeur: 88700000, producteur: etat, source: "DHUP, citée par la Cour des comptes, mars 2021, p. 45" }
        - { annee: 2024, valeur: 127300000, producteur: etat, source: "DHUP, jeu de données Communes et inventaire SRU 2024, data.gouv.fr" }
        - { annee: 2025, valeur: 141400000, producteur: etat, source: "DHUP, jeu de données Communes et inventaire SRU 2025, data.gouv.fr" }

cout_fonctionnement:
  mesure: non_mesure
  constat: "Aucun coût administratif consolidé n'est publié par l'État pour gérer et contrôler la loi SRU."
  points:
    - "Au niveau national, deux agents à temps plein suivent le dispositif à la DHUP, et souvent un seul agent par direction départementale (Cour des comptes, 2021, p. 37-38)."
    - "La reprise du droit de préemption en carence mobilise environ un poste pour 30 déclarations : 8 144 instruites en 2018 dans les Alpes-Maritimes pour 10 préemptions (Cour des comptes, 2021, p. 55)."
    - "Sur la reprise de l'instruction des permis de construire dans 69 communes carencées, le Sénat relève : « Les DDTM n'en ont pas les moyens » (Sénat, 2024, p. 16)."
    - "Ni la Commission nationale SRU, ni le recouvrement (DGFiP), ni les coûts de gestion et de conformité des communes ne sont consolidés (Cour des comptes, 2021 ; Sénat, 2021 et 2024)."
  sources:
    - label: "Cour des comptes, L'application de l'article 55 de la loi SRU, mars 2021, p. 37-38, 46 et 55"
      url: "https://www.ccomptes.fr/fr/publications/lapplication-de-larticle-55-de-la-loi-sru"
    - label: "Sénat, Rapport n° 675 (2023-2024) sur le PJL logements abordables, p. 15-16"
      url: "https://www.senat.fr/dossier-legislatif/pjl23-573.html"

responsable:
  gestion:
    qui: "Direction de l'habitat, de l'urbanisme et des paysages (DHUP), préfets de département et Commission nationale SRU"
    source:
      label: "Cour des comptes, L'application de l'article 55 de la loi SRU, mars 2021, p. 37-39"
      url: "https://www.ccomptes.fr/fr/publications/lapplication-de-larticle-55-de-la-loi-sru"
  argent:
    qui: "EPCI délégataires des aides à la pierre, établissements publics fonciers (EPF) et Fonds national des aides à la pierre (FNAP)"
    source:
      label: "Cour des comptes, L'application de l'article 55 de la loi SRU, mars 2021, p. 45 et 48"
      url: "https://www.ccomptes.fr/fr/publications/lapplication-de-larticle-55-de-la-loi-sru"
---
