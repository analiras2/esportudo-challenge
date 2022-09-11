import React from 'react';
import {FlatList} from 'react-native';
import {LeagueResponse} from '../../@types/league';
import {RootStackScreenProps, Routes} from '../../@types/routes';
import {BaseContainer, LeagueListItem, Loading} from '../../components';
import {MOCK_TYPE, useAxios} from '../../services/useAxios';

const LeagueScreen = ({navigation}: RootStackScreenProps<Routes.Leagues>) => {
  const {response, loading, error} = useAxios<LeagueResponse[]>({
    method: 'GET',
    url: '/leagues',
    params: {type: 'league'},
    mockType: MOCK_TYPE.LEAGUE,
  });

  return (
    <BaseContainer title="Leagues" paddingVertical={false}>
      <Loading isLoading={loading}>
        <FlatList
          data={response}
          numColumns={3}
          keyExtractor={item => item.league.id.toString()}
          renderItem={({item}) => (
            <LeagueListItem
              data={item.league}
              onPress={() => navigation.navigate(Routes.Standings)}
            />
          )}
        />
      </Loading>
    </BaseContainer>
  );
};

export default LeagueScreen;
