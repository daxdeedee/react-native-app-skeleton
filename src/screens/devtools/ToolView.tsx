import React, { useState, createContext, useContext } from 'react';
import { View, StyleSheet } from 'react-native';

import Button from '../../components/Button';
import AxoisLog from './tools/AxoisLog';
import { ToolContext } from './context/toolManager/ToolContext';

const ToolView = () => {
  const { type, setToolType, closeToolBar, openToolBar } = useContext(ToolContext);
  const onPressLog = () => {
    setToolType('axiosLog');
  };

  const onCloseLog = () => {
    setToolType(undefined);
  };

  return (
    <>
      <View style={styles.bar}>
        <Button title={'Log'} onPress={onPressLog} buttonStyle={{ borderWidth: 1, backgroundColor: '#f2f2f2' }} />
      </View>
      {type === 'axiosLog' && <AxoisLog onClose={onCloseLog} />}
    </>
  );
};

const styles = StyleSheet.create({
  bar: {
    position: 'absolute',
    right: 0,
    top: 0,
    width: '20%',
    height: '100%',
    backgroundColor: '#22e2ff',
    paddingVertical: 20,
  },
});

export default ToolView;
