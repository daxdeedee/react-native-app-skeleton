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
  const [reqLog, setReqLog] = useState<Array<string>>([]);
  const [resLog, setResLog] = useState<Array<string>>([]);

  const getReqLog = (config: AxiosRequestConfig, isError: boolean = false) => {
    return `${isError && 'Error! - '}Request\nmethod = ${config.method}\nurl = ${config.url}`;
  };

  const getResLog = (response: AxiosResponse, isError: boolean = false) => {
    return `${isError && 'Error! - '}Response\ndata = ${JSON.stringify(response.data)}\nstatus = ${response.status}`;
  };

  const reqInterceptor = () => {
    return axios.interceptors.request.use(
      (config: AxiosRequestConfig) => {
        setReqLog((log) => [...log, getReqLog(config)]);
        return config;
      },
      (error: any) => {
        setReqLog((log) => [...log, getReqLog(error, true)]);
        return error;
      },
    );
  };

  const resInterceptor = () => {
    return axios.interceptors.response.use(
      (response: AxiosResponse) => {
        setResLog((log) => [...log, getResLog(response)]);
        return response;
      },
      (error: any) => {
        setResLog((log) => [...log, getResLog(error, true)]);
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
