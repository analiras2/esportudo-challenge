import React from 'react';
import {Text, TextStyle, TextProps} from 'react-native';
import {colors, scale} from '../../res';

export const FontType = {
  SCREEN_TITLE: {fontSize: scale(24), fontWeight: '400'},
  DEFAULT: {fontSize: scale(14)},
};

interface Props extends TextProps {
  children: string;
  style?: TextStyle | TextStyle[];
  color?: string;
  type?: {
    fontSize: number;
    fontWeight?: any;
  };
}

const Typography: React.FC<Props> = ({
  children,
  style,
  color = colors.TEXT,
  type = FontType.DEFAULT,
}): JSX.Element => {
  const styles = {
    ...type,
    color,
    letterSpacing: 2,
    flexShrink: 1,
  };

  return <Text style={[styles, style]}>{children}</Text>;
};

export default Typography;
