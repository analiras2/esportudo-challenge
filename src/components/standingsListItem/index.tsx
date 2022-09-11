import React from 'react';
import {Standings} from '../../@types/standings';
import {moderateScale, scale, strings} from '../../res';
import Typography from '../typography';
import * as St from './styles';

interface Props {
  data: Standings;
  onPress: () => void;
}

interface InfoDataProps {
  title: string;
  data: number;
}

const InfoData = ({title, data}: InfoDataProps) => (
  <St.InfoData>
    <Typography size={scale(10)} style={{marginBottom: moderateScale(8)}}>
      {title}
    </Typography>
    <Typography size={scale(16)}>{data}</Typography>
  </St.InfoData>
);

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
      <InfoData title="Win" data={data.all.win} />
      <InfoData title="Draw" data={data.all.draw} />
      <InfoData title="Lose" data={data.all.lose} />
    </St.InfoRow>
  </St.Container>
);

export default StandingsListItem;
