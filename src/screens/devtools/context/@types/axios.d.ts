interface IAxiosLogContext {
  reqLog: Array<string>;
  resLog: Array<string>;
  useInterceptor: () => void;
  ejectInterceptor: () => void;
}
