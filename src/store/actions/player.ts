import {Player} from '../../@types/player';
import {PLAYER_ACTIONS} from './types';

export const setPlayers = (data: Player[]) => {
  return {
    type: PLAYER_ACTIONS.SET_PLAYER,
    payload: data,
  };
};
