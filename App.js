import React from 'react';
import { StatusBar } from 'react-native';
import Root from '~/screens/Root';

const App = () => {
  return (
    <>
      <StatusBar barStyle="default" />
      <Root />
    </>
  );
};

export default App;
