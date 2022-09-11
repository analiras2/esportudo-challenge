import React from 'react';
import {FlatList} from 'react-native';
import {RootStackScreenProps, Routes} from '../../@types/routes';
import {StandingsResponse} from '../../@types/standings';
import {
  BaseContainer,
  StandingsListItem,
  Loading,
  Typography,
} from '../../components';
import {moderateScale, scale} from '../../res';
import {MOCK_TYPE, useAxios} from '../../services/useAxios';
import * as St from './styles';

const StandingsScreen = ({
  navigation,
}: RootStackScreenProps<Routes.Standings>) => {
  const {response, loading, error} = useAxios<StandingsResponse[]>({
    method: 'GET',
    url: '/leagues',
    params: {type: 'league'},
    mockType: MOCK_TYPE.STANDINGS,
  });

  console.log('response', response && response[0]);

  return (
    <BaseContainer
      title="Standings"
      onBackPress={navigation.goBack}
      paddingVertical={false}>
      <Loading isLoading={loading}>
        {response && (
          <>
            <St.SeasonsInfo>
              <Typography fontWeight="500" style={{width: moderateScale(79)}}>
                {response[0].league.season}
              </Typography>

              <St.DataContainer>
                <Typography fontWeight="500" size={scale(12)}>
                  10/12/2010
                </Typography>
                <Typography fontWeight="500" size={scale(12)}>
                  10/12/2011
                </Typography>
              </St.DataContainer>
              <St.Flag
                alignItems="flex-end"
                source={{uri: response[0].league.flag}}
                resizeMode="contain"
              />
            </St.SeasonsInfo>
            <FlatList
              data={response[0].league.standings[0]}
              numColumns={3}
              keyExtractor={item => item.team.id.toString()}
              renderItem={({item}) => (
                <StandingsListItem data={item} onPress={() => {}} />
              )}
            />
          </>
        )}
      </Loading>
    </BaseContainer>
  );
};

export default StandingsScreen;
