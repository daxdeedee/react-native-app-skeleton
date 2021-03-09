import React from 'react';
import { View, Text } from 'react-native';

interface IProps {
  text: string;
}

const ItemView = ({ text }: IProps) => {
  return (
    <>
      <Text style={{ borderBottomWidth: 1, paddingVertical: 10 }}>{text}</Text>
    </>
  );
};

export default ItemView;
