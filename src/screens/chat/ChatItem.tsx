import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ChatInfo } from '~/types/chat';

const ChatItem = ({ info }: { info: ChatInfo }) => {
  return (
    <View style={info.type === 'receive' ? styles.send : styles.receive}>
      <Text style={info.type === 'receive' ? styles.sendText : styles.receiveText}>{info.message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  send: {
    height: 50,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  sendText: {
    backgroundColor: '#ff22aa',
    padding: 10,
  },
  receive: {
    height: 50,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  receiveText: {
    backgroundColor: '#aaffaa',
    padding: 10,
  },
});

export default ChatItem;
