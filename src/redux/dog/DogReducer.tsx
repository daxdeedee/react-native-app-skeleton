import { AnyAction } from 'redux';

// initState
const defaultState: IDogState = {
  loading: false,
  dogBreeds: undefined,
  randomImage: undefined,
  error: undefined,
};

// type DogAction = ReturnType<typeof dogAction>;

// reducer
const dogReducer = (state: IDogState = defaultState, action: AnyAction) => {
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
      return {
        ...state,
        error: `Unhandled action type: ${action.type}`,
        loading: false,
      };
  }
};

export default dogReducer;
