import {Player} from '../../@types/player';
import {PLAYER_ACTIONS} from './types';

export const setPlayers = (data: Player[]) => {
  return {
    type: PLAYER_ACTIONS.SET_PLAYER,
    payload: data,
  };
};

export const setCurrent = (data: Player) => {
  return {
    type: PLAYER_ACTIONS.SET_CURRENT_PLAYER,
    payload: data,
  };
};
