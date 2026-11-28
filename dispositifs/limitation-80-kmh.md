---
titre: "Limitation à 80 km/h"
precision: "Routes secondaires"
resume: "La limitation à 80 km/h a un effet limité : la mortalité a baissé, mais sous la cible de 300 vies par an, puis le retour au 90 km/h a érodé les gains. L'objectif était chiffré et l'évaluation prévue à deux ans, mais le suivi dédié a cessé après 2022. L'allongement des trajets reste modéré."
theme: securite
instrument: regle
statut: en_vigueur
date_maj: 2026-11-25
methode: "1.0"

origine:
  loi_fondatrice: "Décret n° 2018-487 du 15 juin 2018 relatif aux vitesses maximales autorisées des véhicules"
  article_loi: "Article 1er (modifiant l'art. R. 413-2 du code de la route)"
  initiative: "Gouvernement (Comité interministériel de la sécurité routière du 9 janvier 2018)"
  date_entree_vigueur: 2018-07-01
  articles_legi:
    - "R. 413-2 du code de la route"
    - "L. 3221-4-1 du CGCT"
population_cible: "Conducteurs circulant sur environ 400 000 km de routes bidirectionnelles sans séparateur central hors agglomération"
concernes: "Usagers du réseau secondaire ; 85 % des routes départementales restent à 80 km/h en 2025, 51 départements ayant relevé 15 % du réseau à 90 km/h"
recoupements: []

historique:
  - date: 2018-01-09
    texte: "Comité interministériel de la sécurité routière (CISR), mesure n° 5"
    resume: "Annonce de l'abaissement à 80 km/h, avec un objectif de 300 à 400 vies sauvées par an et une clause de rendez-vous au 1er juillet 2020."
    structurante: false
  - date: 2018-07-01
    texte: "Décret n° 2018-487 du 15 juin 2018"
    resume: "Entrée en vigueur de la limitation à 80 km/h sur environ 400 000 km de routes à double sens sans séparateur central."
    structurante: true
  - date: 2019-12-24
    texte: "Loi n° 2019-1428 d'orientation des mobilités (LOM), art. 36"
    resume: "Autorise les départements (et maires ou EPCI) à relever la vitesse à 90 km/h sur certaines sections après étude d'accidentalité et avis de la CDSR."
    structurante: true
  - date: 2022-02-21
    texte: "Loi n° 2022-217 (3DS)"
    resume: "Autorise les collectivités à installer des radars automatiques et prévoit des transferts de routes nationales aux départements."
    structurante: false

