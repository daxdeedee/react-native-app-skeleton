import { Dispatch } from 'react';
import ApiDog from '../../api/ApiDog';

const getBreeds = async () => {
  const res = await ApiDog.getAllBreeds();
  if (res.ok && res.result.message) {
    const getList: Record<string, string[]>[] = res.result.message;
    return { type: 'GetDogBreeds', loading: false, result: Object.keys(getList) };
  } else {
    return { type: 'GetDogBreeds', loading: false, error: res.status.toString() };
  }
};

const getDogImage = async () => {
  const res = await ApiDog.getRandomImage();
  if (res.ok && res.result.message) {
    return { loading: false, result: res.result.message };
  } else {
    return { loading: false, error: res.status.toString() };
  }
};

export const dispatchAction = async (type: DogApiType, dispatch: Dispatch<DogAction>) => {
  dispatch({ type: 'Request', loading: true, result: undefined, error: undefined });
  try {
    switch (type) {
      case 'GetDogBreeds':
        const breeds = await getBreeds();
        return dispatch({ ...breeds, type });
      case 'GetRandomImage':
        const image = await getDogImage();
        return dispatch({ ...image, type });
    }
  } catch (e) {
    dispatch({ type: 'Fail', loading: false, result: undefined, error: e });
  }
};
