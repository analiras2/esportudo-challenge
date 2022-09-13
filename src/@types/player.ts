import {PLAYER_ACTIONS} from '../store/actions/types';
import {Trophy} from './thophy';

export interface Player {
  id: number;
  name: string;
  age: number;
  number: number;
  position: string;
  photo: string;
  trophies?: Trophy[];
}

export interface PlayersResponse {
  players: Player[];
}

export interface PlayerState {
  players: Player[];
  current?: Player;
}

type Keys = keyof typeof PLAYER_ACTIONS;
type Values = typeof PLAYER_ACTIONS[Keys];

export type PlayerAction = {
  type: Values;
  payload: any;
};
