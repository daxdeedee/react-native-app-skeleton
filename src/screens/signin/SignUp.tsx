import React from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';

import Button from '../../components/Button';

const SignUp = () => {
  const onSignUp = () => {};

  return (
    <View>
      <View style={styles.itemLayout}>
        <Text style={styles.text}>ID</Text>
        <TextInput style={styles.inputText} />
      </View>
      <View style={styles.itemLayout}>
        <Text style={styles.text}>PW</Text>
        <TextInput style={styles.inputText} autoCapitalize="none" secureTextEntry={true} />
      </View>
      <View style={styles.itemLayout}>
        <Text style={styles.text}>Check PW</Text>
        <TextInput style={styles.inputText} autoCapitalize="none" secureTextEntry={true} />
      </View>
      <View style={{ alignItems: 'center', marginTop: 20 }}>
        <Button title={'Sign Up'} buttonStyle={{ borderWidth: 1, borderRadius: 10, width: 200 }} onPress={onSignUp} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  itemLayout: {
    marginVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    marginRight: 30,
  },
  inputText: {
    width: 200,
    borderBottomWidth: 1,
  },
});

export default SignUp;
