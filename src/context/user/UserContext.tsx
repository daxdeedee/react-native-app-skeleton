import React, { useState, createContext } from 'react';
import { signIn } from '../../api/ApiAccount';

const defaultUserContext: IUserContext = {
  email: undefined,
  onSignIn: (email: string, pw: string) => {},
};

const UserContext = createContext(defaultUserContext);

interface Props {
  children: JSX.Element | Array<JSX.Element>;
}

const UserContextProvider = ({ children }: Props) => {
  const [email, setEmail] = useState<string | undefined>(undefined);

  const onSignIn = async (email: string, pw: string) => {
    // Signin in your api code,
    const res = await signIn(email, pw);
    setEmail(res?.result);
  };

  return (
    <UserContext.Provider
      value={{
        email,
        onSignIn,
      }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserContextProvider };
