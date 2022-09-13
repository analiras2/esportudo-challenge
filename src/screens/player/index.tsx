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
import {moderateScale, strings} from '../../res';
import useFetch, {FetchTypes} from '../../services/useFetch';
import {useStore} from '../../store/context';

const PlayersScreen = ({navigation}: RootStackScreenProps<Routes.Players>) => {
  const {teamState, playersState, setCurrentPlayer} = useStore();

  const [isLoading, errorData] = useFetch(FetchTypes.GET_PLAYERS, {
    teamId: teamState.team.id,
  });

  const [modalVisible, setModalVisible] = useState(false);

  return (
    <BaseContainer
      title={teamState.team.name}
      onBackPress={navigation.goBack}
      modalVisible={modalVisible}
      setModalVisible={setModalVisible}
      modalChildren={
        <PlayerModalChildren
          onPress={() => {
            setModalVisible(!modalVisible);
            navigation.navigate(Routes.Trophies);
          }}
        />
      }>
      {isLoading ? (
        <Loading />
      ) : (
        <FlatList
          data={playersState.players}
          ListHeaderComponent={() => (
            <Typography
              fontWeight="500"
              size={20}
              style={{marginVertical: moderateScale(16)}}>
              {strings.player.title}
            </Typography>
          )}
          numColumns={2}
          keyExtractor={item => item.id.toString()}
          ListEmptyComponent={() => (
            <Typography>Nenhum dado encontrado</Typography>
          )}
          renderItem={({item}) => (
            <PlayerListItem
              data={item}
              onPress={() => {
                setCurrentPlayer(item);
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
