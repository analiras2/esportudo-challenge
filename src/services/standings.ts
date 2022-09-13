import {DataResponse} from '../@types';
import {StandingsResponse} from '../@types/standings';
import api from './api';

export const getStandings = (season: string, league: string) =>
  api.get<DataResponse<StandingsResponse>>('/standings', {
    params: {season, league},
  });
