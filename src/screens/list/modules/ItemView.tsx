import React from 'react';
import { Text, View } from 'react-native';
import Colors from '../../../values/color/Colors';

interface IProps {
  text: string;
}

const ItemView = ({ text }: IProps) => {
  return (
    <View style={{ padding: 10, borderColor: Colors.black, borderBottomWidth: 1 }}>
      <Text style={{ borderBottomWidth: 1 }}>{text}</Text>
    </View>
  );
};

export default ItemView;
