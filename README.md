# Open Source Credit SDK Node.js

#### A SDK made in Node for the Open Source Credit project

### 🚀 Installing

To clone and run this application, you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. After that, install [yarn](https://classic.yarnpkg.com/lang/en/docs/install/#windows-stable). From your command line:

```bash
# Clone this repository
$ git clone https://github.com/Fitbank-Pagamentos-Eletronicos/osc-sdk-nodejs

# Go into the repository
$ cd osc-sdk-nodejs

# Install dependencies
$ yarn install
```

### 🔐 Credentials

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

### 🗂️ Folder Structure

```
📦osc-sdk-nodejs
┣ 📂.vscode
┃ ┗ 📜settings.json
┣ 📂node_modules
┣ 📂src
┃ ┣ 📂domains
┃ ┃ ┣ 📂enums
┃ ┃ ┣ 📜AllEnums
┃ ┣ 📜AllDomains
┃ ┣ 📂requests
┃ ┃ ┣ 📜AllRequests
┃ ┣ 📂tests
┃ ┃ ┣ 📂domains
┃ ┃ ┃ ┣ 📜AllDomainsTests
┃ ┃ ┣ 📂requests
┃ ┃ ┃ ┣ 📜AllRequestsTests
┃ ┃ ┗ 📜index.test.ts
┃ ┗ 📂utils
┃ ┃ ┗ 📜Validations.ts
┣ 📜.gitignore
┣ 📜.prettierrc
┣ 📜babel.config.js
┣ 📜index.ts
┣ 📜jest.config.ts
┣ 📜package.json
┣ 📜README.md
┣ 📜tsconfig.json
┗ 📜yarn.lock
```

### 💯 How to run the tests

Some of the tests are named `Name.test.ts` with the connotation `.test`, to test those files you will have to run with `yarn test NAME_OF_THE_FILE`. The others you can test with `ts-node NAME_OF_THE_FILE`.
