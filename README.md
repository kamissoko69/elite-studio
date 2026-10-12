# Élite Studio — site vitrine

Site responsive en HTML, CSS et JavaScript, conçu pour être publié sur un hébergement statique comme Cloudflare Pages.

## Fichiers
- `index.html` : pages/sections du site
- `styles.css` : design responsive desktop, tablette et téléphone
- `script.js` : menu mobile, filtres et lightbox de galerie, formulaire WhatsApp
- `assets/elite-studio-logo.jpeg` : logo fourni
- `assets/catalogue-affiche.jpeg` : affiche fournie pour la section catalogue

## Tester sur son ordinateur
Ouvrir `index.html` dans un navigateur. Pour un aperçu plus fiable, ouvrir le dossier dans VS Code et utiliser Live Server.

## Publier sur Cloudflare Pages
1. Créer un dépôt GitHub et y envoyer les fichiers du dossier.
2. Dans Cloudflare Dashboard, ouvrir **Workers & Pages** puis créer une application Pages connectée au dépôt Git.
3. Pour un site HTML statique, laisser la commande de build vide et définir le répertoire de sortie à `/` (racine du dépôt).
4. Déployer. Tester ensuite sur téléphone.

## Points à personnaliser avant la mise en production
- Remplacer les images de démonstration de la galerie par les vraies photos autorisées du studio.
- Confirmer les prix, les horaires et l'adresse exacte avec le propriétaire.
- Le formulaire ouvre WhatsApp et prépare une demande : il ne bloque pas automatiquement les créneaux et ne confirme pas un rendez-vous.
- Le numéro WhatsApp utilisé est le 70 54 01 90 avec l'indicatif Mali +223.
