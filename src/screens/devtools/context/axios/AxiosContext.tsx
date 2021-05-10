import React, { useState, createContext } from 'react';
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

const defaultAxiosContext: IAxiosLogContext = {
  reqLog: [],
  resLog: [],
  useInterceptor: () => {},
  ejectInterceptor: () => {},
};

const AxiosContext = createContext(defaultAxiosContext);

interface Props {
  children: JSX.Element | Array<JSX.Element>;
}

const AxiosContextProvider = ({ children }: Props) => {
  const [reqId, setReqId] = useState<number | undefined>(undefined);
  const [resId, setResId] = useState<number | undefined>(undefined);
  const [reqLog, setReqLog] = useState<Array<IAxiosLog>>([]);
  const [resLog, setResLog] = useState<Array<IAxiosLog>>([]);

  const getDate = () => {
    const now = new Date();
    return `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
  };

  const getReqLog = (config: AxiosRequestConfig, isError: boolean = false) => {
    return `Request / url = ${config.url} / method = ${config.method}`;
  };

  const getResLog = (response: AxiosResponse, isError: boolean = false) => {
    return `Response / status = ${response.status} / data = ${JSON.stringify(response.data)}`;
  };

  const getLogFormat = (config?: AxiosRequestConfig, response?: AxiosResponse, isError: boolean = false) => {
    const log = config ? getReqLog(config) : getResLog(response!);
    const type: logType = config ? 'request' : 'response';
    const logResult: IAxiosLog = {
      id: '',
      time: getDate(),
      log,
      type,
      isError,
      status: response ? response.status : undefined,
      method: config ? config.method : undefined,
    };

    return logResult;
  };

  const reqInterceptor = () => {
    return axios.interceptors.request.use(
      (config: AxiosRequestConfig) => {
        setReqLog((log) => [...log, getLogFormat(config, undefined, false)]);
        console.log(config);
        return config;
      },
      (error: any) => {
        setReqLog((log) => [...log, getLogFormat(error, undefined, true)]);
        return error;
      },
    );
  };

  const resInterceptor = () => {
    return axios.interceptors.response.use(
      (response: AxiosResponse) => {
        console.log(response);
        setResLog((log) => [...log, getLogFormat(undefined, response, false)]);
        return response;
      },
      (error: any) => {
        setResLog((log) => [...log, getLogFormat(undefined, error, true)]);
        return error;
      },
    );
  };

  const useInterceptor = () => {
    setReqId(reqInterceptor());
    setResId(resInterceptor());
  };

  const ejectInterceptor = () => {
    reqId && axios.interceptors.request.eject(reqId);
    resId && axios.interceptors.response.eject(resId);
    setReqId(undefined);
    setResId(undefined);
  };

  return (
    <AxiosContext.Provider
      value={{
        reqLog,
        resLog,
        useInterceptor,
        ejectInterceptor,
      }}>
      {children}
    </AxiosContext.Provider>
  );
};

export { AxiosContext, AxiosContextProvider };
