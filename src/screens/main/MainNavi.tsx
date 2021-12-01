import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { createBottomTabNavigator, BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import { SafeAreaView } from 'react-native-safe-area-context';

import ListView from '~/screens/list/ListView';
import ImageView from '~/screens/image/ImageView';
import Home from '~/screens/home/Home';
import TopBar from '~/components/topBar/TopBar';
import { DogContextProvider } from '~/context/dog/DogContext';
import MyPage from '~/screens/myPage/MyPage';
import assets from '~/assets/assets';
import Colors from '~/values/color/Colors';

export type BottomTabNavigationParams = {
  Home: undefined;
  ListView: undefined;
  ImageView: undefined;
  MyPage: undefined;
};

export type NavigationProp = BottomTabNavigationProp<BottomTabNavigationParams>;

const Tab = createBottomTabNavigator();

const MainNavi = () => {
  const { t } = useTranslation();
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TopBar />
      <DogContextProvider>
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={{
              headerShown: false,
            }}>
            <Tab.Screen
              name={'Home'}
              component={Home}
              options={{
                tabBarLabel: 'Home',
                tabBarIcon: ({ focused }) => (
                  <Image source={assets.icon_home} style={focused ? styles.iconOn : styles.iconOff} />
                ),
              }}
            />
            <Tab.Screen
              name={'ListView'}
              component={ListView}
              options={{
                tabBarLabel: t(`common:dog_list`),
                tabBarIcon: ({ focused }) => (
                  <Image source={assets.icon_list} style={focused ? styles.iconOn : styles.iconOff} />
                ),
              }}
            />
            <Tab.Screen
              name={'ImageView'}
              component={ImageView}
              options={{
                tabBarLabel: t(`common:dog_image`),
                tabBarIcon: ({ focused }) => (
                  <Image source={assets.icon_dog} style={focused ? styles.iconOn : styles.iconOff} />
                ),
              }}
            />
            <Tab.Screen
              name={'MyPage'}
              component={MyPage}
              options={{
                tabBarLabel: 'MyPage',
                tabBarIcon: ({ focused }) => (
                  <Image source={assets.icon_info} style={focused ? styles.iconOn : styles.iconOff} />
                ),
              }}
            />
          </Tab.Navigator>
        </NavigationContainer>
      </DogContextProvider>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  iconOn: {
    tintColor: Colors.black,
    width: 25,
    height: 25,
  },
  iconOff: {
    tintColor: Colors.gray,
    width: 25,
    height: 25,
  },
});

export default MainNavi;
