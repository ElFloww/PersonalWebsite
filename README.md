# florent-dubut.fr

Site web personnel de Florent Dubut - Développeur Full Stack

## 🚀 Technologies

- **Vue.js 3** - Framework JavaScript progressif
- **Vuetify 3** - Framework de composants Material Design
- **TypeScript** - Superset typé de JavaScript
- **Vite** - Build tool moderne et rapide
- **Vue Router** - Routage pour applications Vue.js
- **Vue I18n** - Internationalisation (FR/EN)

## ✨ Fonctionnalités

### Navigation

- Barre de navigation sticky avec liens vers toutes les sections
- Navigation mobile responsive avec drawer
- Changement de langue (Français/Anglais)
- Bouton de retour en haut de page

### Sections

1. **À propos** - Présentation personnelle avec photo et description
2. **Expérience professionnelle** - Timeline interactive des expériences
3. **Formation** - Parcours académique détaillé
4. **Compétences techniques** - Visualisation des compétences par catégories avec niveaux
5. **Projets** - Portfolio de projets réalisés
6. **Contact** - Formulaire de contact avec validation

### Design & UX

- Design Material Design avec Vuetify
- Animations fluides et transitions
- Responsive design (mobile, tablette, desktop)
- Thème cohérent avec couleur principale verte
- Effets hover sur les cartes et boutons
- Scroll fluide entre les sections

## 🛠️ Installation

```bash
# Installation des dépendances
npm install

# Lancement en développement
npm run dev

# Build pour production
npm run build

# Prévisualisation du build
npm run preview
```

## 📁 Structure du projet

```
src/
├── assets/
│   ├── images/          # Images et logos
│   ├── locales/         # Fichiers de traduction (fr.json, en.json)
│   └── styles/          # Styles CSS globaux
├── components/
│   ├── sections/        # Composants de sections
│   │   ├── SkillsSection.vue
│   │   ├── ProjectsSection.vue
│   │   └── ContactForm.vue
│   └── shared/          # Composants partagés
│       ├── AppBar.vue
│       ├── NavigationDrawer.vue
│       ├── Footer.vue
│       └── ScrollToTop.vue
├── core/
│   └── types/           # Types TypeScript
├── plugins/             # Plugins Vue (Vuetify, i18n)
├── router/              # Configuration du routeur
├── views/               # Vues principales
│   └── Main.vue
├── App.vue              # Composant racine
└── main.ts              # Point d'entrée

```

## 🎨 Personnalisation

### Modifier les compétences

Éditez le fichier `src/components/sections/SkillsSection.vue` pour mettre à jour vos compétences.

### Modifier les projets

Éditez le fichier `src/components/sections/ProjectsSection.vue` pour ajouter ou modifier vos projets.

### Modifier les traductions

Les fichiers de traduction se trouvent dans `src/assets/locales/`:

- `fr.json` - Traductions françaises
- `en.json` - Traductions anglaises

### Modifier les couleurs

Les couleurs sont définies dans Vuetify. La couleur principale est `green-lighten-1`.
Pour changer, modifiez les classes CSS dans les composants.

## 📱 Responsive Design

Le site est entièrement responsive avec des breakpoints Vuetify :

- **xs** : < 600px (mobile)
- **sm** : 600px - 960px (tablette portrait)
- **md** : 960px - 1280px (tablette paysage)
- **lg** : 1280px - 1920px (desktop)
- **xl** : > 1920px (grand écran)

## 🌐 Internationalisation

Le site supporte deux langues :

- 🇫🇷 Français (par défaut)
- 🇬🇧 Anglais

Le changement de langue se fait via les drapeaux dans la navigation.

## 📧 Configuration du formulaire de contact

Le formulaire de contact utilise actuellement `mailto:` pour ouvrir le client email.
Pour une intégration backend, vous pouvez modifier `src/components/sections/ContactForm.vue`
et ajouter votre propre service d'envoi d'emails (EmailJS, Formspree, backend API, etc.).

## 🚀 Déploiement

### Build de production

```bash
npm run build
```

Les fichiers de production seront générés dans le dossier `dist/`.

### Déploiement recommandé

- **Vercel** - Déploiement automatique depuis Git
- **Netlify** - Configuration simple avec build automatique
- **GitHub Pages** - Hébergement gratuit
- **Azure Static Web Apps** - Pour intégration Azure

## 📄 Licence

Tous droits réservés © 2024 Florent Dubut

## 👨‍💻 Auteur

**Florent Dubut**

- Email: florent.dubut@gmail.com
- LinkedIn: [Florent Dubut](https://www.linkedin.com/in/florent-dubut)
- GitHub: [@florentdubut](https://github.com/florentdubut)
