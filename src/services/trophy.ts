import {DataResponse} from '../@types';
import {Trophy} from '../@types/thophy';
import api from './api';

export const getTrophies = (player: string) =>
  api.get<DataResponse<Trophy>>('/trophies', {
    params: {player},
  });
