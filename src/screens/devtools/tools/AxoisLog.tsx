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
    flex: 1,
  },
});

export default AxoisLog;
