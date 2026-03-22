# ART PLASTER — Site Web Officiel

Site web professionnel pour **ART PLASTER SARL**, leader marocain en travaux de plâtre décoratif et faux plafonds.

## Stack Technique

- [Next.js 14](https://nextjs.org/) (App Router)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)

## Installation

### 1. Clone le projet
```bash
git clone https://github.com/[votre-repo]/art-plaster.git
cd art-plaster
```

### 2. Installe les dépendances
```bash
npm install
```

### 3. Configure les variables d'environnement
```bash
cp .env.example .env.local
```
Remplis les valeurs dans `.env.local` (voir `.env.example` pour la liste complète).

### 4. Lance le serveur de développement
```bash
npm run dev
```

Le site sera disponible sur [http://localhost:3000](http://localhost:3000).

## Variables d'environnement

| Variable | Description |
|---|---|
| `NEXT_PUBLIC_COMPANY_PHONE` | Téléphone principal |
| `NEXT_PUBLIC_COMPANY_GSM` | GSM / Mobile |
| `NEXT_PUBLIC_COMPANY_EMAIL` | Email de contact |
| `NEXT_PUBLIC_COMPANY_ADDRESS` | Adresse postale |
| `NEXT_PUBLIC_COMPANY_RC` | Registre du Commerce |
| `NEXT_PUBLIC_COMPANY_CNSS` | Numéro CNSS |
| `NEXT_PUBLIC_COMPANY_ICE` | Identifiant Commun de l'Entreprise |

## Déploiement

Le site est déployé automatiquement sur **Vercel**.

> **Note sécurité** : Le fichier `.env.local` contient des données sensibles. Il est protégé par `.gitignore` et **ne doit JAMAIS être commité**.

## Structure du Projet

```
art-plaster/
├── app/                  # Routes Next.js (App Router)
│   ├── layout.tsx        # Layout global
│   ├── page.tsx          # Page d'accueil
│   ├── portfolio/        # Pages portfolio
│   ├── services/         # Page services
│   ├── about/            # Page à propos
│   ├── careers/          # Page carrières
│   └── contact/          # Page contact
├── components/           # Composants réutilisables
│   ├── layout/           # Navbar, Footer, etc.
│   ├── sections/         # Sections de page
│   └── ui/               # Composants UI atomiques
├── lib/                  # Données et utilitaires
│   ├── data.ts           # Données statiques des projets
│   └── utils.ts          # Fonctions utilitaires
└── public/               # Assets statiques
    └── images/           # Images des projets
```
