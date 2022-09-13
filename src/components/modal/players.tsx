import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {TwoLinesInfo} from '../../components';
import {colors} from '../../res';
import {useStore} from '../../store/context';
import * as St from './styles';

interface Props {
  playerIndex: number;
  onPress: () => void;
}

const PlayerModalChildren: React.FC<Props> = ({playerIndex, onPress}) => {
  const {playersState} = useStore();
  const player = playersState.players[playerIndex];

  return (
    <St.PlayerContainer>
      <Icon
        style={{position: 'absolute', right: 16, top: 16}}
        name="emoji-events"
        size={30}
        color={colors.PLAYER_TROPHY}
        onPress={onPress}
      />
      <St.Img source={{uri: player.photo}} resizeMode="contain" />
      <St.Name size={20} fontWeight="500">
        {player.name}
      </St.Name>
      <TwoLinesInfo title="Age" data={player.age} />
      <TwoLinesInfo title="Number" data={player.number} />
      <TwoLinesInfo title="Position" data={player.position} />
    </St.PlayerContainer>
  );
};

export default PlayerModalChildren;
