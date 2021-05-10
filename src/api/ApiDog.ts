import { RequestApi, Method, useInterceptors, ejectInterceptors } from './ApiAxios';

const ApiDog = {
  getAllBreeds: (): Promise<IResponse> => {
    return RequestApi({ url: 'https://dog.ceo/api/breeds/list/all', method: Method.GET });
  },

  getRandomImage: (): Promise<IResponse> => {
    return RequestApi({ url: 'https://dog.ceo/api/breeds/image/random', method: Method.GET });
  },
};

export default ApiDog;
