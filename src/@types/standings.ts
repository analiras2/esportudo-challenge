import {LeagueStandings} from './league';
import {Team} from './team';

export interface Standings {
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

export interface StandingsResponse {
  league: LeagueStandings;
}
