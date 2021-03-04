import React, { useState, createContext } from 'react';

const defaultUserContext: IUserContext = {
  email: undefined,
  setSignIn: (email: string) => {},
};

const UserContext = createContext(defaultUserContext);

interface Props {
  children: JSX.Element | Array<JSX.Element>;
}

const UserContextProvider = ({ children }: Props) => {
  const [email, setEmail] = useState<string | undefined>(undefined);
  const setSignIn = (email: string) => {
    // Signin in your api code
    setEmail(email);
  };

  return (
    <UserContext.Provider
      value={{
        email,
        setSignIn,
      }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserContextProvider };
