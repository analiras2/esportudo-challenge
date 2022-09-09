import {useState, useEffect} from 'react';
import axios, {AxiosError} from 'axios';

interface Params {
  method: string;
  url: string;
}

axios.defaults.baseURL = 'https://api-football-v1.p.rapidapi.com/v3';
axios.defaults.headers.head = {
  'X-RapidAPI-Key': process.env.REACT_APP_RAPIDAPI_API_KEY as string,
  'X-RapidAPI-Host': process.env.REACT_APP_RAPIDAPI_API_HOST as string,
};

export const useAxios = <T>(axiosParams: Params) => {
  const [response, setResponse] = useState<T>();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  const fetchData = async (params: Params) => {
    try {
      const result = await axios.request(params);
      setResponse(result.data.response as T);
    } catch (e) {
      const err = e as AxiosError;
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(axiosParams);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {response, error, loading};
};
