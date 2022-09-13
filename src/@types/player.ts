import {Team} from './team';

export interface Player {
  id: number;
  name: string;
  age: number;
  number: number;
  position: string;
  photo: string;
}

export interface PlayersResponse {
  team: Team;
  players: Player[];
}
