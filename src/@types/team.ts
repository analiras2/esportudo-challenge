export interface Team {
  id: number;
  name: string;
  country: string;
  founded: number;
  logo: string;
}

export interface TeamResponse {
  team: Team;
}
