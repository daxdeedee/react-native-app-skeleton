import React, { useContext, useEffect, useState } from 'react';
import { View, FlatList } from 'react-native';
import { useTranslation } from 'react-i18next';

import { DogContext } from '../../context/dog/DogContext';
import ItemView from './modules/ItemView';

const ListView = () => {
  const { t } = useTranslation();
  const { dogBreeds, getDogBreeds } = useContext(DogContext);
  const [itemList, setITemList] = useState<JSX.Element[]>([]);

  useEffect(() => {
    getDogBreeds();
  }, []);

  useEffect(() => {
    if (dogBreeds) {
      const dogList: JSX.Element[] = [];
      dogBreeds.forEach((breed: string, index) => {
        breed && dogList.push(<ItemView key={index} text={breed} />);
      });
      setITemList(dogList);
    }
  }, [dogBreeds]);

  return (
    <View style={{ marginHorizontal: 10 }}>
      <FlatList
        ref={(ref) => {}}
        data={itemList}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => item}
      />
    </View>
  );
};

export default ListView;
