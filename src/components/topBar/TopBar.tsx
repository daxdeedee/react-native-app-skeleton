import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import assets from '~/assets/assets';
import { useStateContext } from '~/context/user/UserContext';
import Colors from '~/values/color/Colors';

const TopBar = () => {
  const state = useStateContext();
  return (
    <View style={styles.continer}>
      <Image style={styles.icon} source={assets.icon} />
      <View style={styles.myIcon}>
        <Text style={{ color: '#ffffff', fontSize: 30 }}>{state?.accountInfo?.email?.charAt(0)}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  continer: {
    backgroundColor: '#000000',
    height: 70,
    alignItems: 'center',
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  icon: {
    width: 70,
    height: 60,
  },
  myIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: Colors.gray,
    borderColor: Colors.white,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default TopBar;
