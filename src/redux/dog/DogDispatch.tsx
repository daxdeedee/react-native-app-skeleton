import { Dispatch } from 'redux';
import ApiDog from '../../api/ApiDog';

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

export const dogAction = async (type: DogApiType, dispatch: Dispatch) => {
  dispatch({ type: 'Request', loading: true, result: undefined, error: undefined });
  try {
    switch (type) {
      case 'GetDogBreeds':
        const breeds = await onApiCall('GetDogBreeds', ApiDog.getAllBreeds());
        return dispatch({ ...breeds, type });
      case 'GetRandomImage':
        const image = await onApiCall('GetRandomImage', ApiDog.getRandomImage());
        return dispatch({ ...image, type });
      case 'Request':
        return dispatch({ type, loading: true, result: undefined });
      case 'Fail':
        return dispatch({ type, loading: false, result: undefined, error: 'Fail' });
      default:
        return dispatch({ type: 'Fail', loading: false, result: undefined, error: `Wrong type error : ${type}` });
    }
  } catch (e) {
    return dispatch({ type: 'Fail', loading: false, result: undefined, error: e });
  }
};
