import {DataResponse} from '../@types';
import {LeagueResponse} from '../@types/league';
import api from './api';

export const getLeagues = () =>
  api.get<DataResponse<LeagueResponse>>('/leagues');
