interface IUserContext {
  email?: string;
  onSignIn: (email: string, pw: string) => void;
}
