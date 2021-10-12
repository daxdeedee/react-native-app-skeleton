import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Button from '../../components/Button';
import { useDispatchContext, useStateContext } from '../../context/user/UserContext';
import { dispatchAction } from '../../context/user/UseDispatch';

const SignIn = () => {
  const navigation = useNavigation();
  // const { onSignIn } = useContext(UserContext);
  const state = useStateContext();
  const dispatch = useDispatchContext();
  const onSignIn = (req: any) => dispatchAction('SignIn', dispatch, req);

  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();

  const handleSignIn = () => {
    // email && password && onSignIn(email, password);
    email && password && onSignIn({ email, password });
  };
  const onSignUp = () => {
    navigation.navigate('SignUp');
  };

  return (
    <SafeAreaView>
      <View style={styles.itemLayout}>
        <Text style={styles.text}>ID</Text>
        <TextInput style={styles.inputText} onChangeText={setEmail} />
      </View>
      <View style={styles.itemLayout}>
        <Text style={styles.text}>PW</Text>
        <TextInput style={styles.inputText} autoCapitalize="none" secureTextEntry={true} onChangeText={setPassword} />
      </View>
      <View style={{ alignItems: 'center', marginTop: 20 }}>
        <Button
          title={'Sign In'}
          buttonStyle={{ borderWidth: 1, borderRadius: 10, width: 200 }}
          onPress={handleSignIn}
        />
        <Button title={'Sign Up'} buttonStyle={{ borderWidth: 1, borderRadius: 10, width: 200 }} onPress={onSignUp} />
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
  inputText: {
    width: 200,
    borderBottomWidth: 1,
  },
});

export default SignIn;
