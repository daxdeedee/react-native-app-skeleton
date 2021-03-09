import React from 'react';
import { StatusBar } from 'react-native';
import 'react-native-gesture-handler';

import Root from './src/screens/Root';

const App = () => {
  return (
    <>
      <StatusBar barStyle="default" />
      <Root />
    </>
  );
};

export default App;
