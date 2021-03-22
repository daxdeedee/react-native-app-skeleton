import React, { useEffect, useMemo } from 'react';
import { View, FlatList } from 'react-native';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';

import ItemView from './modules/ItemView';
import Loading from '../../components/Loading';
import { RootState } from '../../redux/dog';
import { dogAction } from '../../redux/dog/DogDispatch';

const ListView = () => {
  const { dogBreeds, loading } = useSelector((state: RootState) => state.dogReducer, shallowEqual);
  const dispatch = useDispatch();
  const onGetBreeds = () => dogAction('GetDogBreeds', dispatch);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    await onGetBreeds();
  };

  const dogList = useMemo(() => {
    const dogList: JSX.Element[] = [];
    dogBreeds &&
      dogBreeds.forEach((breed: string, index: any) => {
        breed && dogList.push(<ItemView key={index} text={breed} />);
      });
    return dogList;
  }, [dogBreeds]);

  return (
    <>
      <View style={{ marginHorizontal: 10 }}>
        <FlatList
          data={dogList}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => item}
          refreshing={loading}
          onRefresh={fetchData}
        />
      </View>
      {loading && <Loading />}
    </>
  );
};

export default ListView;
