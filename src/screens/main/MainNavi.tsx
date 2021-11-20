import React from 'react';
import { Text } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import { SafeAreaView } from 'react-native-safe-area-context';

import ListView from '~/screens/list/ListView';
import ImageView from '~/screens/image/ImageView';
import Home from '~/screens/home/Home';
import TopBar from '~/components/topBar/TopBar';
import { DogContextProvider } from '~/context/dog/DogContext';

const Tab = createBottomTabNavigator();

const MainNavi = () => {
  const { t } = useTranslation();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <DogContextProvider>
        <TopBar />
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={{
              headerShown: false,
            }}>
            <Tab.Screen name={'HOME'} component={Home} options={{ tabBarLabel: 'Home' }} />
            <Tab.Screen name={'ListView'} component={ListView} options={{ tabBarLabel: t(`common:dog_list`) }} />
            <Tab.Screen name={'ImageView'} component={ImageView} options={{ tabBarLabel: t(`common:dog_image`) }} />
          </Tab.Navigator>
        </NavigationContainer>
      </DogContextProvider>
    </SafeAreaView>
  );
};

export default MainNavi;
