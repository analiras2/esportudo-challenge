import {Dimensions, Image, TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';
import {moderateScale} from '../../res';

const size = Dimensions.get('window').width / 4;

export const Container = styled(TouchableOpacity)`
  align-items: center;
  width: ${size}px;
  margin-horizontal: ${moderateScale(10)}px;
  margin-vertical: ${moderateScale(16)}px;
`;

export const Logo = styled(Image)`
  height: ${size};
  width: ${size};
  margin-bottom: ${moderateScale(8)}px;
`;
