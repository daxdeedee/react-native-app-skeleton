import React, { useState, useContext, useMemo, useCallback } from 'react';
import { View, Dimensions, StyleSheet, GestureResponderEvent } from 'react-native';

import { ToolContext } from './../context/toolManager/ToolContext';
import Button from '../../../components/Button';
import { color } from 'react-native-reanimated';

const { height } = Dimensions.get('screen');

interface Props {
  nowMove?: boolean;
  layout?: JSX.Element | React.Component;
  move?: { x: number; y: number };
  size?: { bottom: number; right: number };
}

const ResizeableView = ({ nowMove = false, layout, move, size }: Props): JSX.Element => {
  const { setToolType } = useContext(ToolContext);

  const [moveOffset, setMoveOffset] = useState<{ x: number; y: number }>();
  const [moveStart, setMoveStart] = useState<{ x: number; y: number }>();
  const [translate, setTranslate] = useState<{ x: number; y: number }>();

  const [resizeOffset, setResizeOffset] = useState<{ x: number; y: number }>();
  const [resizeStart, setResizeStart] = useState<{ x: number; y: number }>();
  const [bottom, setBottom] = useState<number>(250);
  const [right, setRight] = useState<number>(100);

  const onClose = () => {
    setToolType(undefined);
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

        setTranslate({ x: translateX < 0 ? 0 : translateX, y: translateY < 0 ? 0 : translateY });
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

  const onResizeStart = useCallback(
    (event: GestureResponderEvent) => {
      setResizeOffset({ x: event.nativeEvent.pageX, y: event.nativeEvent.pageY });
      setResizeStart({ x: right, y: bottom });
    },
    [resizeOffset, resizeStart],
  );

  const onResizeMove = useCallback(
    (event: GestureResponderEvent) => {
      if (resizeOffset) {
        const X = resizeStart ? resizeStart.x : 0;
        const Y = resizeStart ? resizeStart.y : 0;
        const resizeX = resizeOffset.x - (event.nativeEvent.pageX - X);
        const resizeY = resizeOffset.y - (event.nativeEvent.pageY - Y);

        setRight(resizeX);
        setBottom(resizeY);
      }
    },
    [resizeOffset, resizeStart],
  );

  const onResizeEnd = useCallback(
    (event: GestureResponderEvent) => {
      setResizeOffset(undefined);
      setResizeStart(undefined);
    },
    [resizeOffset, resizeStart],
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
        <Button title={'X'} buttonStyle={styles.button} onPress={onClose} textStyle={{ color: '#ffffff' }} />
      </View>
    );
  }, [moveOffset, moveStart, translate]);

  const ResizeTab = useMemo(() => {
    return (
      <View style={{ flexDirection: 'row', justifyContent: 'flex-end', position: 'absolute', bottom: 0, right: 0 }}>
        <View
          style={styles.resizeView}
          onStartShouldSetResponder={(event: GestureResponderEvent) => {
            return true;
          }}
          onResponderGrant={onResizeStart}
          onResponderMove={onResizeMove}
          onResponderRelease={onResizeEnd}></View>
      </View>
    );
  }, [resizeOffset, resizeStart]);

  return (
    <View
      style={[
        styles.container,
        {
          transform: [{ translateX: translate ? translate.x : 0 }, { translateY: translate ? translate.y : 0 }],
        },
        { bottom, right },
      ]}>
      {TopView}
      {layout}
      {ResizeTab}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
    position: 'absolute',
    left: 0,
    top: 0,
    minWidth: 200,
    minHeight: 200,
    backgroundColor: '#00000099',
    justifyContent: 'space-between',
  },
  topView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#000000',
  },
  resizeView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#00000033',
    height: 30,
    width: 30,
  },
  button: {
    height: 25,
    borderRadius: 5,
    borderColor: '#ffffff',
    borderWidth: 1,
    color: '#ffffff',
  },
});

export default ResizeableView;
