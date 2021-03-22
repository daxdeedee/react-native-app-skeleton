import { combineReducers } from 'redux';
import dogReducer from './DogReducer';

const rootReducer = combineReducers({
  dogReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
