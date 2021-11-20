import React, { useState } from 'react';
import { View, Text, TextInput, Image, StyleSheet, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Button from '../../components/Button';
import { useDispatchContext, useStateContext } from '../../context/user/UserContext';
import { dispatchAction } from '../../context/user/UseDispatch';
import assets from '~/assets/assets';
import EditText from '~/components/EditText';
import { onChange } from 'react-native-reanimated';
import Colors from '~/values/color/Colors';

const SignIn = () => {
  const navigation = useNavigation();
  // const { onSignIn } = useContext(UserContext);
  const state = useStateContext();
  const dispatch = useDispatchContext();
  const onSignIn = (req: any) => dispatchAction('SignIn', dispatch, req);

  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();

  const handleSignIn = () => {
    email && password && onSignIn({ email, password });
  };
  const onSignUp = () => {
    navigation.navigate('SignUp');
  };

  return (
    <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Image style={{ width: '80%', height: 250, marginBottom: 30 }} source={assets.icon} />
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
  button: { borderWidth: 1, borderRadius: 20, width: '80%', marginTop: 10 },
  input: {
    width: '80%',
    borderBottomWidth: 1,
    borderColor: '#000000',
    marginBottom: 20,
  },
});

export default SignIn;
