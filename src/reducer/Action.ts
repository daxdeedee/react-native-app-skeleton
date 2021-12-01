import { signIn } from '~/api/ApiAccount';

export const getAuthInfo: any = ({ email, pw }: { email: string; pw: string }) => {
  return (dispatch: (arg0: { type: ReducerType; data?: IAccountInfo }) => void) => {
    return new Promise((resolve, reject) => {
      dispatch({ type: 'loading', data: undefined });
      signIn(email, pw)
        .then((response) => {
          if (response) {
            dispatch({ type: 'setAuthInfo', data: response?.result });
            resolve(response);
          } else {
            dispatch({ type: 'fail', data: undefined });
            resolve({ type: 'fail', data: undefined });
          }
        })
        .catch((e) => {
          console.log(e);
          dispatch({ type: 'fail', data: e });
          reject(e);
        });
    });
  };
};

export const clear = () => {
  return (dispatch: any) => dispatch({ type: 'clearAuthInfo' });
};
