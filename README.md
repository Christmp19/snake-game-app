# Snake Game en React Native

Un simple jeu de Snake développé en React Native avec Expo et Tailwind CSS.

## Capture d'écran

![Capture d'écran du jeu Snake](/screenshot.jpg)

## Prérequis

Avant de commencer, assurez-vous d'avoir installé les éléments suivants :

- Node.js

## Installation

1. Clonez le dépôt :
    ```sh
    git clone https://github.com/Christmp19/snake-game-app.git
    ```
2. Accédez au répertoire du projet :
    ```sh
    cd snake-game-app
    ```
3. Installez les dépendances :
    ```sh
    npm install
    ```
    or

    ```sh
    yarn install
    ```

## Lancement du Jeu

1. Démarrez le projet Expo :
    ```sh
    expo start
    ```
    or

    ```sh
    yarn start
    ```
2. Scannez le code QR avec l'application Expo Go sur votre appareil mobile, ou lancez l'émulateur de votre choix.

## Règles du Jeu

- Le jeu commence en appuyant sur le bouton "▶️".
- Utilisez les gestes de glissement pour diriger le serpent (haut, bas, gauche, droite).
- Mangez la nourriture pour grandir et augmenter votre score de 10 points.
- Si le serpent touche les bords de l'écran ou se mord lui-même, la partie est terminée.

## Commandes Disponibles

- **Play/Pause** : Appuyez sur le bouton "▶️/⏸" pour démarrer ou mettre en pause le jeu.
- **Reset** : Appuyez sur le bouton "🔄️" pour réinitialiser le jeu à tout moment.

## Structure du Projet

- `Snake.js` : Composant qui représente le serpent.
- `Food.js` : Composant qui représente la nourriture.
- `Game.js` : Composant principal qui contient la logique du jeu et assemble le serpent et la nourriture.

## Dépendances

- React Native
- Expo
- React Native Gesture Handler
- Tailwind CSS pour les styles

## Contribution

Les contributions sont les bienvenues. Vous pouvez proposer des modifications en créant une nouvelle branche et en soumettant une pull request.

1. Créez une branche feature :
    ```sh
    git checkout -b feature/nouvelle-feature
    ```
2. Effectuez vos modifications et committez :
    ```sh
    git commit -m "Ajout d'une nouvelle fonctionnalité"
    ```
3. Poussez votre branche :
    ```sh
    git push origin feature/nouvelle-feature
    ```
4. Ouvrez une pull request.


---

Bon jeu et amusez-vous bien !
