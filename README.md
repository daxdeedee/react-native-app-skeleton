## React Native Skeleton

> react native app sample Skeleton project

- [React Native Skeleton](#react-native-skeleton)
  - [Installation](#installation)
  - [Dependencies](#dependencies)
  - [Context API](#context-api)

---

### Installation

- [Environment Setup](https://reactnative.dev/docs/environment-setup)
- Get the project git clone https://github.com/daxdeedee/react-native-app-skeleton.git MyApp
- `npm install` Install npm dependencies npm install
- Install pods `cd ios && pod install` you need cocoapods for this to work
- Make new project
  ```javascript
  react-native init React_Native_Skeleton
  // react-native init 'project name'
  ```

---

### Dependencies

- [typescript](#typescript)
- [react navigation](#react-navigation)
- [axios](#axios)
- [i18next](#i18next)

#### typescript

- **[typescript](https://reactnative.dev/docs/typescript)**
- Add TypeScript and the types for React Native and Jest to your project.
- install

  - yarn add -D typescript @types/jest @types/react @types/react-native @types/react-test-renderer

- Add a TypeScript config file. Create a tsconfig.json in the root of your project
  ```javascript
  {
    "compilerOptions": {
    "allowJs": true,
    "allowSyntheticDefaultImports": true,
    "esModuleInterop": true,
    "isolatedModules": true,
    "jsx": "react",
    "lib": ["es6", "es2017"],
    "moduleResolution": "node",
    "noEmit": true,
    "strict": true,
    "target": "esnext",
    "skipLibCheck": true
    },
    "exclude": ["node_modules", "babel.config.js", "metro.config.js", "jest.config.js"]
    }
  ```

#### react navigation

- **[react navigation](https://reactnavigation.org/)**
- install `yarn add @react-navigation/native`
- Installing dependencies into a bare React Native project
  `yarn add react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view`
- Install pods `cd ios && pod install`

- **[stack-navigator](https://reactnavigation.org/docs/stack-navigator)**
- Provides a way for your app to transition between screens where each new screen is placed on top of a stack.
- install `yarn add @react-navigation/stack`

- **[material-top-tab-navigator](https://reactnavigation.org/docs/material-top-tab-navigator/)**
- A material-design themed tab bar on the top of the screen that lets you switch between different routes by tapping the tabs or swiping horizontally.
- install `yarn add @react-navigation/material-top-tabs react-native-tab-view`

#### axios

- **[axios](https://github.com/axios/axios)**
- Promise based HTTP client for the browser and node.js
- install `yarn add axios`

- **Dog Api**
  - **[Dog API](https://dog.ceo/dog-api/documentation/)**
  - Original dataset taken from the the Stanford Dogs Dataset.
  - used to test axios

#### i18next

- **[i18next](https://www.i18next.com/)**
- install `yarn add i18next`

- **[react-i18next](https://react.i18next.com/)**
- react-i18next is a powerful internationalization framework for React / React Native which is based on i18next.
- install `yarn add react-i18next`
- **Need installation for typescript** `yarn add i18next @types/i18next react-i18next @types/react-i18next`

---

### Redux, Redux-thunk

- npm install --save react-redux
- State management lib.
- It looks like FLUX pattern
- redux-thunk used for asynchronous processing

---

#### Context API

- **[Context](https://ko.reactjs.org/docs/context.html)**
- Global Prop Management.
- Context API solves one major problem–**prop drilling**.

---

### immer

- Used to maintain immutability

---

#### Error fix

- If the following error message appears, change the'gradle' version 6.3.(Target : react-native v0.63)
  - error Failed to install the app. Make sure you have the Android development environment set up: https://reactnative.dev/docs/environment-setup. Run CLI with --verbose flag for more details.
    Error: Command failed: ./gradlew app:installDebug -PreactNativeDevServerPort=8081
    java.lang.NoClassDefFoundError: Could not initialize class org.codehaus.groovy.vmplugin.v7.Java7
