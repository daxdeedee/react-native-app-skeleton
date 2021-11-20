import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, StyleProp, TextStyle, ViewStyle } from 'react-native';

interface Props {
  title?: string;
  onPress?: () => void;
  disabled?: boolean;
  activeOpacity?: number;
  buttonStyle?: ViewStyle;
  textStyle?: StyleProp<TextStyle>;
}

const Button = ({ title, onPress, activeOpacity = 0.5, disabled = false, buttonStyle, textStyle }: Props) => {
  return (
    <View style={[styles.container, buttonStyle]}>
      <TouchableOpacity style={[styles.button]} onPress={onPress} disabled={disabled} activeOpacity={activeOpacity}>
        <Text style={[styles.label, textStyle]}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 5,
    width: '100%',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    width: '100%',
    padding: 5,
    fontSize: 18,
    textAlign: 'center',
  },
});

export default Button;
