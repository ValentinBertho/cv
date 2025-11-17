# \# 🚀 CV Interactif - Valentin Bertho

# 

# Portfolio web moderne et interactif avec animations avancées, graphiques et modals détaillées.

# 

# \## 📁 Structure des fichiers

# 

# ```

# votre-projet/

# ├── index.html          # Structure HTML principale

# ├── styles.css          # Tous les styles CSS

# ├── script.js           # Logique JavaScript

# ├── modal-data.js       # Données des projets et expériences

# └── README.md          # Ce fichier

# ```

# 

# \## ✨ Fonctionnalités

# 

# \### 🎨 Design \& Animations

# \- ✅ Fond étoilé animé

# \- ✅ Effet de traînée du curseur

# \- ✅ Animations de parallaxe

# \- ✅ Effet de typing sur le nom

# \- ✅ Transitions fluides partout

# 

# \### 📊 Sections principales

# 1\. \*\*Hero\*\* - Introduction avec stats animées

# 2\. \*\*Radar Chart\*\* - Graphique des compétences interactif

# 3\. \*\*Projets personnels\*\* - 4 projets avec modals détaillées

# 4\. \*\*Expériences pro\*\* - Timeline interactive

# 5\. \*\*Compétences techniques\*\* - Cards animées

# 6\. \*\*Soft Skills\*\* - 6 compétences méthodologiques

# 7\. \*\*Formation \& Certifications\*\* - Parcours académique

# 8\. \*\*Veille technologique\*\* - Technologies en apprentissage

# 9\. \*\*Contact\*\* - Liens de contact

# 

# \### 🎯 Fonctionnalités avancées

# \- Banner de disponibilité sticky

# \- Compteurs animés (10+ ans, 50+ projets, etc.)

# \- Modals détaillées pour chaque projet/expérience

# \- Navigation smooth scroll

# \- Intersection Observer pour animations au scroll

# \- Design 100% responsive

# 

# \## 🛠️ Installation

# 

# 1\. \*\*Créez un dossier\*\* pour votre projet

# 2\. \*\*Copiez les 4 fichiers\*\* fournis :

# &nbsp;  - `index.html`

# &nbsp;  - `styles.css`

# &nbsp;  - `script.js`

# &nbsp;  - `modal-data.js`

# 

# 3\. \*\*Ouvrez index.html\*\* dans votre navigateur

# 

# \## 🚀 Déploiement sur GitHub Pages

# 

# \### Méthode 1 : Via l'interface GitHub

# 

# 1\. Créez un nouveau repository sur GitHub

# 2\. Uploadez les 4 fichiers

# 3\. Allez dans \*\*Settings\*\* > \*\*Pages\*\*

# 4\. Sélectionnez la branche `main` et le dossier `/root`

# 5\. Cliquez sur \*\*Save\*\*

# 6\. Votre site sera disponible à : `https://votre-username.github.io/nom-du-repo/`

# 

# \### Méthode 2 : Via Git (ligne de commande)

# 

# ```bash

# \# Initialisez Git dans votre dossier

# git init

# 

# \# Ajoutez tous les fichiers

# git add .

# 

# \# Faites votre premier commit

# git commit -m "Initial commit - CV interactif"

# 

# \# Connectez votre repo GitHub (remplacez par votre URL)

# git remote add origin https://github.com/votre-username/votre-repo.git

# 

# \# Poussez vers GitHub

# git branch -M main

# git push -u origin main

# 

# \# Activez GitHub Pages dans les paramètres du repo

# ```

# 

# \## 📝 Personnalisation

# 

# \### Modifier vos informations

# 

# \*\*Dans `modal-data.js`\*\* :

# \- Modifiez le contenu de chaque projet/expérience

# \- Ajoutez des liens vers vos démos

# \- Changez les technologies utilisées

# 

# \*\*Dans `index.html`\*\* :

# \- Changez vos coordonnées (email, téléphone, LinkedIn)

