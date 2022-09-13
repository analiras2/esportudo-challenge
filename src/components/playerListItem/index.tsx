import React from 'react';
import {Player} from '../../@types/player';
import Typography from '../typography';
import * as St from './styles';

interface Props {
  data: Player;
  onPress: () => void;
}

const PlayerListItem: React.FC<Props> = ({data, onPress}): JSX.Element => (
  <St.Container onPress={onPress}>
    <St.Photo source={{uri: data.photo}} resizeMode="contain" />
    <Typography size={12} fontWeight="bold">
      {data.name}
    </Typography>
    <Typography size={10}>{data.position}</Typography>
  </St.Container>
);

export default PlayerListItem;
