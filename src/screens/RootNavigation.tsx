import React, { useContext } from 'react';
import { SafeAreaView } from 'react-native';

import SignInNavi from './signin/SignInNavi';
import MainNavi from './main/MainNavi';
import { UserContext } from '../context/user/UserContext';

const RootNavigation = () => {
  const { email } = useContext(UserContext);

  return <>{email ? <MainNavi /> : <SignInNavi />}</>;
};

export default RootNavigation;
