import React from 'react';
import { FlatList, Text, TouchableOpacity, StyleSheet, View } from 'react-native';

import { ChatInfo } from '~/types/chat';
import ChatItem from '~/screens/chat/ChatItem';

// interface ChatInfo {
//     type: 'send' | 'receive';
//     message: string;
//     profile: string;
//     name: string;
//   }

const tmp_send: ChatInfo = {
  type: 'send',
  message: 'send test',
  profile: '',
  name: 'SEND',
};

const tmp_receive: ChatInfo = {
  type: 'receive',
  message: 'receive test',
  profile: '',
  name: 'RECEIVE',
};

const CHAT_LIST: ChatInfo[] = [tmp_send, tmp_receive, tmp_receive, tmp_send];
const typeArray = ['send', 'receive'];

const ChatList = () => {
  const [chatList, setChatList] = React.useState<ChatInfo[]>(CHAT_LIST);
  const listRef = React.useRef<FlatList<ChatInfo>>(null);

  const onAddChat = () => {
    const pick = typeArray[Math.floor(Math.random() * typeArray.length)];
    console.log(`---length `, chatList.length);
    setChatList((prev) => {
      return [...(prev || []), pick === 'send' ? tmp_send : tmp_receive];
    });
    setTimeout(() => {
      console.log(`---length! `, chatList.length);
      listRef.current?.scrollToEnd();
    }, 100);
  };

  const onClearChat = () => {
    setChatList(CHAT_LIST);
  };

  return (
    <>
      <TouchableOpacity
        onPress={() => {
          onAddChat();
        }}>
        <Text>Chat</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          onClearChat();
        }}>
        <Text>Clear</Text>
      </TouchableOpacity>
      <View style={styles.list}>
        <FlatList
          ref={listRef}
          data={chatList}
          renderItem={({ item }) => <ChatItem info={item} />}
          ItemSeparatorComponent={() => <View style={{ marginVertical: 10 }} />}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  list: {
    height: 300,
    // backgroundColor: '#fafa',
  },
  item: {
    opacity: 0.5,
  },
});

export default ChatList;
