import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {TwoLinesInfo} from '../../components';
import {colors} from '../../res';
import * as St from './styles';

interface Props {
  onPress: () => void;
}

const PlayerModalChildren: React.FC<Props> = ({onPress}) => (
  <St.PlayerContainer>
    <Icon
      style={{position: 'absolute', right: 16, top: 16}}
      name="emoji-events"
      size={30}
      color={colors.PLAYER_TROPHY}
      onPress={onPress}
    />
    <St.Logo />
    <St.Name size={20} fontWeight="500">
      Aqui nome
    </St.Name>
    <TwoLinesInfo title="Age" data="Aqui data" />
    <TwoLinesInfo title="Number" data="Aqui data" />
    <TwoLinesInfo title="Position" data="Aqui data" />
  </St.PlayerContainer>
);

export default PlayerModalChildren;
