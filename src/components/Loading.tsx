import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';

import Colors from '../values/color/Colors';

const Loading = () => {
  return (
    <>
      <View style={styles.container} />
      <View style={styles.indicator}>
        <ActivityIndicator size="large" color={Colors.blue} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: Colors.black,
    opacity: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  indicator: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Loading;
