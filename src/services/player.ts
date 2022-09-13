import {DataResponse} from '../@types';
import {PlayersResponse} from '../@types/player';
import api from './api';

export const getPlayers = (team: string) =>
  api.get<DataResponse<PlayersResponse>>('/players/squads', {
    params: {team},
  });
