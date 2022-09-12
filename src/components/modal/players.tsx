import React from 'react';
import {TwoLinesInfo, Typography} from '../../components';
import * as St from './styles';

const PlayerModalChildren = () => {
  return (
    <St.Container>
      <St.Logo />
      <Typography>Aqui nome</Typography>
      <TwoLinesInfo title="Age" data="Aqui data" />
      <TwoLinesInfo title="Number" data="Aqui data" />
      <TwoLinesInfo title="Position" data="Aqui data" />
    </St.Container>
  );
};

export default PlayerModalChildren;
