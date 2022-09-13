import React from 'react';
import {FlatList} from 'react-native';
import {RootStackScreenProps, Routes} from '../../@types/routes';
import {BaseContainer, LeagueListItem, Loading} from '../../components';
import useFetch, {FetchTypes} from '../../services/useFetch';
import {useStore} from '../../store/context';

const LeagueScreen = ({navigation}: RootStackScreenProps<Routes.Leagues>) => {
  const {leagueState} = useStore();
  const [isLoading, errorData] = useFetch(FetchTypes.GET_LEAGUES);

  return (
    <BaseContainer title="Leagues">
      {isLoading ? (
        <Loading />
      ) : (
        <FlatList
          data={leagueState.leagues}
          numColumns={3}
          keyExtractor={item => item.league.id.toString()}
          renderItem={({item}) => (
            <LeagueListItem
              data={item.league}
              onPress={() =>
                navigation.navigate(Routes.Standings, {
                  league: {id: item.league.id, name: item.league.name},
                })
              }
            />
          )}
        />
      )}
    </BaseContainer>
  );
};

export default LeagueScreen;
