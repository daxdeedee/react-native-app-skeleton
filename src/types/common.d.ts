interface IAccountInfo {
  email: string;
}

interface IAutnState {
  accountInfo?: IAccountInfo;
  state: ReducerType;
}

type ReducerType = 'setAuthInfo' | 'clearAuthInfo' | 'fail' | 'loading' | 'success';

type ReducerAction = {
  type: ReducerType;
  data: any;
};
