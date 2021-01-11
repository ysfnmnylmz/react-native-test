import axios from 'axios';
import UtilityFunctions from './UtilityFunctions';

const BASE_URL = 'http://85.95.240.192/api/';

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 35000,
});

axiosInstance.defaults.headers.common['Content-Type'] = 'application/json';

axiosInstance.interceptors.request.use(
  (config) => {
    UtilityFunctions.consoleFunc('REQUEST', '#FFAA00', config);
    // const {token} = store.getState().loginReducer;
    // if (token !== '' && token !== null && config != null) {
    //   config.headers.Authorization = `Token ${token}`;
    // }
    return config;
  },
  (err) => Promise.reject(err),
);

axiosInstance.interceptors.response.use(
  (response) => {
    // UtilityFunctions.consoleFunc('RESPONSE', '#59FF00 ', response);
    return response;
  },
  (error) => {
    // UtilityFunctions.consoleFunc(
    //   'RESPONSE_ERROR',
    //   '#E50808',
    //   error.response ? error.response : error,
    // );
    return Promise.reject(error);
  },
);

export default axiosInstance;
