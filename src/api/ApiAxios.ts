import axios from 'axios';

export enum Method {
  GET = 'get',
  POST = 'post',
  PATCH = 'patch',
  PUT = 'put',
  DELETE = 'delete',
}

export enum ResponseType {
  ARRAYBUFFER = 'arraybuffer',
  BLOB = 'blob',
  DOCUMENT = 'document',
  JSON = 'json',
  TEXT = 'text',
  STREAM = 'stream',
}

interface IReqObject {
  url: string;
  method: Method;
  headers?: Record<string, string>;
  params?: any;
  signal?: AbortSignal;
  responseType?: ResponseType;
}
// const HOST_URL = 'https://~~~~~~.com';//My host url
const TIME_OUT: number = 2500;

export const RequestApi = async (req: IReqObject): Promise<IResponse> => {
  //   req.url = urlHome + '/api' + req.url;

  const opt: RequestInit = {
    method: req.method ? req.method : Method.GET,
    credentials: 'include',
  };

  const replacer = (_key: string, value: string) => (typeof value === 'undefined' ? null : value);

  if (req.params) {
    if (Object.prototype.toString.call(req.params) === '[object FormData]' || req.params instanceof FormData) {
      opt.body = req.params;
    } else {
      opt.headers = { 'Content-Type': 'application/json' };
      opt.body = JSON.stringify(req.params, replacer);
    }
  }

  if (req.headers) {
    opt.headers = { ...opt.headers, ...req.headers };
  }

  if (req.signal) {
    opt.signal = req.signal;
  }

  return await axios({
    headers: opt.headers,
    method: req.method,
    url: req.url,
    // responseType: ResponseType.JSON,
    data: opt.body,
    timeout: TIME_OUT,
  })
    .then((res) => {
      return {
        ok: true,
        status: res.status,
        statusText: res.statusText,
        result: res.data,
      };
    })
    .catch((error) => {
      let result = {
        ok: false,
        status: 404,
        statusText: '',
        result: '',
      };
      if (error.response) {
        result.status = error.response.status ? error.response.status : 'error';
        result.statusText = error.response.statusText ? error.response.statusText : 'error';
        result.result = error.response.data ? error.response.data : '';
      }

      return result;
    });
};
