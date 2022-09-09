import React from 'react';
import {FlatList} from 'react-native';
import {LeagueResponse} from '../../@types/league';
import {BaseContainer, LeagueListItem, Loading} from '../../components';
import {useAxios} from '../../services/useAxios';

const LeagueScreen = () => {
  const {response, loading, error} = useAxios<LeagueResponse[]>({
    method: 'GET',
    url: '/leagues',
  });

  return (
    <BaseContainer title="Leagues" paddingVertical={false}>
      <Loading isLoading={loading}>
        <FlatList
          data={response}
          numColumns={3}
          keyExtractor={item => item.league.id.toString()}
          renderItem={({item}) => (
            <LeagueListItem data={item.league} onPress={() => {}} />
          )}
        />
      </Loading>
    </BaseContainer>
  );
};

export default LeagueScreen;
