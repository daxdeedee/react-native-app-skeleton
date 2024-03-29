import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import SignIn from '~/screens/signin/SignIn';
import SignUp from '~/screens/signin/SignUp';

const Stack = createStackNavigator();

const SignInNavi = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={'SignIn'}
        screenOptions={{
          headerShown: false,
          animationEnabled: true,
        }}>
        <Stack.Screen name={'SigIn'} component={SignIn} />
        <Stack.Screen name={'SignUp'} component={SignUp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default SignInNavi;
