import {Dimensions, Image, TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';
import {moderateScale} from '../../res';

const size = Dimensions.get('window').width / 4;

export const Container = styled(TouchableOpacity)`
  align-items: center;
  width: ${size};
  margin: 8px;
`;

export const Logo = styled(Image)`
  height: ${size};
  width: ${size};
  border-radius: ${moderateScale(20)};
  margin-bottom: ${moderateScale(8)};
`;
