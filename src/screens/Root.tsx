import React from 'react';

import RootNavigation from '~/screens/RootNavigation';
import { AccountContextProvider } from '~/context/user/UserContext';

import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import reducer from '~/reducer/RootReducer';

const Root = () => {
  const store = createStore(reducer, applyMiddleware(thunk));

  return (
    <>
      <Provider store={store}>
        <AccountContextProvider>
          <RootNavigation />
        </AccountContextProvider>
      </Provider>
    </>
  );
};

export default Root;
