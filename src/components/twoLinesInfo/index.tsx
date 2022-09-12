import React from 'react';
import {moderateScale, scale} from '../../res';
import Typography from '../typography';
import * as St from './styles';

interface Props {
  title: string;
  data: number;
}

const TwoLinesInfo: React.FC<Props> = ({title, data}): JSX.Element => (
  <St.InfoData>
    <Typography size={10} style={{marginBottom: moderateScale(8)}}>
      {title}
    </Typography>
    <Typography size={16}>{data}</Typography>
  </St.InfoData>
);

export default TwoLinesInfo;
