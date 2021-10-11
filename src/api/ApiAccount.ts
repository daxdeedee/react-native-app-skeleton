import { RequestApi, Method } from './ApiAxios';

export const signIn = (email: string, pw: string): Promise<IResponse> => {
  return new Promise<IResponse>((resolve, reject) => {
    // set signin url
    const result = {
      ok: true,
      status: 200,
      statusText: 'success',
      result: email,
    };
    resolve(result);
  });
};

export const signUp = (): Promise<IResponse> => {
  return new Promise<IResponse>((resolve, reject) => {
    // set signUp url
  });
};
