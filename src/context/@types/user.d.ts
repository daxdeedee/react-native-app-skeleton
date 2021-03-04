interface IUserContext {
  email?: string;
  setSignIn: (email: string) => void;
}