# \- Modifiez la disponibilité

# \- Ajoutez/supprimez des sections

# 

# \*\*Dans `script.js`\*\* :

# \- Ajustez les valeurs du radar chart (ligne 50)

# \- Modifiez les animations

# 

# \### Ajouter le téléchargement du CV

# 

# 1\. Créez un fichier PDF de votre CV

# 2\. Placez-le dans le même dossier que vos fichiers HTML

# 3\. Dans `script.js`, remplacez la fonction `downloadCV` :

# 

# ```javascript

# function downloadCV(event) {

# &nbsp;   event.preventDefault();

# &nbsp;   window.location.href = "votre-cv.pdf";

# }

# ```

# 

# \### Ajouter des images

# 

# Remplacez les placeholders d'images dans `modal-data.js` :

# 

# ```javascript

# // Avant

# <div class="image-placeholder">

# &nbsp;   <i class="fas fa-image"></i>

# &nbsp;   Capture d'écran

# </div>

# 

# // Après

# <img src="images/loghelper-screenshot.png" alt="LogHelper" style="width: 100%; border-radius: 15px; margin: 20px 0;">

# ```

# 

# \## 🎨 Personnalisation des couleurs

# 

# Dans `styles.css`, modifiez les variables CSS :

# 

# ```css

# :root {

# &nbsp;   --primary: #00d4ff;    /\* Bleu cyan \*/

# &nbsp;   --secondary: #ff6b9d;  /\* Rose \*/

# &nbsp;   --accent: #c471ed;     /\* Violet \*/

# &nbsp;   --dark: #0a0e27;       /\* Bleu foncé \*/

# &nbsp;   --darker: #050816;     /\* Bleu très foncé \*/

# &nbsp;   --light: #f8f9fa;      /\* Blanc cassé \*/

# }

# ```

# 

# \## 📱 Responsive

# 

# Le site est entièrement responsive et s'adapte automatiquement :

# \- 📱 Mobile (< 768px)

# \- 💻 Tablette (768px - 1024px)

# \- 🖥️ Desktop (> 1024px)

# 

# \## 🔧 Dépendances

# 

# Le projet utilise des CDN (pas besoin d'installation) :

# 

# \- \*\*Font Awesome 6.4.0\*\* - Icônes

# \- \*\*Chart.js 4.4.0\*\* - Graphique radar

# 

# \## 🐛 Résolution de problèmes

# 

# \### Le graphique radar ne s'affiche pas

# \- Vérifiez que Chart.js est bien chargé (ouvrez la console du navigateur)

# \- Vérifiez que l'ID `skillsRadar` existe dans le HTML

# 

# \### Les animations ne fonctionnent pas

# \- Assurez-vous que `script.js` est bien chargé après `modal-data.js`

# \- Ouvrez la console pour voir les erreurs

# 

# \### Les modals ne s'ouvrent pas

# \- Vérifiez que `modal-data.js` est chargé avant `script.js`

# \- Vérifiez les IDs dans `openModal()` correspondent à ceux dans `modalData`

# 

# \## 📞 Support

# 

# Pour toute question, n'hésitez pas à :

# \- Consulter la documentation

# \- Vérifier la console du navigateur

# \- Tester dans différents navigateurs

# 

# \## 🎯 Prochaines étapes suggérées

# 

# 1\. ✅ Ajouter vos vraies captures d'écran

# 2\. ✅ Créer un PDF de votre CV pour le téléchargement

# 3\. ✅ Personnaliser les couleurs selon vos préférences

# 4\. ✅ Ajouter vos liens de projets en ligne

# 5\. ✅ Connecter un domaine personnalisé (optionnel)

# 6\. ✅ Ajouter Google Analytics (optionnel)

# 

# \## 📄 Licence

# 

# Libre d'utilisation pour votre portfolio personnel.

# 

# ---

# 

# \*\*Créé avec ❤️ pour Valentin Bertho\*\*

