import React, { useContext, useEffect, useMemo } from 'react';
import { View, ActivityIndicator, StyleSheet, Text, FlatList } from 'react-native';

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

  const logItem = (log: IAxiosLog) => {
    return (
      <View style={styles.logItem}>
        {<Text style={styles.log}>{log.type}</Text>}
        {<Text style={styles.log}>{log.time}</Text>}
        {log.method && <Text style={styles.log}>{log.method}</Text>}
        {log.status && <Text style={[styles.log]}>{log.status}</Text>}
        {<Text style={[styles.log, { flex: 1, color: log.isError ? '#ff0000' : '#ffffff' }]}>{log.log}</Text>}
      </View>
    );
  };

  const logList = useMemo(() => {
    return reqLog.map((log: IAxiosLog, index: number) => {
      return (
        <>
          {logItem(log)}
          {resLog[index] ? logItem(resLog[index]) : <ActivityIndicator size="small" color={'#ffffff'} />}
        </>
      );
    });
  }, [reqLog, resLog]);

  return (
    <View style={styles.container}>
      <FlatList data={logList} keyExtractor={(item, index) => index.toString()} renderItem={({ item }) => item} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  log: {
    color: '#ffffff',
    marginHorizontal: 5,
    marginVertical: 5,
    fontSize: 10,
  },
  logItem: {
    flexDirection: 'row',
    marginHorizontal: 3,
  },
});

export default AxoisLog;
