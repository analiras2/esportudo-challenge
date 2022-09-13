import {League} from './league';
import {Team} from './team';

export interface Standings extends League {
  rank: number;
  team: Team;
  points: number;
  all: {
    played: number;
    win: number;
    draw: number;
    lose: number;
  };
}

export interface LeagueStandings extends League {
  country: string;
  flag: string;
  season: number;
  standings: Standings[][];
}

export interface StandingsResponse {
  league: LeagueStandings;
}
