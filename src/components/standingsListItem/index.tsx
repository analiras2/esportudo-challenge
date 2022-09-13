import React from 'react';
import {Standings} from '../../@types/standings';
import {strings} from '../../res';
import TwoLinesInfo from '../twoLinesInfo';
import Typography from '../typography';
import * as St from './styles';

interface Props {
  data: Standings;
  onPress: () => void;
}

const StandingsListItem: React.FC<Props> = ({data, onPress}): JSX.Element => (
  <St.Container onPress={onPress}>
    <St.Header>
      <Typography size={20} fontWeight="400">
        {`#${data.rank}`}
      </Typography>
      <Typography size={20} fontWeight="400" center>
        {data.team.name}
      </Typography>
      <St.Flag source={{uri: data.team?.logo}} resizeMode="contain" />
    </St.Header>
    <St.MatchesRow>
      <Typography>
        {`${data.all.played} ${strings.standings.played}`}
      </Typography>
      <Typography>{`${data.points} ${strings.standings.points}`}</Typography>
    </St.MatchesRow>
    <St.InfoRow>
      <TwoLinesInfo title="Win" data={data.all.win} />
      <TwoLinesInfo title="Draw" data={data.all.draw} />
      <TwoLinesInfo title="Lose" data={data.all.lose} />
    </St.InfoRow>
  </St.Container>
);

export default StandingsListItem;
