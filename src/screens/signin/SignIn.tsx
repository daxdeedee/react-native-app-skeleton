import React, { useState } from 'react';
import { View, Text, TextInput, Image, StyleSheet, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Button from '~/components/Button';
import assets from '~/assets/assets';
import EditText from '~/components/EditText';
import Colors from '~/values/color/Colors';

import { useDispatch } from 'react-redux';
import { getAuthInfo } from '~/reducer/Action';

const SignIn = () => {
  const reduxDispatch = useDispatch();
  const navigation = useNavigation();

  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();

  const handleSignIn = () => {
    email && password && reduxDispatch(getAuthInfo({ email, pw: password }));
  };
  const onSignUp = () => {
    navigation.navigate('SignUp');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.logo} source={assets.icon_light} />
      <EditText
        bgStyle={styles.input}
        inputStyle={{ fontSize: 20 }}
        onChangeText={(text) => {
          setEmail(text);
        }}
        placeholder={'아이디'}
        value={email}
        isClear={true}
      />
      <EditText
        bgStyle={styles.input}
        inputStyle={{ fontSize: 20 }}
        onChangeText={(text) => {
          setPassword(text);
        }}
        secureTextEntry={true}
        placeholder={'비밀번호'}
        value={password}
        isClear={true}
      />
      <View style={{ alignItems: 'center', marginTop: 20, width: '100%' }}>
        <Button title={'Sign In'} buttonStyle={styles.button} onPress={handleSignIn} />
        <Button title={'Sign Up'} buttonStyle={styles.button} onPress={onSignUp} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  itemLayout: {
    marginVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    marginRight: 30,
  },
  button: { borderWidth: 1, borderRadius: 20, width: '80%', marginTop: 10 },
  input: {
    width: '80%',
    borderBottomWidth: 1,
    borderColor: Colors.black,
    marginBottom: 20,
  },
  logo: { borderRadius: 10, width: '80%', height: 250, marginBottom: 30 },
});

export default SignIn;
