import React, { Dispatch, createContext, useReducer, useContext } from 'react';

interface IProps {
  children: JSX.Element | Array<JSX.Element>;
}

type action = Dispatch<DogAction>;
const StateContext = createContext<DogState | undefined>(undefined);
const DispatchContext = createContext<action | undefined>(undefined);

const defaultRes: DogState = {
  loading: false,
  dogBreeds: undefined,
  randomImage: undefined,
  error: undefined,
};

export const dogReducer = (state: DogState, action: DogAction): DogState => {
  switch (action.type) {
    case 'Request':
      return {
        ...state,
        loading: true,
      };
    case 'GetDogBreeds':
      return {
        ...state,
        loading: false,
        dogBreeds: action.result as string[],
      };
    case 'GetRandomImage':
      return {
        ...state,
        loading: false,
        randomImage: action.result as string,
      };
    case 'Fail':
      return {
        ...state,
        loading: false,
        error: 'Fail',
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
