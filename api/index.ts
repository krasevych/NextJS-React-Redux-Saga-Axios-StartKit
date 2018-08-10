import bindFor from './helpers/bindFor';
import createRequest from './helpers/createRequest';
import * as auth from './modules/auth';
import { ApiConfig } from './types';

function genApi({ baseURL, token }: ApiConfig) {
  const { request, axiosInstance } = createRequest({ baseURL });
  const bind = bindFor(request);

  if (token) {
    axiosInstance.defaults.headers['Animatron-Security-Token'] = token;
  }

  return {
    auth: bind(auth)
  };
}

let instanceApi: ReturnType<typeof genApi>;
export default function api(config?: ApiConfig) {
  if ((!instanceApi && config) || config) {
    instanceApi = genApi(config);
  }

  return instanceApi;
}
