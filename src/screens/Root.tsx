import React from 'react';

import RootNavigation from '~/screens/RootNavigation';
import { AccountContextProvider } from '~/context/user/UserContext';

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
