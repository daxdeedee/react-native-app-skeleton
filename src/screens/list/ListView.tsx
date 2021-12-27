import React, { useEffect, useMemo } from 'react';
import { View, FlatList } from 'react-native';

import { useDispatchContext, useStateContext } from '~/context/dog/DogContext';
import { dispatchAction } from '~/context/dog/DogDispatch';
import ItemView from '~/screens/list/modules/ItemView';
import Loading from '~/components/Loading';
import InfiniteList, { IpageInfo } from '~/components/InfiniteList';

type test = {
  aa: string;
};

interface Itest {
  aa: string;
}

interface Itest {
  bb: string;
}

const aa: test = {
  aa: 'sss',
};

const bb: Itest = {
  aa: 'sss',
};

const defaultPageInfo: IpageInfo = {
  pageIndex: 0,
  pageLimit: 10,
};

const ListView = () => {
  const state = useStateContext();
  const dispatch = useDispatchContext();
  const getBreeds = () => dispatchAction('GetDogBreeds', dispatch);
  const [dogs, setDogs] = React.useState<string[]>();

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (state?.dogBreeds && dogs === undefined) {
      setDogs(state?.dogBreeds.slice(defaultPageInfo.pageIndex, defaultPageInfo.pageLimit));
    }
  }, [state]);

  const fetchData = () => {
    getBreeds();
  };

  const onPressItem = (name: string) => {
    console.log('name : ', name);
  };

  const moreLoad = ({ pageIndex, pageLimit }: { pageIndex: number; pageLimit: number }) => {
    const result = state?.dogBreeds?.slice(pageIndex * pageLimit, pageIndex * pageLimit + pageLimit);
    return result;
  };

  return (
    <>
      <View>
        <InfiniteList
          initDatas={dogs}
          renderItem={({ item, index }) => {
            return <ItemView key={index} text={item} onPressItem={onPressItem} />;
          }}
          keyExtractor={(item, index) => index.toString()}
          onGetData={moreLoad}
          data={dogs}
          maxLength={state?.dogBreeds?.length}
        />
      </View>
      {state.loading && <Loading />}
    </>
  );
};

export default ListView;
