import {PLAYER_ACTIONS} from '../store/actions/types';

export interface Player {
  id: number;
  name: string;
  age: number;
  number: number;
  position: string;
  photo: string;
}

export interface PlayersResponse {
  players: Player[];
}

export interface PlayerState {
  players: Player[];
}

type Keys = keyof typeof PLAYER_ACTIONS;
type Values = typeof PLAYER_ACTIONS[Keys];

export type PlayerAction = {
  type: Values;
  payload: any;
};
