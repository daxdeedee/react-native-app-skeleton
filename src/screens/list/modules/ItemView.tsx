import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import Colors from '~/values/color/Colors';

interface IProps {
  text: string;
  onPressItem: (text: string) => void;
}

const ItemView = ({ text, onPressItem }: IProps) => {
  return (
    <View style={{ borderColor: Colors.black, borderBottomWidth: 1 }}>
      <TouchableOpacity style={{ padding: 10 }} onPress={() => onPressItem(text)} activeOpacity={0.7}>
        <Text style={{ borderBottomWidth: 1, marginBottom: 10 }}>{text}</Text>
        <View style={{ backgroundColor: '#aeaeae', width: '100%', height: 200 }}></View>
      </TouchableOpacity>
    </View>
  );
};

export default ItemView;
