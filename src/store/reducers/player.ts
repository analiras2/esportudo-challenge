import {PlayerAction, PlayerState} from '../../@types/player';
import {PLAYER_ACTIONS} from '../actions/types';

export const initialState = {
  players: [],
  current: {},
};

export const PlayerReducer = (state: PlayerState, action: PlayerAction) => {
  const {type, payload} = action;

  switch (type) {
    case PLAYER_ACTIONS.SET_PLAYER:
      return {
        players: payload,
      };

    case PLAYER_ACTIONS.SET_CURRENT_PLAYER:
      return {
        ...state,
        current: payload,
      };

    default:
      return state;
  }
};
