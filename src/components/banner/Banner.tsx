import React from 'react';
import { View, FlatList } from 'react-native';

import BannerItem from '~/components/banner/BannerItem';

const DUMMY_DATA = [
  { title: 'item1' },
  { title: 'item2' },
  { title: 'item3' },
  { title: 'item4' },
  { title: 'item5' },
  { title: 'item6' },
];

interface Iprops {
  bannerData: any;
}

const Banner = () => {
  return (
    <>
      <FlatList
        horizontal
        data={DUMMY_DATA}
        renderItem={(item) => <BannerItem />}
        keyExtractor={(item) => `${item?.title}`}
        showsHorizontalScrollIndicator={false}
      />
    </>
  );
};

export default Banner;
