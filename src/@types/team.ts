import {TEAM_ACTIONS} from '../store/actions/types';

export interface Team {
  id: number;
  name: string;
  country: string;
  founded: number;
  logo: string;
}

export interface TeamResponse {
  team: Team;
}

export interface TeamState {
  team: Team;
}

type Keys = keyof typeof TEAM_ACTIONS;
type Values = typeof TEAM_ACTIONS[Keys];

export type TeamAction = {
  type: Values;
  payload: any;
};
