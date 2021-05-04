import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';

import { AxiosContextProvider } from '../../context/axios/AxiosContext';

import ListView from '../list/ListView';
import ImageView from '../image/ImageView';
import AbsoluteView from '../absolute/AbsoluteView';
import { DogContextProvider } from '../../context/dog/DogContext';

const Tab = createMaterialTopTabNavigator();

const MainNavi = () => {
  const { t } = useTranslation();

  return (
    <DogContextProvider>
      <AxiosContextProvider>
        <NavigationContainer>
          <Tab.Navigator>
            <Tab.Screen name={'AbsoluteView'} component={AbsoluteView} options={{ tabBarLabel: 'AbsoluteView' }} />
            <Tab.Screen name={'ListView'} component={ListView} options={{ tabBarLabel: t(`common:dog_list`) }} />
            <Tab.Screen name={'ImageView'} component={ImageView} options={{ tabBarLabel: t(`common:dog_image`) }} />
          </Tab.Navigator>
        </NavigationContainer>
      </AxiosContextProvider>
    </DogContextProvider>
  );
};

export default MainNavi;
