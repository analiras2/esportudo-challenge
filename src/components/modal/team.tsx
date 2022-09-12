import React from 'react';
import {TwoLinesInfo, Typography, Button} from '../../components';
import * as St from './styles';

interface Props {
  onPress: () => void;
}

const TeamModalChildren: React.FC<Props> = ({onPress}) => (
  <St.Container>
    <Typography size={20} fontWeight="500" center>
      Aqui nome
    </Typography>
    <St.Logo />
    <TwoLinesInfo title="Aqui" data="Aqui data" />
    <TwoLinesInfo title="Aqui" data="Aqui data" />
    <Button label="See players" onPress={onPress} />
  </St.Container>
);

export default TeamModalChildren;
