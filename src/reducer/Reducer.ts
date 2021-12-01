import produce from 'immer';

const initialState: IAutnState = {
  accountInfo: undefined,
  state: 'loading',
};

export const auth = (state: IAutnState = initialState, action: ReducerAction) => {
  return produce(state, (draft: any) => {
    switch (action?.type) {
      case 'setAuthInfo':
        draft.accountInfo = action?.data;
        draft.state = action?.data ? 'success' : 'fail';
        return draft;
      case 'clearAuthInfo':
        draft.accountInfo = undefined;
        draft.state = 'success';
        return draft;
      case 'fail':
        return { ...state, state: 'fail' };
      case 'loading':
        return { ...state, state: 'loading' };
    }
  });
};
