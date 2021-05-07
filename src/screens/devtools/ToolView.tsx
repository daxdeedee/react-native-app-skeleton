import React, { useState, createContext, useContext } from 'react';
import { View, StyleSheet } from 'react-native';

import Button from '../../components/Button';
import AxoisLog from './tools/AxoisLog';
import ResizeView from './tools/ResizeableView';
import { ToolContext } from './context/toolManager/ToolContext';

const ToolView = () => {
  const { type, setToolType, closeToolBar, openToolBar } = useContext(ToolContext);
  const onPressLog = () => {
    setToolType('axiosLog');
  };

  const onCloseLog = () => {
    setToolType(undefined);
  };

  const onPressResize = () => {
    setToolType('resize');
  };

  return (
    <>
      <View style={styles.bar}>
        <Button
          textStyle={styles.button}
          title={'Log'}
          onPress={onPressLog}
          buttonStyle={{ borderWidth: 1, backgroundColor: '#f2f2f2' }}
        />
        <Button
          textStyle={styles.button}
          title={'console.log'}
          onPress={onPressResize}
          buttonStyle={{ borderWidth: 1, backgroundColor: '#f2f2f2' }}
        />
      </View>
      {type === 'axiosLog' && <ResizeView layout={<AxoisLog onClose={onCloseLog} />} />}

      {type === 'resize' && <ResizeView />}
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
    backgroundColor: '#919191',
    paddingVertical: 20,
  },
  button: {
    fontSize: 10,
  },
});

export default ToolView;
