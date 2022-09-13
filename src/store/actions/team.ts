import {Team} from '../../@types/team';
import {TEAM_ACTIONS} from './types';

export const setLeagues = (data: Team) => {
  return {
    type: TEAM_ACTIONS.SET_TEAM,
    payload: data,
  };
};
