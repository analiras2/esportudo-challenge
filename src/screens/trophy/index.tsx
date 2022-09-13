import React from 'react';
import {FlatList} from 'react-native';
import {RootStackScreenProps, Routes} from '../../@types/routes';
import {BaseContainer, Loading, Typography} from '../../components';
import {moderateScale, strings} from '../../res';
import useFetch, {FetchTypes} from '../../services/useFetch';
import {useStore} from '../../store/context';
import * as St from './styles';

const TrophiesScreen = ({
  navigation,
}: RootStackScreenProps<Routes.Trophies>) => {
  const {playersState} = useStore();
  const [isLoading, errorData] = useFetch(FetchTypes.GET_TROPHIES, {
    playerId: playersState.current?.id,
  });

  return (
    <BaseContainer
      title={playersState.current?.name || strings.trophy.title}
      onBackPress={navigation.goBack}>
      {isLoading ? (
        <Loading />
      ) : (
        <FlatList
          data={playersState.current?.trophies}
          ListHeaderComponent={() => (
            <Typography
              fontWeight="500"
              size={20}
              style={{marginVertical: moderateScale(16)}}>
              {strings.trophy.title}
            </Typography>
          )}
          keyExtractor={(item, index) => `${item.season}${index}`}
          ListEmptyComponent={() => (
            <Typography>Nenhum dado encontrado</Typography>
          )}
          renderItem={({item}) => (
            <St.Container>
              <Typography
                fontWeight="500"
                style={{marginBottom: moderateScale(4)}}>
                {item.league}
              </Typography>
              <Typography size={10}>
                {`${item.country}•${item.season}•${item.place}`}
              </Typography>
            </St.Container>
          )}
        />
      )}
    </BaseContainer>
  );
};

export default TrophiesScreen;
