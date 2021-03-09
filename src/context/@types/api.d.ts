type ResType = 'LOADING' | 'SUCCESS' | 'ERROR' | undefined;

interface IResponse {
  ok: boolean;
  status: number;
  statusText: string;
  result?: any;
}

interface IContexRes {
  loading: boolean;
  result: any;
  error: any;
}
