import React from 'react';
import {Text, TextStyle, TextProps} from 'react-native';
import {colors, scale} from '../../res';

interface Props extends TextProps {
  children: string | number;
  style?: TextStyle | TextStyle[];
  color?: string;
  center?: boolean;
  size?: number;
  fontWeight?:
    | 'normal'
    | 'bold'
    | '100'
    | '200'
    | '300'
    | '400'
    | '500'
    | '600'
    | '700'
    | '800'
    | '900'
    | undefined;
}

const Typography: React.FC<Props> = ({
  children,
  style,
  center,
  size,
  fontWeight = 'normal',
  color = colors.TEXT,
}): JSX.Element => {
  const styles = {
    fontSize: size ? scale(size) : scale(14),
    color,
    fontWeight,
    textAlign: center ? 'center' : 'left',
    letterSpacing: 2,
    flexShrink: 1,
  };

  return <Text style={[styles, style]}>{children}</Text>;
};

export default Typography;
