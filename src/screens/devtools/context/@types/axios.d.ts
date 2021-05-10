type logType = 'request' | 'response';

interface IAxiosLog {
  id: string;
  time: string;
  log: string;
  type: logType;
  isError: boolean;
  status: number | undefined;
  method: string | undefined;
}

interface IAxiosLogContext {
  reqLog: Array<IAxiosLog>;
  resLog: Array<IAxiosLog>;
  useInterceptor: () => void;
  ejectInterceptor: () => void;
}
