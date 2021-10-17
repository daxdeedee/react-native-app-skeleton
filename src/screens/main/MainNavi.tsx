import React from 'react';
import { Text } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useStateContext } from '../../context/user/UserContext';

import ListView from '../list/ListView';
import ImageView from '../image/ImageView';
import { DogContextProvider } from '../../context/dog/DogContext';

const Tab = createMaterialTopTabNavigator();

const MainNavi = () => {
  const state = useStateContext();
  const { t } = useTranslation();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <DogContextProvider>
        <NavigationContainer>
          <Text style={{ marginLeft: 10 }}>{state?.accountInfo?.email} 님</Text>
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
