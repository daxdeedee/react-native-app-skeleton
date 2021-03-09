import React, { useEffect, useMemo } from 'react';
import { View, FlatList } from 'react-native';

import { useDispatchContext, useStateContext } from '../../context/dog/DogContext';
import { dispatchAction } from '../../context/dog/DogDispatch';
import ItemView from './modules/ItemView';
import Loading from '../../components/Loading';

const ListView = () => {
  const state = useStateContext();
  const dispatch = useDispatchContext();
  const getBreeds = () => dispatchAction('GetDogBreeds', dispatch);

  const fetchData = () => {
    getBreeds();
  };

  useEffect(() => {
    fetchData();
  }, []);

  const dogList = useMemo(() => {
    const dogList: JSX.Element[] = [];
    state.dogBreeds &&
      state.dogBreeds.forEach((breed: string, index: any) => {
        breed && dogList.push(<ItemView key={index} text={breed} />);
      });
    return dogList;
  }, [state.dogBreeds]);

  return (
    <>
      <View style={{ marginHorizontal: 10 }}>
        <FlatList data={dogList} keyExtractor={(item, index) => index.toString()} renderItem={({ item }) => item} />
      </View>
      {state.loading && <Loading />}
    </>
  );
};

export default ListView;
