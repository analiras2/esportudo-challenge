import React from 'react';
import {FlatList} from 'react-native';
import {PlayersResponse} from '../../@types/player';
import {RootStackScreenProps, Routes} from '../../@types/routes';
import {
  BaseContainer,
  Loading,
  PlayerListItem,
  Typography,
} from '../../components';
import {strings} from '../../res';
import {MOCK_TYPE, useAxios} from '../../services/useAxios';

const PlayersScreen = ({navigation}: RootStackScreenProps<Routes.Players>) => {
  const {response, loading, error} = useAxios<PlayersResponse[]>({
    method: 'GET',
    url: '/leagues',
    params: {type: 'league'},
    mockType: MOCK_TYPE.PLAYERS,
  });

  return (
    <BaseContainer title="Trocar" onBackPress={navigation.goBack}>
      <Typography fontWeight="500" size={20}>
        {strings.player.title}
      </Typography>
      <Loading isLoading={loading}>
        {response && (
          <FlatList
            data={response[0].players}
            contentContainerStyle={{marginTop: 20}}
            numColumns={2}
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => (
              <PlayerListItem data={item} onPress={() => {}} />
            )}
          />
        )}
      </Loading>
    </BaseContainer>
  );
};

export default PlayersScreen;
