import React from 'react';
import Lottie from 'lottie-react-native';
import string from '../../res/strings';
import {FlatList, View} from 'react-native';
import {BaseContainer, LeagueListItem} from '../../components';
import {League} from '../../@types/league';

const MOCK = [
  {
    id: 30,
    name: 'Premier',
    type: 'League',
    logo: 'https://media.api-sports.io/football/leagues/2.png',
  },
  {
    id: 19,
    name: 'League',
    type: 'League',
    logo: 'https://media.api-sports.io/football/leagues/2.png',
  },
  {
    id: 31,
    name: 'La Liga',
    type: 'League',
    logo: 'https://media.api-sports.io/football/leagues/2.png',
  },
  {
    id: 39,
    name: 'Premier League',
    type: 'League',
    logo: 'https://media.api-sports.io/football/leagues/2.png',
  },
];

const LeagueScreen = () => {
  return (
    <BaseContainer title="Leagues">
      <FlatList
        data={MOCK}
        numColumns={3}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <LeagueListItem data={item} onPress={() => {}} />
        )}
      />
    </BaseContainer>
  );
};

export default LeagueScreen;
