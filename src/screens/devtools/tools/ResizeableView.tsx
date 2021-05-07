import React, { useState, useContext, useMemo, useCallback } from 'react';
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
  const { setToolType } = useContext(ToolContext);

  const [moveOffset, setMoveOffset] = useState<{ x: number; y: number }>();
  const [moveStart, setMoveStart] = useState<{ x: number; y: number }>();
  const [translate, setTranslate] = useState<{ x: number; y: number }>();

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

  const onMoveStart = useCallback(
    (event: GestureResponderEvent) => {
      setMoveOffset({ x: event.nativeEvent.pageX, y: event.nativeEvent.pageY });
      translate && setMoveStart({ x: translate.x, y: translate.y });
    },
    [moveOffset, moveStart],
  );

  const onMove = useCallback(
    (event: GestureResponderEvent) => {
      if (moveOffset) {
        const X = moveStart ? moveStart.x : 0;
        const Y = moveStart ? moveStart.y : 0;
        const translateX = X + event.nativeEvent.pageX - moveOffset.x;
        const translateY = Y + event.nativeEvent.pageY - moveOffset.y;

        setTranslate({ x: translateX, y: translateY });
      }
    },
    [moveOffset, moveStart, translate],
  );

  const onMoveEnd = useCallback(
    (event: GestureResponderEvent) => {
      setMoveOffset(undefined);
      setMoveStart(undefined);
    },
    [moveOffset, moveStart],
  );

  const TopView = useMemo(() => {
    return (
      <View
        style={styles.topView}
        onStartShouldSetResponder={(event: GestureResponderEvent) => {
          return true;
        }}
        onResponderGrant={onMoveStart}
        onResponderMove={onMove}
        onResponderRelease={onMoveEnd}>
        <Button title={'X'} buttonStyle={styles.button} onPress={onClose} />
        <Button title={'clear'} buttonStyle={styles.button} onPress={onLogClear} />
      </View>
    );
  }, [moveOffset, moveStart, translate]);

  return (
    <View
      style={[
        styles.container,
        {
          transform: [{ translateX: translate ? translate.x : 0 }, { translateY: translate ? translate.y : 0 }],
        },
      ]}>
      {TopView}
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
