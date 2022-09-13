import React from 'react';
import {colors, scale} from '../../res';
import Typography from '../typography';
import * as St from './styles';

export const FontType = {
  SCREEN_TITLE: {fontSize: scale(24), fontWeight: '400'},
  DEFAULT: {fontSize: scale(14)},
};

interface Props {
  label: string;
  onPress: () => void;
}

const Button: React.FC<Props> = ({label, onPress}): JSX.Element => (
  <St.Container onPress={onPress}>
    <Typography
      size={10}
      color={colors.ACCENT}
      fontWeight="500"
      onPress={onPress}>
      {label}
    </Typography>
  </St.Container>
);

export default Button;
