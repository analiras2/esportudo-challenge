import {LeagueAction, LeagueState} from '../../@types/league';
import {LEAGUE_ACTIONS} from '../actions/types';

export const initialState = {
  leagues: [],
  current: {},
};

export const LeagueReducer = (state: LeagueState, action: LeagueAction) => {
  const {type, payload} = action;

  switch (type) {
    case LEAGUE_ACTIONS.SET_LEAGUES:
      return {
        leagues: payload,
      };
    case LEAGUE_ACTIONS.SET_CURRENT_LEAGUE:
      return {
        ...state,
        current: payload,
      };
    default:
      return state;
  }
};
