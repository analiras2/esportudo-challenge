import React, {useState} from 'react';
import {FlatList} from 'react-native';
import {RootStackScreenProps, Routes} from '../../@types/routes';
import {
  BaseContainer,
  Loading,
  PlayerListItem,
  PlayerModalChildren,
  Typography,
} from '../../components';
import {strings} from '../../res';
import useFetch, {FetchTypes} from '../../services/useFetch';
import {useStore} from '../../store/context';

const PlayersScreen = ({navigation}: RootStackScreenProps<Routes.Players>) => {
  const {teamState, playersState} = useStore();

  const [isLoading, errorData] = useFetch(FetchTypes.GET_PLAYERS, {
    teamId: teamState.team.id,
  });

  const [modalVisible, setModalVisible] = useState(false);
  const [currentPlayer, setCurrentPlayer] = useState(0);

  return (
    <BaseContainer
      title="Trocar"
      onBackPress={navigation.goBack}
      modalVisible={modalVisible}
      setModalVisible={setModalVisible}
      modalChildren={
        <PlayerModalChildren
          playerIndex={currentPlayer}
          onPress={() => {
            setModalVisible(!modalVisible);
            // navigation.navigate(Routes.Trophies);
          }}
        />
      }>
      <Typography fontWeight="500" size={20}>
        {strings.player.title}
      </Typography>
      {isLoading ? (
        <Loading />
      ) : (
        <FlatList
          data={playersState.players}
          contentContainerStyle={{marginTop: 20}}
          numColumns={2}
          keyExtractor={item => item.id.toString()}
          ListEmptyComponent={() => (
            <Typography>Nenhum dado encontrado</Typography>
          )}
          renderItem={({item, index}) => (
            <PlayerListItem
              data={item}
              onPress={() => {
                setCurrentPlayer(index);
                setModalVisible(true);
              }}
            />
          )}
        />
      )}
    </BaseContainer>
  );
};

export default PlayersScreen;
