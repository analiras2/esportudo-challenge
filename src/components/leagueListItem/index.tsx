import React from 'react';
import {scale} from '../../res';
import Typography from '../typography';
import * as St from './styles';

export const FontType = {
  SCREEN_TITLE: {fontSize: scale(24), fontWeight: '400'},
  DEFAULT: {fontSize: scale(14)},
};

interface Props {
  data: {name: string; logo: string};
  onPress: () => void;
}

const LeagueListItem: React.FC<Props> = ({data, onPress}): JSX.Element => (
  <St.Container onPress={onPress}>
    <St.Logo source={{uri: data.logo}} />
    <Typography>{data.name}</Typography>
  </St.Container>
);

export default LeagueListItem;
