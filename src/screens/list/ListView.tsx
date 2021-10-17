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
    return (
      state?.dogBreeds?.map((breed: string, index: any) => {
        return <ItemView key={index} text={breed} />;
      }) || undefined
    );
  }, [state.dogBreeds]);

  return (
    <>
      <View>
        {dogList && (
          <FlatList data={dogList} keyExtractor={(item, index) => index.toString()} renderItem={({ item }) => item} />
        )}
      </View>
      {state.loading && <Loading />}
    </>
  );
};

export default ListView;
