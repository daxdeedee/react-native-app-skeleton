import React, { useState, useContext } from 'react';
import { View, SafeAreaView, Text } from 'react-native';

import Absolute from '@actbase/react-absolute';
import Button from '../../components/Button';
import { AxiosContext } from '../../context/axios/AxiosContext';
import ToolView from '../../screens/devtools/ToolView';

const AbsoluteView = () => {
  const { reqLog, resLog, useInterceptor, ejectInterceptor } = useContext(AxiosContext);
  const [reqId, setReqID] = useState<number>();
  const [resId, setResID] = useState<number>();

  const TmpView = () => {
    const onAddView = () => {
      const removeCallback = Absolute.add(
        <View style={{ backgroundColor: '#ff0', position: 'absolute', width: 500, height: 500, left: 10, top: 10 }}>
          <Text>{reqLog}</Text>
        </View>,
      );
      console.log(removeCallback);
      // setTimeout(() => {
      //   removeCallback();
      // }, 3000);

      // setAddView(viewHandler);
    };

    const onRemoveView = () => {
      // addView;
    };

    const onUse = () => {
      useInterceptor();
      onAddView();
    };

    const onEject = () => {
      ejectInterceptor();
      // onAddView();
    };

    return (
      <>
        <View style={{ backgroundColor: '#ff22' }}>
          {/* <Absolute>
            <View
              style={{
                position: 'absolute',
                width: 300,
                height: 300,
                left: 10,
                top: 100,
                backgroundColor: '#00000010',
              }}>
              <Text>{reqLog}</Text>
              <Text>--------</Text>
              <Text>{resLog}</Text>
            </View>
          </Absolute> */}

          <Button title={'Add'} onPress={onUse} />
          <Button title={'Remove'} onPress={onEject} />
        </View>
      </>
    );
  };

  return (
    <Absolute.Provider>
      {/* <SafeAreaView> */}
      <TmpView />
      {/* </SafeAreaView> */}
    </Absolute.Provider>
  );
};

export default AbsoluteView;
