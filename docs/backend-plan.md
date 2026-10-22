# Backend plan — Game Hunt Québec

Dernière mise à jour : 2026-10-21
Statut global : Plan initialisé, prêt pour l’étape 1

## Objectif

Construire un backend Node.js qui sert de source de vérité pour le contenu éditorial, puis exporte les fichiers JSON utilisés par le frontend dans le dossier public/data.

Le frontend continuera à consommer des fichiers statiques, mais le contenu sera géré dans une base de données et exporté de manière contrôlée.

---

## Vision d’architecture

- Backend : Node.js + Express
- ORM / accès BD : Prisma
- Base de données : PostgreSQL
- Validation : Zod ou Joi
- Auth/admin : JWT + rôles (admin, editor, viewer si nécessaire)
- Export JSON : script dédié qui génère les fichiers de /public/data
- Déploiement : backend + base + scripts d’export séparés du frontend

### Rôle de chaque couche

- Backend : CRUD, validation, logique métier, export
- Base de données : stockage durable du contenu
- JSON public : export de publication, consommé par le frontend
- Frontend : lecture uniquement des JSON générés

---

## Répartition des responsabilités

### 1) Backend admin / CMS

- gérer les événements
- gérer les commerces / stores
- gérer les lieux / places
- gérer les catégories, filtres, langues
- publier / brouillon
- gérer le statut de données

### 2) Service d’export

- lire les données validées depuis la BD
- transformer au format attendu par le frontend
- écrire dans les fichiers JSON
- versionner ou remplacer les fichiers standards

### 3) Frontend

- consommation des JSON dans /public/data
- logique d’affichage seulement
- jamais écrire dans la base

---

## Structure cible du projet

```text
backend/
  src/
    app.ts
    server.ts
    config/
    modules/
      auth/
      events/
      stores/
      places/
      export/
    prisma/
    lib/
    utils/
    validators/
  prisma/
    schema.prisma
    migrations/
  scripts/
    export-data.ts
    seed.ts
  .env.example
  package.json
  tsconfig.json
```

---

## Phases de mise en œuvre

## Phase 0 — Préparation du projet

### Objectif

Mettre en place la base technique du backend sans encore faire les fonctionnalités métier.

### Tâches

- [ ] créer le dossier backend/
- [ ] initialiser package.json
- [ ] installer dépendances : express, prisma, @prisma/client, dotenv, cors, zod
- [ ] installer dépendances dev : tsx, typescript, @types/node, @types/express
- [ ] créer tsconfig.json
- [ ] créer .env.example
- [ ] configurer les scripts npm
- [ ] créer le point d’entrée app.ts / server.ts
- [ ] tester que le serveur démarre

### Livrable

Un backend Node.js répondant sur un port local avec un health check.

### Critère de validation

- npm run dev démarre sans erreur
- l’endpoint /health répond 200 OK

---

## Phase 1 — Base de données et schéma

### Objectif

Définir le modèle de données au centre du projet.

### Tâches

- [ ] décider des tables principales : Event, Store, Place, Category, Translation, Media
- [ ] définir les champs communs : id, createdAt, updatedAt, status, language
- [ ] définir les relations entre les entités
- [ ] définir les champs spécifiques aux stores et événements
- [ ] créer schema.prisma
- [ ] générer le client Prisma
- [ ] exécuter les migrations init
- [ ] vérifier la connexion PostgreSQL

### Modèle recommandé

#### Event

- id
- title
- slug
- description
- startDate
- endDate
- location
- categoryId
- status
- image
- createdAt
- updatedAt

#### Store

- id
- name
- slug
- categoryId
- description
- address
- city
- latitude
- longitude
- website
- image
- status
- createdAt
- updatedAt

#### Place

- id
- name
- type
- region
- description
- coordinates
- status

#### Category

- id
- name
- slug
- type
- order

### Livrable

La base est créée et Prisma est prêt à servir les modules applicatifs.

---

## Phase 2 — Modules métier

### Objectif

Crée un CRUD robuste pour chaque type de contenu.

### Tâches

- [ ] module events : list, get, create, update, delete
- [ ] module stores : list, get, create, update, delete
- [ ] module places : list, get, create, update, delete
- [ ] module categories : list, get, create, update, delete
- [ ] validation des entrées avec Zod
- [ ] gestion des erreurs HTTP cohérente
- [ ] filtres et recherche simples
- [ ] pagination pour les listes

### Décisions de conception

- les routes doivent utiliser des contrôleurs légers
- la logique métier va dans des services
- les validations doivent empêcher des mauvais payloads
- les IDs sont UUID ou ints auto-incrémentés selon le besoin

### Livrable

Les APIs CRUD sont opérationnelles sur les types de contenu principaux.

---

## Phase 3 — Authentification et sécurité

### Objectif

Protéger les endpoints d’édition.

### Tâches

- [ ] définir les rôles : admin / editor / viewer
- [ ] créer un système d’auth simple via JWT
- [ ] sécuriser les endpoints de création / modification / suppression
- [ ] créer le middleware d’authentification
- [ ] créer le middleware d’autorisation
- [ ] ajouter gestion des erreurs de permission

### Recommandation

Pour commencer, un système simple avec:

- login admin via email/password
- JWT en cookie ou Authorization header
- routes protégées pour les écrans d’édition

### Livrable

Seuls les comptes autorisés peuvent modifier les données.

