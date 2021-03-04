import React from 'react';

import RootNavigation from './RootNavigation';
import { UserContextProvider } from '../context/user/UserContext';

const Root = () => {
  return (
    <>
      <UserContextProvider>
        <RootNavigation />
      </UserContextProvider>
    </>
  );
};

export default Root;
