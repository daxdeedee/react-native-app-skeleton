import React from 'react';

import RootNavigation from './RootNavigation';
import { AccountContextProvider } from '../context/user/UserContext';

const Root = () => {
  return (
    <>
      <AccountContextProvider>
        <RootNavigation />
      </AccountContextProvider>
    </>
  );
};

export default Root;
