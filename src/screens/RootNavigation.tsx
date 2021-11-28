import React from 'react';

import SignInNavi from '~/screens/signin/SignInNavi';
import MainNavi from '~/screens/main/MainNavi';
import { useStateContext } from '~/context/user/UserContext';

const RootNavigation = () => {
  const state = useStateContext();
  return <>{state?.accountInfo?.email ? <MainNavi /> : <SignInNavi />}</>;
};

export default RootNavigation;
