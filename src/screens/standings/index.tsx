import React, {useState} from 'react';
import {FlatList} from 'react-native';
import {RootStackScreenProps, Routes} from '../../@types/routes';
import {StandingsResponse} from '../../@types/standings';
import {
  BaseContainer,
  Loading,
  StandingsListItem,
  TeamModalChildren,
  Typography,
} from '../../components';
import {moderateScale} from '../../res';
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

  const [modalVisible, setModalVisible] = useState(false);

  return (
    <BaseContainer
      title="Standings"
      onBackPress={navigation.goBack}
      paddingVertical={false}
      modalVisible={modalVisible}
      setModalVisible={setModalVisible}
      modalChildren={
        <TeamModalChildren
          onPress={() => {
            setModalVisible(!modalVisible);
            navigation.navigate(Routes.Players);
          }}
        />
      }>
      <Loading isLoading={loading}>
        {response && (
          <>
            <St.SeasonsInfo>
              <Typography fontWeight="500" style={{width: moderateScale(79)}}>
                {response[0].league.season}
              </Typography>

              <St.DataContainer>
                <Typography fontWeight="500" size={12}>
                  10/12/2010
                </Typography>
                <Typography fontWeight="500" size={12}>
                  10/12/2011
                </Typography>
              </St.DataContainer>
              <St.Flag uri={response[0].league.flag} />
            </St.SeasonsInfo>
            <FlatList
              data={response[0].league.standings[0]}
              keyExtractor={item => item.team.id.toString()}
              renderItem={({item}) => (
                <StandingsListItem
                  data={item}
                  onPress={() => setModalVisible(true)}
                />
              )}
            />
          </>
        )}
      </Loading>
    </BaseContainer>
  );
};

export default StandingsScreen;
