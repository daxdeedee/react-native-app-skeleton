import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import assets from '~/assets/assets';
import Colors from '~/values/color/Colors';
import { useSelector, shallowEqual } from 'react-redux';

const TopBar = () => {
  const { accountInfo } = useSelector((state: any) => state.auth, shallowEqual);
  return (
    <View style={styles.continer}>
      <Image style={styles.icon} source={assets.icon_light} />
      <View style={styles.myIcon}>
        <Text style={{ color: Colors.white, fontSize: 30 }}>{accountInfo?.charAt(0)}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  continer: {
    backgroundColor: Colors.gray,
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
