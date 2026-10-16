# ETUDE — ES-ZBE : ZBE par ville, étiquette DGT, impuesto de circulación (IVTM)

Relevé du 2026-10-15. Idée n° 9 de `reports/etude-niches-2026-10-15-B.md`, validée par l'éditeur le 2026-10-15.

## Volume (RECETTE §2.0)

Keyword Planner, compte Objet Tech, Espagne, espagnol (`reports/etude-niches-2026-10-15-volumes-KP.txt`) :
**≈ 420 000 recherches/mois** — `zona de bajas emisiones` 100 k – 1 M ; `zbe madrid` et `madrid central`
10 k – 100 k ; 13 requêtes de la liste fermée à 1 k – 10 k. Enchère haute ≈ 1,8 €. Fichier pour la trame :
`reports/es-zbe-volumes-2026-10-15.txt` (`check-volumes.py` : 420 583, GO).

## SERP réel (requêtes tête : « zonas de bajas emisiones », « qué etiqueta tiene mi coche », « impuesto de circulación »)

Recherche web (index US, pas de géolocalisation espagnole : le classement exact peut différer en Espagne) et
lecture des pages, le 2026-10-15.

| Résultat | Type | Ce qu'il fait | Défaut constaté |
|---|---|---|---|
| dgt.es, ayuntamientos (madrid.es, zbe.barcelona…) | BLOQUÉ (officiel) | la règle, ville par ville, chacun chez soi | rien de croisé : la DGT ne parle pas des villes, chaque mairie ne parle que d'elle ; madrid.es et bilbao.eus refusent même la lecture automatique |
| race.es (mapas ZBE) | BLOQUÉ (club automobile) | une carte par ville | texte sans calcul, pas de réponse « avec mon étiquette, à cette date » |
| motor16.com (mapa-multas-zbe-ciudades, 20/02/2026) | média | article en plusieurs pages | périmé : écrit « este mes de febrero » en octobre ; amende générique « suelen ser de 200 euros » ; aucun outil ville × étiquette |
| motor.mapfre.es (restricciones-etiqueta-b-madrid, 05/05/2026) | média d'assureur | article Madrid | **faux** : « diésel desde 2014 » pour la C (la DGT écrit septembre 2015) |
| que.es (24/07/2026) | média | guide national | contradictoire avec mapfre : « diésel posterior a 2015 » ; pas d'outil |
| carwow.es (zona-bajas-emisiones) | DÉFENDU (marque) | liste par région, pages par ville | « 2014 (diésel) » pour la C ; contenu orienté vente de voitures |
| conductorpro.es (mis à jour le 11/10/2026) | CLONE partiel | guide national + « calculadora ZBE » par matrícula et modèle de recours | même erreur « diésel Euro 6 desde 2014 » ; pousse vers ses outils de recours |
| bipdrive.com | DÉFENDU (télépéage) | liste des villes | texte daté (Girona « a partir del 15 de septiembre »), sans calcul |
| guiafiscal.es (IVTM) | CLONE (IVTM seul) | une page par chef-lieu avec cuota 2026 | ne parle ni de ZBE ni d'étiquette ; chefs-lieux seulement ; pas d'anglais |

Verdict §2.1 : volume > 300 000 avec des PRENABLE et un ou deux CLONE partiels → **GO**, à condition de faire
mieux que le meilleur clone sur chaque page. SERP non imprenable : des indépendants (conductorpro, guiafiscal)
sont classés.

## En quoi on fait mieux, concurrent par concurrent

- **DGT et mairies** : on croise les deux. Le simulateur part du carburant et de la date (ou de la norme Euro),
  donne l'étiquette selon le texte exact de la DGT, puis la règle de *chaque* zone de la ville choisie pour ce
  profil (domicilié ou non, résident de la zone), à la date choisie, avec l'horaire, l'amende et le prochain
  durcissement daté.
- **motor16 / que.es / carwow** : chaque règle municipale porte son URL officielle et sa date de vérification
  (15/10/2026) ; les dates futures (Málaga B au 30/11/2026, Palma B au 01/01/2027, València province au
  01/01/2027, Vitoria B en 2030…) sont codées et la page change de réponse le jour J, sans réécriture.
- **mapfre / conductorpro (2014 contre 2015)** : on publie la règle telle que la DGT l'écrit (septembre 2015) et
  on explique d'où vient « 2014 » (homologation Euro 6 des nouveaux types en septembre 2014) ; le simulateur
  signale « dudoso » les mois de transition et renvoie à la consultation officielle par matrícula.
- **guiafiscal** : IVTM de la commune *dans le même calcul* que l'étiquette (la bonification dépend souvent de
  l'étiquette CERO ou ECO), calcul des caballos fiscales depuis la cylindrée (anexo V RGV) ou la puissance
  électrique, et une version anglaise (expatriés, résidents étrangers, location de voitures).
- **Tous** : version anglaise complète, un mini-simulateur sur chaque guide, aucune demande d'e-mail ou de
  téléphone, rien de transmis.

## Actif de données (§2.2)

- 15 villes × zones × 5 étiquettes × profil (domicilié, province, extérieur, résident de la zone) × dates
  (`src/data/zbe/*.json`), chaque fait sourcé ; 13 ordonnances fiscales IVTM 2026 × 5 à 6 tranches × bonifications
  (`src/data/ivtm-2026.json`).
- Critères DGT, barème de l'article 95 TRLHL, formule CVF de l'anexo V RGV, amende LSV : `src/data/params-2026.json`.
- Vérification reproductible : `python3 scripts/verificar_fuentes.py` (84 sources, empreinte SHA-256, citations
  contrôlées ; 0 citation absente le 15/10/2026 ; 17 URL refusent le robot : madrid.es, bilbao.eus, granada.org,
  sevilla.org).

## Leads (§2.3)

Pas de marché de leads direct (assurance auto en arrière-plan, mais la requête est informative). Frein faible.

## Limites connues

- Villes couvertes : 15 sur ≈ 149 communes obligées ; on n'a retenu que celles dont la règle se lit sur une
  source officielle. Alicante, Murcia, Córdoba, Vigo, A Coruña, Gijón : ZBE non retenues faute de source
  officielle lisible le 15/10/2026 (recherche web épuisée en cours de chantier) ; à ajouter.
- IVTM : 13 communes ; bonifications non lues pour Málaga, Vitoria-Gasteiz, Donostia et Móstoles (le
  simulateur ne les applique pas et le dit).
- Motos : la DGT ne publie pas de dates pour la catégorie L ; résultat par date toujours « orientatif ».
