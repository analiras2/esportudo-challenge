import {LeagueResponse, LeagueStandings} from '../../@types/league';
import {LEAGUE_ACTIONS} from './types';

export const setLeagues = (data: LeagueResponse[]) => {
  return {
    type: LEAGUE_ACTIONS.SET_LEAGUES,
    payload: data,
  };
};

export const setCurrent = (data: LeagueStandings) => {
  return {
    type: LEAGUE_ACTIONS.SET_CURRENT_LEAGUE,
    payload: data,
  };
};