effets:
  - libelle: "Mortalité sur les routes secondaires"
    role: recherche
    nature: comportement
    indicateur: "Tués par an hors agglomération et hors autoroutes (métropole)"
    unite: "tués"
    engagement:
      note: chiffre
      cibles:
        sens: au_plus
        periodes:
          - debut: 2019
            valeur: 1849
            source: "CISR, 9 janv. 2018, p. 12 (300 vies/an de moins que la moyenne 2013-2017 de 2 149 tués)"
      constat: "Le gouvernement vise 300 à 400 vies sauvées par an sur le réseau secondaire dès l'annonce de la mesure."
      points:
        - "Le CISR indique que la baisse « permettrait de sauver entre 300 et 400 vies par an », d'après les experts du CNSR (CISR, 9 janv. 2018, p. 12)."
        - "Rapportée à la moyenne 2013-2017 de 2 149 tués par an hors agglomération hors autoroutes, la borne basse de 300 vies fixe un seuil à 1 849 tués au plus (ONISR, 2026)."
        - "Aucune cible chiffrée actualisée n'a été fixée après la loi LOM autorisant le retour partiel au 90 km/h (Sénat, rapport n° 658, 2022)."
      sources:
        - label: "CISR, Dossier de presse du 9 janvier 2018, mesure n° 5, p. 12"
          url: "https://www.onisr.securite-routiere.gouv.fr/sites/default/files/2023-10/2018%2001%2009%20DP%20CISR.pdf"
        - label: "ONISR, Données d'accidentalité routière 2025, onglet Tués France métropolitaine (2026)"
          url: "https://www.onisr.securite-routiere.gouv.fr/sites/default/files/2026-06/20260529%20ONISR%20Accidentalit%C3%A9%20routi%C3%A8re%202025_v2.xlsx"
        - label: "Sénat, Rapport d'information n° 658 sur l'application de la LOM (2022)"
          url: "https://www.senat.fr/rap/r21-658/r21-65819.html"
    mesure:
      note: interrompue
      constat: "L'évaluation prévue à deux ans a été menée, mais le suivi dédié au 80 km/h s'est arrêté après 2022."
      points:
        - "Le CISR instaure une clause de rendez-vous au 1er juillet 2020 pour « étudier avec précision et objectivité l'impact sur l'accidentalité de cette mesure » (CISR, 9 janv. 2018, p. 12)."
        - "Le Cerema remet son rapport final en juillet 2020 sur 20 mois avant le confinement, puis l'ONISR compare les départements à 80 et 90 km/h sur 2019-2022 (Cerema, 2020, p. 1 ; ONISR, 2024, p. 4)."
        - "Depuis les données 2022, le bilan annuel ONISR ne publie plus de mortalité comparée 80/90 km/h ni de série propre aux routes à 80 km/h (ONISR, bilan 2025, p. 35)."
        - "La Cour des comptes relève que la crise sanitaire rend ininterprétables les données 2020-2021 et qu'une consolidation du retour au 90 km/h manquait dès 2020 (Cour des comptes, 2021, p. 17 et 98)."
      sources:
        - label: "CISR, Dossier de presse du 9 janvier 2018, mesure n° 5, p. 12"
          url: "https://www.onisr.securite-routiere.gouv.fr/sites/default/files/2023-10/2018%2001%2009%20DP%20CISR.pdf"
        - label: "Cerema, Abaissement de la vitesse maximale autorisée à 80 km/h — Rapport final d'évaluation, juil. 2020, p. 1"
          url: "https://www.onisr.securite-routiere.gouv.fr/sites/default/files/2020-08/Cerema-EvaluationV80-Juillet2020-V2.pdf"
        - label: "ONISR, Relèvement de la VMA à 90 km/h sur certaines routes départementales — Bilan 2022, fév. 2024, p. 4"
          url: "https://www.onisr.securite-routiere.gouv.fr/sites/default/files/2026-05/2024-02_23_Impact%20relevement_90_2019-2022-v5.pdf"
        - label: "ONISR, Bilan 2025 de la sécurité routière, sept. 2026, p. 35"
          url: "https://www.onisr.securite-routiere.gouv.fr/sites/default/files/2026-09/Bilan%20SR%202025_Publication_14.09.2026.pdf"
        - label: "Cour des comptes, La politique publique de sécurité routière, juil. 2021, p. 17 et 98"
          url: "https://www.ccomptes.fr/sites/default/files/2021-06/20210701-rapport-securite-routiere.pdf"
    effet:
      note: limite
      constat: "La mortalité a baissé, mais sous la cible de 300 vies par an, puis le retour au 90 km/h a érodé les gains."
      points:
        - "Sur 18 mois définitifs (juil. 2018-déc. 2019), le gain est de 331 tués en brut (221/an) et 389 en contrefactuel (-12 %, 259/an) ; 349 en brut sur 20 mois (Cerema, juil. 2020, p. 1 et 44-45)."
        - "« La mesure n’a pas encore pleinement atteint les effets escomptés », avec 58 % des véhicules légers encore au-dessus de 80 km/h fin 2019 et -3,3 km/h en moyenne (Cerema, juil. 2020, p. 2)."
        - "Entre 2019 et 2022, la mortalité recule de 1,8 % dans les départements restés à 80 km/h contre +1,4 % dans ceux passés à 90 km/h, soit 83 décès en plus (ONISR, fév. 2024, p. 4)."
        - "Hors années Covid (2020-2021), on compte 1 877 à 1 973 tués par an de 2022 à 2025, avec 51 départements ayant relevé 15 % du réseau RD à 90 km/h (ONISR, 2026, p. 35 et 66)."
      sources:
        - label: "Cerema, Rapport final d'évaluation 80 km/h, juil. 2020, p. 1-2 et 44-45"
          url: "https://www.onisr.securite-routiere.gouv.fr/sites/default/files/2020-08/Cerema-EvaluationV80-Juillet2020-V2.pdf"
        - label: "ONISR, Relèvement de la VMA à 90 km/h — Bilan 2022, fév. 2024, p. 4"
          url: "https://www.onisr.securite-routiere.gouv.fr/sites/default/files/2026-05/2024-02_23_Impact%20relevement_90_2019-2022-v5.pdf"
        - label: "ONISR, Bilan 2025 (p. 35) et Synthèse de l'accidentalité 2025 (p. 66), 2026"
          url: "https://www.onisr.securite-routiere.gouv.fr/sites/default/files/2026-06/Accidentalit%C3%A9_Routi%C3%A8re_2025_v7.pdf"
        - label: "Cour des comptes, La politique publique de sécurité routière, juil. 2021, p. 98"
          url: "https://www.ccomptes.fr/sites/default/files/2021-06/20210701-rapport-securite-routiere.pdf"
    serie:
      trous: non_publies
      points:
        - { annee: 2013, valeur: 2077, producteur: etat, source: "ONISR, Données accidentalité 2025, onglet Tués France métropolitaine" }
        - { annee: 2014, valeur: 2150, producteur: etat, source: "ONISR, Données accidentalité 2025, onglet Tués France métropolitaine" }
        - { annee: 2015, valeur: 2175, producteur: etat, source: "ONISR, Données accidentalité 2025, onglet Tués France métropolitaine" }
        - { annee: 2016, valeur: 2188, producteur: etat, source: "ONISR, Données accidentalité 2025, onglet Tués France métropolitaine" }
        - { annee: 2017, valeur: 2156, producteur: etat, source: "ONISR, Données accidentalité 2025, onglet Tués France métropolitaine" }
        - { annee: 2018, valeur: 2016, producteur: etat, source: "ONISR, Données accidentalité 2025, onglet Tués France métropolitaine" }
        - { annee: 2019, valeur: 1944, producteur: etat, source: "ONISR, Données accidentalité 2025, onglet Tués France métropolitaine" }
        - { annee: 2020, valeur: 1497, producteur: etat, source: "ONISR, Données accidentalité 2025, onglet Tués France métropolitaine" }
        - { annee: 2021, valeur: 1733, producteur: etat, source: "ONISR, Données accidentalité 2025, onglet Tués France métropolitaine" }
        - { annee: 2022, valeur: 1934, producteur: etat, source: "ONISR, Données accidentalité 2025, onglet Tués France métropolitaine" }
        - { annee: 2023, valeur: 1877, producteur: etat, source: "ONISR, Données accidentalité 2025, onglet Tués France métropolitaine" }
        - { annee: 2024, valeur: 1924, producteur: etat, source: "ONISR, Données accidentalité 2025, onglet Tués France métropolitaine" }
        - { annee: 2025, valeur: 1973, producteur: etat, source: "ONISR, Données accidentalité 2025, onglet Tués France métropolitaine" }

  - libelle: "Temps de parcours"
    role: secondaire
    nature: comportement
    indicateur: "Allongement moyen du temps de parcours sur le réseau concerné"
    unite: "s/km"
    engagement:
      note: ignore
      constat: "Le dossier d'annonce de la mesure n'évoque ni ne borne l'allongement des temps de parcours."
      points:
        - "Le relevé de décisions du CISR mentionne la fluidité du trafic et les émissions polluantes, sans évoquer la perte de temps pour les conducteurs (CISR, 9 janv. 2018, p. 12)."
      sources:
        - label: "CISR, Dossier de presse du 9 janvier 2018, mesure n° 5, p. 12"
          url: "https://www.onisr.securite-routiere.gouv.fr/sites/default/files/2023-10/2018%2001%2009%20DP%20CISR.pdf"
    mesure:
      note: interrompue
      constat: "Mesuré par le Cerema pour le bilan à deux ans, mais non reconduit depuis 2020."
      points:
        - "Le Cerema a comparé les temps de parcours par données GPS de véhicules flottants sur trois mois en 2017 et en 2019 (Cerema, juil. 2020, p. 2)."
        - "Aucun suivi des temps de parcours n'a été publié après le rapport final de 2020 (ONISR, bilan 2025)."
      sources:
        - label: "Cerema, Rapport final d'évaluation 80 km/h, juil. 2020, p. 2"
          url: "https://www.onisr.securite-routiere.gouv.fr/sites/default/files/2020-08/Cerema-EvaluationV80-Juillet2020-V2.pdf"
        - label: "ONISR, Bilan 2025 de la sécurité routière, sept. 2026"
          url: "https://www.onisr.securite-routiere.gouv.fr/sites/default/files/2026-09/Bilan%20SR%202025_Publication_14.09.2026.pdf"
    effet:
      note: modere
      constat: "L'allongement réel n'est que d'une seconde par kilomètre, loin des craintes mais premier coût social du bilan."
      points:
        - "Le Cerema relève « un allongement moyen des temps de parcours de 1 seconde par kilomètre », soit 50 secondes sur 50 km en semaine (Cerema, juil. 2020, p. 2)."
        - "Cette perte reste inférieure au ressenti des usagers, qui déclaraient perdre plus de 2 minutes sur 50 km en octobre 2019 (Cerema, juil. 2020, p. 2)."
        - "Les pertes de temps forment le principal coût social (721 à 918 M€/an), compensé par les gains d'accidentalité (1,2 Md€/an) et de carburant (Cerema, juil. 2020, p. 2 et 76)."
      sources:
        - label: "Cerema, Rapport final d'évaluation 80 km/h, juil. 2020, p. 2 et 76"
          url: "https://www.onisr.securite-routiere.gouv.fr/sites/default/files/2020-08/Cerema-EvaluationV80-Juillet2020-V2.pdf"
        - label: "Cour des comptes, La politique publique de sécurité routière, juil. 2021, p. 160-161"
          url: "https://www.ccomptes.fr/sites/default/files/2021-06/20210701-rapport-securite-routiere.pdf"
    serie:
      trous: non_publies
      points:
        - { annee: 2019, valeur: 1, producteur: etat, source: "Cerema, Évaluation mesure 80 km/h, juil. 2020, p. 2" }

