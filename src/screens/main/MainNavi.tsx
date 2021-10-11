import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import ListView from '../list/ListView';
import ImageView from '../image/ImageView';
import { DogContextProvider } from '../../context/dog/DogContext';

const Tab = createMaterialTopTabNavigator();

const MainNavi = () => {
  const { t } = useTranslation();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <DogContextProvider>
        <NavigationContainer>
          <Tab.Navigator>
            <Tab.Screen name={'ListView'} component={ListView} options={{ tabBarLabel: t(`common:dog_list`) }} />
            <Tab.Screen name={'ImageView'} component={ImageView} options={{ tabBarLabel: t(`common:dog_image`) }} />
          </Tab.Navigator>
        </NavigationContainer>
      </DogContextProvider>
    </SafeAreaView>
  );
};

export default MainNavi;
