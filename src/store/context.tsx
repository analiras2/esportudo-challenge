import React, {createContext, useContext, useReducer} from 'react';
import {LeagueResponse, LeagueStandings, LeagueState} from '../@types/league';
import {Player, PlayerState} from '../@types/player';
import {Team, TeamState} from '../@types/team';
import * as LEAGUE_ACTIONS from './actions/league';
import * as PLAYER_ACTIONS from './actions/player';
import * as TEAM_ACTIONS from './actions/team';
import * as LeagueReducer from './reducers/league';
import * as PlayerReducer from './reducers/player';
import * as TeamReducer from './reducers/team';

type StoreProps = {
  leagueState: LeagueState;
  setLeagues: (data: LeagueResponse[]) => void;
  setCurrent: (data: LeagueStandings) => void;
  teamState: TeamState;
  setTeam: (data: Team) => void;
  playersState: PlayerState;
  setPlayers: (data: Player[]) => void;
};

type StoreProviderProps = {
  children: JSX.Element;
};

const StoreContext = createContext<StoreProps>({
  leagueState: {leagues: [], current: undefined},
  setLeagues: () => {},
  setCurrent: () => {},
  teamState: {
    team: {
      id: 0,
      name: '',
      country: '',
      founded: 0,
      logo: '',
    },
  },
  setTeam: () => {},
  playersState: {players: []},
  setPlayers: () => {},
});

const StoreProvider = ({children}: StoreProviderProps): JSX.Element => {
  const [stateLeagueReducer, dispatchLeagueReducer] = useReducer(
    LeagueReducer.LeagueReducer,
    LeagueReducer.initialState,
  );

  const [stateTeamReducer, dispatchTeamReducer] = useReducer(
    TeamReducer.TeamReducer,
    TeamReducer.initialState,
  );

  const [statePlayerReducer, dispatchPlayerReducer] = useReducer(
    PlayerReducer.PlayerReducer,
    PlayerReducer.initialState,
  );

  const handleSetLeagues = (data: LeagueResponse[]) => {
    dispatchLeagueReducer(LEAGUE_ACTIONS.setLeagues(data));
  };

  const handleSetCurrent = (data: LeagueStandings) => {
    dispatchLeagueReducer(LEAGUE_ACTIONS.setCurrent(data));
  };

  const handleSetTeam = (data: Team) => {
    dispatchTeamReducer(TEAM_ACTIONS.setLeagues(data));
  };

  const handleSetPlayer = (data: Player[]) => {
    dispatchPlayerReducer(PLAYER_ACTIONS.setPlayers(data));
  };

  return (
    <StoreContext.Provider
      value={{
        leagueState: stateLeagueReducer,
        setLeagues: (data: LeagueResponse[]) => handleSetLeagues(data),
        setCurrent: (data: LeagueStandings) => handleSetCurrent(data),
        teamState: stateTeamReducer,
        setTeam: (data: Team) => handleSetTeam(data),
        playersState: statePlayerReducer,
        setPlayers: (data: Player[]) => handleSetPlayer(data),
      }}>
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error('useStore must be used within a StoreProvider');
  }

  return context;
};

export default StoreProvider;
