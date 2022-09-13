import {format} from 'date-fns';
import React, {useState} from 'react';
import {FlatList, StyleSheet} from 'react-native';
import ModalDropdown from 'react-native-modal-dropdown';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Season} from '../../@types/league';
import {RootStackScreenProps, Routes} from '../../@types/routes';
import {
  BaseContainer,
  Loading,
  StandingsListItem,
  TeamModalChildren,
  Typography,
} from '../../components';
import {colors, moderateScale} from '../../res';
import useFetch, {FetchTypes} from '../../services/useFetch';
import {useStore} from '../../store/context';
import * as St from './styles';

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 14,
    fontWeight: '500',
  },
  dropdownTextStyle: {
    fontSize: 12,
    color: colors.TEXT,
    width: moderateScale(62),
    textAlign: 'center',
  },
  dropdownTextHighlightStyle: {
    backgroundColor: colors.TEXT_LIGHT,
  },
});

const StandingsScreen = ({
  navigation,
  route: {
    params: {league},
  },
}: RootStackScreenProps<Routes.Standings>) => {
  const {
    leagueState: {current, leagues},
  } = useStore();

  const [modalVisible, setModalVisible] = useState(false);
  const [currentSeason, setCurrentSeason] = useState<Season>(
    leagues[0].seasons[0],
  );

  const [currentTeam, setCurrentTeam] = useState<number | null>(null);

  const [isLoading, errorData] = useFetch(FetchTypes.GET_STANDINGS, {
    season: currentSeason.year,
    league: league.id,
  });
  const [teamIsLoading, teamErrorData] = useFetch(FetchTypes.GET_TEAM, {
    teamId: currentTeam,
  });

  const seasonYears = leagues[0].seasons.map(season => {
    return season.year.toString();
  });

  return (
    <BaseContainer
      title={league.name}
      onBackPress={navigation.goBack}
      paddingVertical={false}
      modalVisible={modalVisible && !teamIsLoading}
      setModalVisible={setModalVisible}
      modalChildren={
        <TeamModalChildren
          onPress={() => {
            setModalVisible(!modalVisible);
            navigation.navigate(Routes.Players);
          }}
        />
      }>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <St.SeasonsInfo>
            <St.DropdownContainer>
              <ModalDropdown
                defaultValue={currentSeason.year.toString()}
                options={seasonYears}
                textStyle={styles.textStyle}
                dropdownTextStyle={styles.dropdownTextStyle}
                dropdownTextHighlightStyle={styles.dropdownTextHighlightStyle}
                onSelect={index => {
                  setCurrentSeason(leagues[0].seasons[Number(index)]);
                  // TODO request
                }}
              />
              <Icon name="keyboard-arrow-down" size={20} color={colors.ICON} />
            </St.DropdownContainer>
            <St.DataContainer>
              <Typography fontWeight="500" size={12}>
                {format(new Date(currentSeason.start), 'dd/MM/yyy')}
              </Typography>
              <Typography fontWeight="500" size={12}>
                {format(new Date(currentSeason.end), 'dd/MM/yyy')}
              </Typography>
            </St.DataContainer>
            <St.FlagContainer>
              {current?.flag && <St.Flag uri={current.flag} />}
            </St.FlagContainer>
          </St.SeasonsInfo>
          <FlatList
            data={current?.standings[0]}
            keyExtractor={item => item.team.id.toString()}
            ListEmptyComponent={() => (
              <Typography>Nenhum dado encontrado</Typography>
            )}
            renderItem={({item}) => (
              <StandingsListItem
                data={item}
                onPress={() => {
                  setCurrentTeam(item.team.id);
                  setModalVisible(true);
                }}
              />
            )}
          />
        </>
      )}
    </BaseContainer>
  );
};

export default StandingsScreen;
