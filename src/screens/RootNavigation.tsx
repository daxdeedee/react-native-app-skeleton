import React from 'react';

import SignInNavi from '~/screens/signin/SignInNavi';
import MainNavi from '~/screens/main/MainNavi';
import { useStateContext } from '~/context/user/UserContext';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

const RootNavigation = () => {
  const { accountInfo } = useSelector((state: any) => state.auth, shallowEqual);
  // return <>{accountInfo ? <MainNavi /> : <SignInNavi />}</>;
  return <MainNavi />;
};

export default RootNavigation;
