interface IAxiosContext {
  reqLog: string | undefined;
  resLog: string | undefined;
  useInterceptor: () => void;
  ejectInterceptor: () => void;
}
