import React from 'react';
import {moderateScale} from '../../res';
import Typography from '../typography';
import * as St from './styles';

interface Props {
  title: string;
  data: number | string;
}

const TwoLinesInfo: React.FC<Props> = ({title, data}): JSX.Element => (
  <St.InfoData>
    <Typography size={10} style={{marginBottom: moderateScale(4)}}>
      {title}
    </Typography>
    <Typography size={16}>{data}</Typography>
  </St.InfoData>
);

export default TwoLinesInfo;
