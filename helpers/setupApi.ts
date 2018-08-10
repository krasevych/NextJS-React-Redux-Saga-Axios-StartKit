import api from '../api';
import config from '../config';

const setupApi = () => {
  api({
    baseURL: config.apiUrl
  });
};

export default setupApi;
