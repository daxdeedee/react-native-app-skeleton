import { combineReducers } from 'redux';
import { auth } from '~/reducer/Reducer';

const AppReducer = combineReducers({
  auth,
});

export default AppReducer;
