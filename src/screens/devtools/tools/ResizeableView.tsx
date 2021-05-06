import React from 'react';
import { View, Dimensions, StyleSheet, GestureResponderEvent } from 'react-native';

import { ToolContext } from './../context/toolManager/ToolContext';
import Button from '../../../components/Button';

const { height } = Dimensions.get('screen');

interface Props {
  nowMove?: boolean;
  layout?: any;
  move?: { x: number; y: number };
  size?: { bottom: number; right: number };
}

const ResizeableView = ({ nowMove = false, layout, move, size }: Props): JSX.Element => {
  const { setToolType } = React.useContext(ToolContext);
  const [top, setTop] = React.useState<number>();
  const [left, setLeft] = React.useState<number>();
  const [touchX, setTouchX] = React.useState<number>();
  const [touchY, setTouchY] = React.useState<number>();

  const TopView = () => {
    return (
      <View style={styles.topView}>
        <Button title={'X'} buttonStyle={styles.button} onPress={onClose} />
        <Button title={'clear'} buttonStyle={styles.button} onPress={onLogClear} />
      </View>
    );
  };

  const moveHandler = () => {
    // TODO move handler press on top
  };

  const sizeHandlerBR = () => {
    // resize press on bottom, right
  };

  const onClose = () => {
    // TODO close view
    setToolType(undefined);
  };

  const onLogClear = () => {
    // TODO clear log
  };

  const responderGrant = (event: GestureResponderEvent) => {
    // console.log(`rg 00 - ${event.nativeEvent.pageX} , ${event.nativeEvent.pageY}`);
    // console.log(`rg 01 - ${left} , ${top}`);
    setTouchX(event.nativeEvent.pageX);
    setTouchY(event.nativeEvent.pageY);
  };

  const responderMove = (event: GestureResponderEvent) => {
    if (touchY && touchX) {
      const yy = (top && top > 1) ? top : 0 + (event.nativeEvent.pageY - touchY);
      const xx = (left && left > 1) ? left : 0 + (event.nativeEvent.pageX - touchX);

      //   if (xx < 10) {
      console.log(`-------------------`);
      console.log(`rm topleft - ${top} , ${left}`);
      console.log(`rm pageXy - ${event.nativeEvent.pageX} , ${event.nativeEvent.pageY}`);
      console.log(`rm touchXy - ${event.nativeEvent.pageY - touchY} , ${event.nativeEvent.pageX - touchX}`);
      console.log(`rm xxyy - ${xx} , ${yy}`);
      console.log(`-------------------`);
      //   }

      setTop(yy);
      setLeft(xx);
    }
  };

  const responderRelease = (event: GestureResponderEvent) => {
    setTouchX(undefined);
    setTouchY(undefined);
  };

  return (
    <View
      style={[styles.container, { left, top }]}
      onStartShouldSetResponder={(event: GestureResponderEvent) => {
        return true;
      }}
      onResponderGrant={responderGrant}
      onResponderMove={responderMove}
      onResponderRelease={responderRelease}>
      {<TopView />}
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
  topView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#000000',
  },
  button: {
    height: 25,
    backgroundColor: '#f2f2f2',
  },
});

export default ResizeableView;
