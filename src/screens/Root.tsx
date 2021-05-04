import React from 'react';

import RootNavigation from './RootNavigation';
import { UserContextProvider } from '../context/user/UserContext';
import DevToolRoot from './devtools/DevToolRoot';
import ToolView from './devtools/ToolView';

const Root = () => {
  return (
    <>
      <UserContextProvider>
        <RootNavigation />
        <DevToolRoot />
      </UserContextProvider>
    </>
  );
};

export default Root;
