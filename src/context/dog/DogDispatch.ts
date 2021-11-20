import { Dispatch } from 'react';
import ApiDog from '~/api/ApiDog';

const onApiCall = async (type: DogApiType, apiPromise: Promise<IResponse>) => {
  const res = await apiPromise;
  if (res.ok && res.result.message) {
    if (type === 'GetDogBreeds') {
      const getList: Record<string, string[]>[] = res.result.message;
      return { loading: false, result: Object.keys(getList) };
    } else {
      return { loading: false, result: res.result.message };
    }
  } else {
    return { loading: false, error: res.status.toString() };
  }
};

export const dispatchAction = async (type: DogApiType, dispatch: Dispatch<IDogAction>) => {
  dispatch({ type: 'Request', loading: true, result: undefined, error: undefined });
  try {
    switch (type) {
      case 'GetDogBreeds':
        const breeds = await onApiCall(type, ApiDog.getAllBreeds());
        return dispatch({ ...breeds, type });
      case 'GetRandomImage':
        const image = await onApiCall(type, ApiDog.getRandomImage());
        return dispatch({ ...image, type });
      default:
        return dispatch({ type: 'Fail', loading: false, result: undefined, error: `Wrong type error : ${type}` });
    }
  } catch (e) {
    dispatch({ type: 'Fail', loading: false, result: undefined, error: e });
  }
};
