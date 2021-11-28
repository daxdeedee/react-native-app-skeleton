import React from 'react';
import { View, Text } from 'react-native';

const BannerItem = () => {
  return (
    <View
      style={{
        height: 80,
        width: 80,
        marginHorizontal: 20,
        marginTop: 10,
        backgroundColor: '#a2a2a2',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 40,
      }}>
      <Text>Item</Text>
    </View>
  );
};

export default BannerItem;
