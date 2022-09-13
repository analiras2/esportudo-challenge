import {DataResponse} from '../@types';
import {TeamResponse} from '../@types/team';
import api from './api';

export const getTeam = (id: string) =>
  api.get<DataResponse<TeamResponse>>('/teams', {
    params: {id},
  });
