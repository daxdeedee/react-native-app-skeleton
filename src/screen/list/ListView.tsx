import React, { useContext, useEffect, useMemo } from 'react';
import { View, FlatList } from 'react-native';

import { DogContext } from '../../context/dog/DogContext';
import ItemView from './modules/ItemView';
import Loading from '../../components/Loading';

const ListView = () => {
  const { isLoading, dogBreeds, getDogBreeds } = useContext(DogContext);

  useEffect(() => {
    getDogBreeds();
  }, []);

  const dogList = useMemo(() => {
    const dogList: JSX.Element[] = [];
    dogBreeds &&
      dogBreeds.forEach((breed: string, index) => {
        breed && dogList.push(<ItemView key={index} text={breed} />);
      });
    return dogList;
  }, [dogBreeds]);

  return (
    <>
      <View style={{ marginHorizontal: 10 }}>
        <FlatList data={dogList} keyExtractor={(item, index) => index.toString()} renderItem={({ item }) => item} />
      </View>
      {isLoading && <Loading />}
    </>
  );
};

export default ListView;
