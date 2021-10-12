type AccountApiType = 'SignIn' | 'SignUp' | 'SignOut' | 'Fail';

interface IUserContext {
  email?: string;
  onSignIn: (email: string, pw: string) => void;
}

interface IAccount {
  email: string;
}

interface IAccountState {
  accountInfo?: IAccount;
  resResult?: string;
  error?: any;
}

interface IAccountAction {
  type: AccountApiType;
  result?: string;
  error?: any;
}
