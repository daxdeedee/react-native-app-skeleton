import React from 'react';
import { View } from 'react-native';

import Banner from '~/components//banner/Banner';
import ChatList from '~/screens/chat/ChatList';

const Home = () => {
  return (
    <>
      <View style={{ borderBottomWidth: 1, paddingBottom: 10 }}>{<Banner />}</View>
      <ChatList />
    </>
  );
};

export default Home;
