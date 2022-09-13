import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {TwoLinesInfo} from '../../components';
import {colors} from '../../res';
import {useStore} from '../../store/context';
import * as St from './styles';

interface Props {
  onPress: () => void;
}

const PlayerModalChildren: React.FC<Props> = ({onPress}) => {
  const {
    playersState: {current},
  } = useStore();

  return (
    <St.PlayerContainer>
      <Icon
        style={{position: 'absolute', right: 16, top: 16}}
        name="emoji-events"
        size={30}
        color={colors.PLAYER_TROPHY}
        onPress={onPress}
      />
      {current && (
        <>
          <St.Img source={{uri: current.photo}} resizeMode="contain" />
          <St.Name size={20} fontWeight="500">
            {current.name}
          </St.Name>
          <TwoLinesInfo title="Age" data={current.age} />
          <TwoLinesInfo title="Number" data={current.number} />
          <TwoLinesInfo title="Position" data={current.position} />
        </>
      )}
    </St.PlayerContainer>
  );
};

export default PlayerModalChildren;
