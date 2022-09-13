import {LEAGUE_ACTIONS} from '../store/actions/types';
import {Standings} from './standings';

export interface League {
  id: number;
  name: string;
  type: string;
  logo: string;
}

export interface Country {
  name: string;
  code: string;
  flag: string;
}

export interface Season {
  year: number;
  start: string;
  end: string;
}

export interface LeagueStandings extends League {
  country: string;
  flag: string;
  season: number;
  standings: Standings[][];
}

export interface LeagueResponse {
  league: League;
  country: Country;
  seasons: Season[];
}

export interface LeagueState {
  leagues: LeagueResponse[];
  current?: LeagueStandings;
}

type Keys = keyof typeof LEAGUE_ACTIONS;
type Values = typeof LEAGUE_ACTIONS[Keys];

export type LeagueAction = {
  type: Values;
  payload: any;
};
