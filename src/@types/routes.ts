import type {NativeStackScreenProps} from '@react-navigation/native-stack';

export enum Routes {
  Leagues = 'Leagues',
  Standings = 'Standings',
  Teams = 'Teams',
  Players = 'Players',
  Trophies = 'Trophies',
}

export type RootStackParamList = {
  Leagues: undefined;
  Standings: undefined;
  Teams: undefined;
  Players: undefined;
  Trophies: undefined;
};

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;
