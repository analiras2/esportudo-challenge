/* eslint-disable class-methods-use-this */
import axios, {AxiosResponse, AxiosError} from 'axios';

const api = axios.create({
  baseURL: 'https://api-football-v1.p.rapidapi.com/v3',
  timeout: 30000,
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPIDAPI_API_KEY as string,
    'X-RapidAPI-Host': process.env.REACT_APP_RAPIDAPI_API_HOST as string,
  },
});

api.interceptors.response.use(
  (response: AxiosResponse) => {
    console.log('Response success ->', response);
    return response;
  },
  (error: AxiosError) => {
    console.log('Response error ->', error);
    return Promise.reject(error);
  },
);

export default api;