cout_fonctionnement:
  mesure: etat
  montant: 8300000
  cumule: true
  annee: 2019
  constat: "Le coût initial est estimé à 8,3 M€ par l'ONISR, sans isoler les dégradations de radars ni le retour au 90 km/h."
  points:
    - "L'ONISR chiffre les panneaux changés à 2,3 M€ (2,1 M€2015, soit 0,2 M€/an sur 10 ans) et les études et la communication à 6 M€ (Cerema, juil. 2020, p. 75-76 ; Cour des comptes, 2021, p. 160)."
    - "La Cour des comptes souligne qu'elle n'a pas instruit ces chiffres et n'isole pas le coût des panneaux lors du retour au 90 km/h dans les départements (Cour des comptes, 2021, p. 160)."
    - "Les dégradations de radars de fin 2018-2019 ont fait grimper le programme 751 de 227,7 M€ en 2017 à 294,1 M€ en 2019, sans isoler la part liée au 80 km/h (Cour des comptes, 2021, p. 47)."
    - "La promesse d'un fonds hospitalier financé par le surplus radars n'est pas tracée, les infractions ayant chuté de 17,1 à 14,1 M en 2018 (CISR, 2018, p. 9 ; Cour des comptes, 2021, p. 47)."
  sources:
    - label: "Cerema, Rapport final d'évaluation 80 km/h, juil. 2020, p. 75-76"
      url: "https://www.onisr.securite-routiere.gouv.fr/sites/default/files/2020-08/Cerema-EvaluationV80-Juillet2020-V2.pdf"
    - label: "Cour des comptes, La politique publique de sécurité routière, juil. 2021, p. 47 et 160-161"
      url: "https://www.ccomptes.fr/sites/default/files/2021-06/20210701-rapport-securite-routiere.pdf"
    - label: "CISR, Dossier de presse du 9 janvier 2018, mesure n° 4, p. 9"
      url: "https://www.onisr.securite-routiere.gouv.fr/sites/default/files/2023-10/2018%2001%2009%20DP%20CISR.pdf"

responsable:
  gestion:
    qui: "Ministère de l'Intérieur (Délégation à la sécurité routière, ONISR) et conseils départementaux pour les routes départementales"
    source:
      label: "ONISR, Bilan 2025 de la sécurité routière, sept. 2026, p. 35 et 128"
      url: "https://www.onisr.securite-routiere.gouv.fr/sites/default/files/2026-09/Bilan%20SR%202025_Publication_14.09.2026.pdf"
  argent:
    qui: "Règle sans recette dédiée ; les amendes radars alimentent le CAS Contrôle de la circulation et le budget général"
    source:
      label: "Cour des comptes, La politique publique de sécurité routière, juil. 2021, p. 154"
      url: "https://www.ccomptes.fr/sites/default/files/2021-06/20210701-rapport-securite-routiere.pdf"
---
