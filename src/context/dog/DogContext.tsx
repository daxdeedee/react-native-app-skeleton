import React, { Dispatch, createContext, useReducer, useContext } from 'react';

interface IProps {
  children: JSX.Element | Array<JSX.Element>;
}

type action = Dispatch<IDogAction>;
const StateContext = createContext<IDogState | undefined>(undefined);
const DispatchContext = createContext<action | undefined>(undefined);

const defaultRes: IDogState = {
  loading: false,
  dogBreeds: undefined,
  randomImage: undefined,
  error: undefined,
};

const dogReducer = (state: IDogState, action: IDogAction): IDogState => {
  switch (action.type) {
    case 'Request':
      return {
        ...state,
        loading: action.loading,
      };
    case 'GetDogBreeds':
      return {
        ...state,
        loading: action.loading,
        dogBreeds: action.result as string[],
      };
    case 'GetRandomImage':
      return {
        ...state,
        loading: action.loading,
        randomImage: action.result as string,
      };
    case 'Fail':
      return {
        ...state,
        error: action.error,
        loading: action.loading,
      };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

const DogContextProvider = ({ children }: IProps) => {
  const [state, dispatch] = useReducer(dogReducer, defaultRes);
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

export { useStateContext, useDispatchContext, DogContextProvider };
