# Application de Réservation de Salles de Classe

Application mobile développée avec Expo et TypeScript pour la gestion des réservations de salles de classe.

## Dépendances à installer

```bash
# Navigation
npm install @react-navigation/native
npm install @react-navigation/native-stack
npm install @react-navigation/bottom-tabs
npm install react-native-screens react-native-safe-area-context

# UI Components
npm install @rneui/themed @rneui/base
npm install react-native-vector-icons

# Gestion d'état et API
npm install @tanstack/react-query
npm install axios

# Stockage local
npm install @react-native-async-storage/async-storage

# Formulaires
npm install react-hook-form
npm install yup @hookform/resolvers
```

## Tâches à réaliser

### Niveau 1 - Configuration de base et Authentification

- [ ] Configuration du projet et installation des dépendances
- [ ] Mise en place de la navigation (Stack et Tab)
- [ ] Création des écrans de base (Login, Register, Home)
- [ ] Implémentation de l'authentification (login/register)
- [ ] Gestion du stockage du token avec AsyncStorage
- [ ] Configuration d'Axios pour les appels API

### Niveau 2 - Liste des Salles et Détails

- [ ] Création du composant Card pour les salles
- [ ] Implémentation de la liste des salles avec pagination
- [ ] Ajout des filtres de recherche
- [ ] Création de l'écran de détails d'une salle
- [ ] Affichage des disponibilités

### Niveau 3 - Système de Réservation

- [ ] Création du formulaire de réservation
- [ ] Validation des dates et heures
- [ ] Gestion des conflits de réservation
- [ ] Confirmation de réservation
- [ ] Notification de succès/erreur

### Niveau 4 - Gestion du Profil

- [ ] Création de l'écran profil utilisateur
- [ ] Affichage des informations personnelles
- [ ] Modification des informations du profil
- [ ] Liste des réservations en cours
- [ ] Historique des réservations

### Niveau 5 - Fonctionnalités Avancées

- [ ] Système de favoris pour les salles
- [ ] Notifications push pour les réservations
- [ ] Système de notation et commentaires
- [ ] Partage de réservation
- [ ] Mode hors ligne avec synchronisation

## Endpoints d'API

### Authentification

- POST /auth/signup
- POST /auth/signin

### Utilisateurs

- GET /users/me
- GET /users/:id
- POST /users

### Salles de classe

- GET /classrooms
- GET /classrooms/search
- GET /classrooms/:id
- POST /classrooms (middleware: admin)
- PUT /classrooms/:id
- DELETE /classrooms/:id (middleware: admin)

### Réservations

- POST /reservations
- GET /reservations/me
- GET /reservations/classroom/:classroomId
- GET /reservations/:id
- DELETE /reservations/:id

### Profil

- GET /profile
- PUT /profile

# Installation

```sh
cd api
npm install
docker compose up -d
npx prisma db push
npx prisma generate
# Generate fake data
npm run seed
# Run Prisma Studio
npx prisma studio
# Run the api
cd api
npm run dev
```

```sh
cd app
npm install
npx expo start --ios
```
