import React from 'react';
import { View, Text, TextInput, StyleSheet, StyleProp, ViewStyle, TextInputProps, TextStyle } from 'react-native';

type Props = {
  title?: string;
  inputStyle?: StyleProp<TextStyle>;
  bgStyle?: StyleProp<ViewStyle>;
  isClear?: boolean;
} & TextInputProps;

const EditText = ({ title, bgStyle, inputStyle, isClear = false, ...props }: Props) => {
  return (
    <View style={[styles.continer, bgStyle]}>
      {title && <Text style={styles.titleContiner}>{title}</Text>}
      <TextInput style={[styles.input, inputStyle]} {...props} />
    </View>
  );
};

const styles = StyleSheet.create({
  continer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 5,
  },
  titleContiner: { marginRight: 10 },
  input: {
    flex: 1,
  },
});

export default EditText;
