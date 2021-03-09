import React, { useContext, useState } from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Button from '../../components/Button';
import { UserContext } from '../../context/user/UserContext';

const SignIn = () => {
  const navigation = useNavigation();
  const { setSignIn } = useContext(UserContext);
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();

  const onSignIn = () => {
    email && setSignIn(email);
  };
  const onSignUp = () => {
    navigation.navigate('SignUp');
  };

  return (
    <View>
      <View style={styles.itemLayout}>
        <Text style={styles.text}>ID</Text>
        <TextInput style={styles.inputText} onChangeText={setEmail} />
      </View>
      <View style={styles.itemLayout}>
        <Text style={styles.text}>PW</Text>
        <TextInput style={styles.inputText} autoCapitalize="none" secureTextEntry={true} onChangeText={setPassword} />
      </View>
      <View style={{ alignItems: 'center', marginTop: 20 }}>
        <Button title={'Sign In'} borderWidth={1} borderRadius={10} width={200} onPress={onSignIn} />
        <Button title={'Sign Up'} borderWidth={1} borderRadius={10} width={200} onPress={onSignUp} />
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

export default SignIn;
