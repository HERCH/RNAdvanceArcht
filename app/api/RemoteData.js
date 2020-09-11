// General api to access data
import ApiConstants from './ApiConstants';
import Axios, { AxiosResponse } from 'axios';
import OAuth from 'oauth-1.0a';
import CryptoJS from 'crypto-js/hmac-sha1';

const client = Axios.create({
  baseURL: ApiConstants.BASE_URL_SECURE,
});

const _getOAuth = (): OAuth =>
  new OAuth({
    consumer: {
      key: ApiConstants.KEY,
      secret: ApiConstants.SECRET,
    },
    signature_method: 'HMAC-SHA1',
    hash_function: (baseString: string, key: string) =>
      CryptoJS.enc.Base64.stringify(CryptoJS.HmacSHA1(baseString, key)),
  });

const get = async (path: string, params: any): Promise<AxiosResponse> => {
  console.log(JSON.stringify(params) + '\n\n\n\n---------' + ' >>>>> ');
  const url = `${ApiConstants.BASE_URL_SECURE}${path}`;
  return client.get(url, { params: params });
};

const post = async (path: string, body: any): Promise<AxiosResponse> => {
  const request = {
    url: `${ApiConstants.BASE_URL}${path}`,
    method: 'POST',
  };
  return client.post(request.url, body);
};

export const updateAuthHeader = (token) => {
  client.defaults.headers.common = {
    Authorization: 'Bearer ' + token,
  };
  return token;
};

export default {
  get,
  post,
};
