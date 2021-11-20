import React from 'react';
import { View } from 'react-native';

import Banner from '~/components//banner/Banner';

const Home = () => {
  return (
    <>
      <View style={{ borderBottomWidth: 1, paddingBottom: 10 }}>{<Banner />}</View>
    </>
  );
};

export default Home;
