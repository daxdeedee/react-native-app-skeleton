import React from 'react';

import RootNavigation from './RootNavigation';
import { UserContextProvider } from '../context/user/UserContext';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

// import { composeWithDevTools } from 'redux-devtools-extension';
// import ReduxThunk from 'redux-thunk';

import rootReducer from '../redux/dog/index';

// const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(ReduxThunk)));
const store = createStore(rootReducer);

const Root = () => {
  return (
    <>
      <Provider store={store}>
        <UserContextProvider>
          <RootNavigation />
        </UserContextProvider>
      </Provider>
    </>
  );
};

export default Root;
