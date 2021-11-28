// action -> dispatcher -> store -> view
import { Dispatch } from 'react';
import { signIn } from '~/api/ApiAccount';

const onApiCall = async (type: AccountApiType, onApi: Promise<IResponse>) => {
  const res = await onApi;
  const result =
    res?.ok && res?.result
      ? { result: res?.result, error: undefined, type }
      : { result: undefined, error: res.status.toString(), type };
  return result;
};

export const dispatchAction = async (type: AccountApiType, dispatch: Dispatch<IAccountAction>, req: any) => {
  try {
    switch (type) {
      case 'SignIn':
        const result = await onApiCall(type, signIn(req?.email, req?.pw));
        return dispatch({ ...result });
      case 'SignOut':
        return dispatch({ result: 'SignOut', error: undefined, type });
      case 'SignUp':
        return dispatch({ result: 'SignUp', error: undefined, type });
    }
  } catch (e) {
    dispatch({ type: 'Fail', result: undefined, error: e });
  }
};
