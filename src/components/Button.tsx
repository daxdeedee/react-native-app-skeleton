import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 5,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    width: '100%',
    padding: 5,
    fontSize: 18,
  },
});

interface Props {
  title?: string;
  bgColor?: string;
  textColor?: string;
  borderWidth?: number;
  width?: number;
  height?: number;
  fontSize?: number;
  borderRadius?: number;
  fontWeights?: any;
  disabled?: boolean;
  borderColor?: string;
  onPress?: () => void;
  activeOpacity?: number;
  textDecorationLine?: 'none' | 'underline' | 'line-through' | 'underline line-through';
  textAlign?: 'auto' | 'left' | 'right' | 'center' | 'justify';
}

const Button = ({
  title,
  textColor,
  bgColor,
  onPress,
  borderWidth = 0,
  width,
  height,
  fontSize = 18,
  borderRadius,
  fontWeights = 'normal',
  disabled = false,
  borderColor = '#000000',
  activeOpacity = 0.5,
  textDecorationLine = 'none',
  textAlign = 'center',
}: Props) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[
          styles.button,
          {
            backgroundColor: disabled ? '#f1f1f1' : bgColor,
            borderWidth: borderWidth,
            width: width,
            height: height,
            borderRadius: borderRadius,
            borderColor,
          },
        ]}
        onPress={onPress}
        disabled={disabled}
        activeOpacity={activeOpacity}>
        <Text
          style={[
            styles.label,
            { fontWeight: fontWeights, color: textColor, fontSize: fontSize, textDecorationLine, textAlign },
          ]}>
          {title}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Button;
