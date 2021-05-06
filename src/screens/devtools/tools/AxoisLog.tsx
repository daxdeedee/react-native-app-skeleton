import React, { useContext, useEffect } from 'react';
import { View, ScrollView, StyleSheet, Text } from 'react-native';

import { AxiosContext } from '../context/axios/AxiosContext';
import Button from '../../../components/Button';

interface IProps {
  onClose: () => void;
}

const AxoisLog = ({ onClose }: IProps) => {
  const { reqLog, resLog, useInterceptor, ejectInterceptor } = useContext(AxiosContext);
  useEffect(() => {
    useInterceptor();
    return ejectInterceptor();
  }, []);

  return (
    <View style={styles.container}>
      <Button title={'Close'} onPress={onClose} buttonStyle={{ borderWidth: 1, backgroundColor: '#f2f2f2' }} />
      <ScrollView>
        <Text style={{ color: '#ffffff', fontSize: 10 }}>{reqLog}</Text>
        <Text>------------</Text>
        <Text style={{ color: '#ffffff', fontSize: 10 }}>{resLog}</Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
    position: 'absolute',
    left: 0,
    top: 100,
    width: '70%',
    height: 300,
    backgroundColor: '#00000099',
  },
});

export default AxoisLog;