---

## Phase 4 — Service d’export JSON

### Objectif

Générer automatiquement les fichiers JSON attendus par le frontend.

### Tâches

- [ ] créer le module export/
- [ ] écrire un script de génération des JSON
- [ ] exporter les événements dans le format attendu
- [ ] exporter les stores dans le format attendu
- [ ] exporter les places dans le format attendu
- [ ] créer le dossier de sortie de publication
- [ ] ajouter la logique de remplacement complet des fichiers
- [ ] gérer les erreurs d’écriture
- [ ] ajouter un endpoint `POST /admin/export` pour déclencher manuellement

### Format d’export

Exemples de fichiers attendus:

- events.json
- stores.json
- places.json

### Règle

Le frontend ne doit pas dépendre d’un JSON non généré : l’export doit être explicite et reproductible.

### Livrable

Le backend produit les fichiers JSON dans le bon format métier.

---

## Phase 5 — Intégration avec le frontend

### Objectif

Connecter le frontend à l’écosystème backend + export.

### Tâches

- [ ] vérifier le format exact des JSON consommés par le front
- [ ] comparer les structures actuelles dans apps/web/public/data
- [ ] créer le mapping entre données DB et structure front
- [ ] ajuster les champs exportés pour correspondre aux types TypeScript du front
- [ ] valider le chargement des données depuis le JSON

### Critère de validation

- les données du front affichent bien les objets après export
- aucun conflit entre les schémas front et backend

---

## Phase 6 — Script d’import / seed et données de test

### Objectif

Rendre le backend facile à initialiser pour le dev et les tests.

### Tâches

- [ ] créer un script seed.ts
- [ ] ajouter des données d’exemple réalistes
- [ ] créer des fixtures pour événements et stores
- [ ] documenter le processus de setup local
- [ ] ajouter script `npm run seed`

### Livrable

Un environnement de dev prêt à fonctionner rapidement avec des données de démonstration.

---

## Phase 7 — Qualité, tests et robustesse

### Objectif

Assurer la stabilité du backend avant de passer à la production ou à une utilisation intense.

### Tâches

- [ ] ajouter des tests unitaires sur les services
- [ ] ajouter des tests API sur les endpoints principaux
- [ ] valider les schémas de sortie JSON
- [ ] vérifier les cas limites : valeurs nulles, erreurs de validation, permissions
- [ ] configurer linter / formatter
- [ ] préparer la CI basique

### Outils recommandés

- Vitest pour tests unitaires
- Supertest pour API
- Prisma Studio pour inspection DB

---

## Phase 8 — Déploiement et automatisation

### Objectif

Rendre l’export exploitable dans un workflow réel.

### Tâches

- [ ] configurer le process de départ du backend
- [ ] préparer les variables d’environnement production
- [ ] définir le workflow de publication vers le site
- [ ] documenter l’export manuel et automatisé
- [ ] choisir l’emplacement de la sortie JSON pour le frontend
- [ ] éventuellement ajouter un webhook / CI pour déclencher l’export après modification

### Option de production

- backend sur un service Node compatible
- PostgreSQL hébergé
- export exécuté automatiquement après validation ou publication

---

## Plan d’implémentation graduel

### Étape 1 — base technique

- init backend
- health check
- connexion BD

### Étape 2 — schéma principal

- Event / Store / Place / Category
- migration initiale

### Étape 3 — CRUD

- endpoints CRUD pour les modules métier

### Étape 4 — validation

- Zod
- gestion des erreurs

### Étape 5 — export JSON

- data export
- génération des fichiers

### Étape 6 — sécurisation

- auth + rôles

### Étape 7 — tests

- API + services

### Étape 8 — déploiement

- production + automatisation

---

## Recommandations de conception

### 1) Garder le frontend statique

Le front ne doit pas dépendre d’une API live pour afficher le contenu public. Les JSON sont la couche publique. C’est une excellente solution pour le cache, SEO, et simplicité de déploiement.

### 2) Séparer les modules

- événements
- stores
- places
- export
- auth

Cela évite un monolithe difficile à maintenir.

### 3) Éviter de mélanger logique de persistance et logique d’export

Le service d’export doit être un module dédié, pas une logique dispersée.

### 4) Travailler en ordre

Ne pas commencer par le front. Commencer par la BD et les endpoints de base, puis exporter, puis sécuriser.

---

## Checklist de progression

### À faire dès maintenant

- [x] Créer le backend project scaffold
- [x] Installer les dépendances principales
- [x] Vérifier le health check
- [ ] Configurer Prisma + PostgreSQL
- [x] Créer le schéma initial

### En cours

- [ ] Démarrer la base PostgreSQL locale ou distante
- [ ] Exécuter la migration initiale Prisma
- [ ] Vérifier la connexion app -> BD

### Terminé

- [x] Plan initialisé
- [x] Structure backend initiale créée
- [x] Health check de base implémenté
- [x] Compatibilité Node.js corrigée (Node 24)
- [x] Backend TypeScript compilé avec succès
- [x] Schéma Prisma initial validé et client généré

---

## Prochaine action recommandée

Commencer par :

1. créer le dossier backend
2. initier le package.json
3. installer les dépendances
4. créer le serveur local avec `/health`
5. configurer Prisma + PostgreSQL

C’est la base solide sur laquelle toutes les autres étapes reposent.
