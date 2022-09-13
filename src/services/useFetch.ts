import {AxiosError} from 'axios';
import {useEffect, useState} from 'react';
import {useStore} from '../store/context';
import {getLeagues} from './league';
import {getPlayers} from './player';
import {getStandings} from './standings';
import {getTeam} from './team';
import {getTrophies} from './trophy';

export enum FetchTypes {
  GET_LEAGUES,
  GET_STANDINGS,
  GET_PLAYERS,
  GET_TEAM,
  GET_TROPHIES,
}

interface Error {
  error: boolean;
  code?: string;
  message?: string;
}

const useFetch = (type: FetchTypes, payload?: any): [boolean, Error] => {
  const [isLoading, setLoading] = useState(false);
  const [errorData, setErrorData] = useState<Error>({error: false});

  const {
    setLeagues,
    setCurrent,
    setTeam,
    setPlayers,
    setCurrentPlayer,
    playersState,
  } = useStore();

  const handleLeagues = async () => {
    try {
      const {data} = await getLeagues();

      setLeagues(data.response);
    } catch (error) {
      console.log('ERROR - getLeagues', error);
      const mError = error as AxiosError;
      setErrorData({
        error: true,
        code: mError.code,
        message: mError.message,
      });
    }
  };

  const handleStandings = async (season: string, league: string) => {
    try {
      const {data} = await getStandings(season, league);

      setCurrent(data.response[0].league);
    } catch (error) {
      console.log('ERROR - getStandings', error);
      const mError = error as AxiosError;

      setErrorData({
        error: true,
        code: mError.code,
        message: mError.message,
      });
    }
  };

  const handleTeam = async (teamId: string) => {
    try {
      const {data} = await getTeam(teamId);

      setTeam(data.response[0].team);
    } catch (error) {
      console.log('ERROR - getTeam', error);
      const mError = error as AxiosError;

      setErrorData({
        error: true,
        code: mError.code,
        message: mError.message,
      });
    }
  };

  const handlePlayers = async (teamId: string) => {
    try {
      const {data} = await getPlayers(teamId);

      setPlayers(data.response[0].players);
    } catch (error) {
      console.log('ERROR - getPlayers', error);
      const mError = error as AxiosError;

      setErrorData({
        error: true,
        code: mError.code,
        message: mError.message,
      });
    }
  };

  const handleTrophies = async (playerId: string) => {
    try {
      const {data} = await getTrophies(playerId);

      const player = playersState.current;
      if (player) {
        player.trophies = data.response;
        setCurrentPlayer(player);
      }
    } catch (error) {
      console.log('ERROR - getPlayers', error);
      const mError = error as AxiosError;

      setErrorData({
        error: true,
        code: mError.code,
        message: mError.message,
      });
    }
  };

  useEffect(() => {
    setLoading(true);
    (async () => {
      switch (type) {
        case FetchTypes.GET_LEAGUES:
          await handleLeagues();
          break;
        case FetchTypes.GET_STANDINGS:
          if (payload?.season && payload?.league) {
            await handleStandings(payload?.season, payload?.league);
          }
          break;
        case FetchTypes.GET_TEAM:
          if (payload?.teamId) {
            await handleTeam(payload?.teamId);
          }
          break;
        case FetchTypes.GET_PLAYERS:
          if (payload?.teamId) {
            await handlePlayers(payload?.teamId);
          }
          break;
        case FetchTypes.GET_TROPHIES:
          if (payload?.playerId) {
            await handleTrophies(payload?.playerId);
          }
          break;
      }
      setLoading(false);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    type,
    payload?.season,
    payload?.league,
    payload?.teamId,
    payload?.playerId,
  ]);

  return [isLoading, errorData];
};

export default useFetch;
