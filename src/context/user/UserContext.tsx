import React, { createContext, Dispatch, useReducer, useContext } from 'react';

interface IProps {
  children: JSX.Element | Array<JSX.Element>;
}

type action = Dispatch<IAccountAction>;
const StateContext = createContext<IAccountState | undefined>(undefined);
const DispatchContext = createContext<action | undefined>(undefined);

const defaultRes: IAccountState = {
  accountInfo: undefined,
  resResult: undefined,
  error: undefined,
};

const accountReducer = (state: IAccountState, action: IAccountAction): IAccountState => {
  switch (action?.type) {
    case 'SignIn':
      const email: string = action?.result || '';
      return {
        ...state,
        accountInfo: { email },
        error: action.error,
      };
    case 'Fail':
      return {
        ...state,
        error: action.error,
      };
    // need more types
    default:
      return {
        ...state,
        error: 'unhandled error',
      };
  }
};

const AccountContextProvider = ({ children }: IProps) => {
  const [state, dispatch] = useReducer(accountReducer, defaultRes);

  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>{children}</DispatchContext.Provider>
    </StateContext.Provider>
  );
};

const useStateContext = () => {
  const state = useContext(StateContext);
  if (!state) throw new Error('StateContext is undefined!');
  return state;
};

const useDispatchContext = () => {
  const state = useContext(DispatchContext);
  if (!state) throw new Error('DispatchContext is undefined!');
  return state;
};

export { useStateContext, useDispatchContext, AccountContextProvider };
