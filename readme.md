# savoeurs.com

## Technologies

- [webpack](https://webpack.js.org/)
- [Babel](https://babeljs.io/)
- [Postcss](https://postcss.org/)
- [Postcss-preset-env](https://preset-env.cssdb.org/)
- [Eslint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Standardjs](https://standardjs.com/)
- [Stylelint](https://stylelint.io/)

---

## Pré-requis

Pour travailler sur ce projet, il faut :

- un éditeur de texte
- Git (logiciel de contrôle de version)
- Node.js (moteur d’execution javascript) et npm (gestionnaire de paquets javascript)

### [VS Code](https://code.visualstudio.com/)

Se rendre sur le site de [VS Code](https://code.visualstudio.com/) et télécharger l'application.

### [Homebrew](https://brew.sh/)

Homebrew est un gestionnaire de paquets pour Mac. Il va permettre d'installer Git et Node.js.

Pour installer Homebrew, dans le terminal, saisir :

```bash
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)”
```

### [Git](https://git-scm.com/)

Git s'installe avec homebrew avec la commande `brew install git`.

### [Node.js](https://nodejs.org) et [npm](https://www.npmjs.com/)

Node.js et npm s’installent avec homebrew: `brew install node`.

---

## Usage

### Cloner le repo

Dans le terminal :

- se positionnner à l'endroit ou l'on veut stocker le projet (p.e.: `/Documents`)
- saisir `git clone https://github.com/annegabrielledumont/annegabrielle.com.git`

### Ouvrir le projet dans VS Code

Dans le finder, ouvrir le dossier du projet dans VS Code en tirant le dossier `annegabrielle.com` sur l'icone de VS Code.

Dans VS Code, ouvrir un terminal (menu > terminal > lancer un terminal).

### 1. Mettre à jour et installer

> Pré-requis: si des fichiers ont été modifiés localement, ils doivent être enregistrés dans git (cf 4.)

```bash
# récupère la dernière version sur github
git pull --rebase origin master

# installe les dépendances et mises à jour
npm install
```

### 2. Développer

```bash
# lance le serveur de dév
npm run dev
```

`ctrl` + `c` pour arrêter

### 3. Générer le site public en local

```bash
# construit la version de prod (fichiers index.hmtl, mon-parcours.html et dossier /dist)
npm run build
```

### 4. Enregistrer les modifications dans git

```bash
# ajoute les fichiers modifiés dans git (staging)
# dans vscode, section Source Control: clique sur `+` à côté des noms de fichiers
# ou avec la commande
git add .

# ajoute les fichiers en staging dans un commit git
# dans vscode, section Source Control: écrit `mon message de commit` dans le champs Message et valide
# ou avec la commande
git commit -m "mon message de commit"

# vérifie que tous les fichiers ont étés ajoutés à git
# dans vscode, section Source Control: il ne doit plus y avoir de fichiers visibles dans la liste
# ou avec la commande
git status
```

### 5. Envoyer les modifications sur github

> Pré-requis: la version locale doit être à jour (cf 1.)

```bash
# pousse sur GitHub
git push origin master
```

---

### Modifier le contenu

Les fichiers modfiables sont:

- la homepage: `/src/index.html`
- mon parcours: `/src/mon-parcours.html`
