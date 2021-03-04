## 프로젝트 생성

#### - react-native init React_Native_Skeleton

## typescript 설정

- Add TypeScript and the types for React Native and Jest to your project.
- install
  - yarn add -D typescript @types/jest @types/react @types/react-native @types/react-test-renderer

* https://reactnative.dev/docs/typescript (참고)

#### Add a TypeScript config file. Create a tsconfig.json in the root of your project

- {
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

#### react navigation

- https://reactnavigation.org/docs/getting-started/ (참고)

1. install - yarn add @react-navigation/native
2. Installing dependencies into a bare React Native project - yarn add react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view
3. move /iOS, input 'pod install'

##### stack-navigator : https://reactnavigation.org/docs/stack-navigator

- install - yarn add @react-navigation/stack

##### material-top-tab-navigator: https://reactnavigation.org/docs/material-top-tab-navigator/

- install - yarn add @react-navigation/material-top-tabs react-native-tab-view

#### Context

#### axios

- for server api
- install - yarn add axios
- ApiAxios.ts : axios api
- ex) ApiDog : sample dog api (https://dog.ceo/dog-api/documentation/)

#### 다국어

- i18next
  - install - yarn add i18next
- react-i18next
  - install - yarn add react-i18next
- for typescript : yarn add i18next @types/i18next react-i18next @types/react-i18next

#### Error fix

- If the following error message appears, change the'gradle' version 6.3.(Target : react-native v0.63)
  - error Failed to install the app. Make sure you have the Android development environment set up: https://reactnative.dev/docs/environment-setup. Run CLI with --verbose flag for more details.
    Error: Command failed: ./gradlew app:installDebug -PreactNativeDevServerPort=8081
    java.lang.NoClassDefFoundError: Could not initialize class org.codehaus.groovy.vmplugin.v7.Java7
