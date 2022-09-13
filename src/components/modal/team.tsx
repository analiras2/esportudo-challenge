import React from 'react';
import {Button, TwoLinesInfo, Typography} from '../../components';
import {useStore} from '../../store/context';
import * as St from './styles';

interface Props {
  onPress: () => void;
}

const TeamModalChildren: React.FC<Props> = ({onPress}) => {
  const {
    teamState: {team},
  } = useStore();

  return (
    <St.Container>
      <Typography size={20} fontWeight="500" center>
        {team?.name}
      </Typography>
      <St.Img source={{uri: team.logo}} resizeMode="contain" />
      <TwoLinesInfo title="Country" data={team.country} />
      <TwoLinesInfo title="Founded" data={team.founded} />
      <Button label="See players" onPress={onPress} />
    </St.Container>
  );
};

export default TeamModalChildren;
