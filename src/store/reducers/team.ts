import {TeamAction, TeamState} from '../../@types/team';
import {TEAM_ACTIONS} from '../actions/types';

export const initialState = {
  team: {},
};

export const TeamReducer = (state: TeamState, action: TeamAction) => {
  const {type, payload} = action;

  switch (type) {
    case TEAM_ACTIONS.SET_TEAM:
      return {
        team: payload,
      };

    default:
      return state;
  }
};
