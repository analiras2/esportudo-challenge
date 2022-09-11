import {useState, useEffect} from 'react';
import axios, {AxiosError} from 'axios';
import LEAGUE_MOCK from './leagues.mock.json';
import PLAYERS_MOCK from './players.mock.json';
import STANDINGS_MOCK from './standings.mock.json';
import TEAMS_MOCK from './teams.mock.json';
import TROPHIES_MOCK from './trophies.mock.json';

export enum MOCK_TYPE {
  LEAGUE,
  PLAYERS,
  STANDINGS,
  TEAMS,
  TROPHIES,
}

interface Params {
  method: string;
  url: string;
  params: {};
  mockType: MOCK_TYPE;
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
      // const result = await axios.request(params);
      // setResponse(result.data.response as T);
      let currentMock = LEAGUE_MOCK;
      switch (params.mockType) {
        case MOCK_TYPE.PLAYERS:
          currentMock = PLAYERS_MOCK;
          break;
        case MOCK_TYPE.STANDINGS:
          currentMock = STANDINGS_MOCK;
          break;
        case MOCK_TYPE.TEAMS:
          currentMock = TEAMS_MOCK;
          break;
        case MOCK_TYPE.TROPHIES:
          currentMock = TROPHIES_MOCK;
          break;
      }
      setResponse(currentMock.response as T);
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
