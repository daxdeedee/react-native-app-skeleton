import React, { useState, createContext } from 'react';
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

const defaultAxiosContext: IAxiosContext = {
  reqLog: undefined,
  resLog: undefined,
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
  const [reqLog, setReqLog] = useState<string | undefined>(undefined);
  const [resLog, setResLog] = useState<string | undefined>(undefined);
  let count = 0;

  const getReqLog = (config: AxiosRequestConfig) => {
    return `Request\nmethod = ${config.method}\nurl = ${config.url}`;
  };

  const getResLog = (response: AxiosResponse) => {
    return `Response\ndata = ${JSON.stringify(response.data)}\nstatus = ${response.status}`;
  };

  const reqInterceptor = () => {
    return axios.interceptors.request.use(
      (config: AxiosRequestConfig) => {
        console.log(JSON.stringify(config));
        setReqLog(getReqLog(config));
        return config;
      },
      (error: any) => {
        setReqLog(JSON.stringify(error));
        return error;
      },
    );
  };

  const resInterceptor = () => {
    return axios.interceptors.response.use(
      (response: AxiosResponse) => {
        console.log(JSON.stringify(response));
        setResLog(getResLog(response));
        return response;
      },
      (error: any) => {
        setResLog(JSON.stringify(error));
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
