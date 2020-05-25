// import store from "../store";
import axios from "axios";
// import {asyncLocalStorage} from '../lib/helpers';

const BASE_URL ='https://api.footystats.org/';
const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 20000
});


axiosInstance.defaults.headers.common["Content-Type"] = "application/json";

// async function injectToken(config, token) {
//   if (config.noAuth) {
//     delete config.headers['Authorization'];
//     return config;
//   }

//   if (!token) {
//     token = store.getState().loginReducer.token;
//     if (!token)
//       token = store.getState().token;

//     if (!token)
//       token = await asyncLocalStorage.getItem('token');
//   }

//   if (token) {
//     config.headers.Authorization = `Token ${token}`;
//     axios.defaults.headers.common['Authorization'] = `Token ${token}`;
//   }
//   return config;

// }

axiosInstance.interceptors.request.use(
  async config => {
    console.log("REQUEST : ", config);
    // return await injectToken(config);
  },
  err => Promise.reject(err)
);

axiosInstance.interceptors.response.use(
  response => {
    console.log("RESPONSE : ", response.data);
    return response.data;
  },
  error => {
    if (!error.response) {
      console.log('NETWORK ERROR');
    }
    console.log("response error: ", error.response ? error.response : error);
    return Promise.reject(error);
  }
);

export default axiosInstance;
