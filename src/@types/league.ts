export interface League {
  id: number;
  name: string;
  type: string;
  logo: string;
}

export interface Country {
  name: string;
  code: string;
  flag: string;
}

export interface Seasons {
  year: number;
  start: string;
  end: string;
}

export interface LeagueResponse {
  league: League;
  country: Country;
  seasons: Seasons[];
}
