import styled from 'styled-components/native';
import {colors, moderateScale} from '../../res';
import {Dimensions} from 'react-native';

const size = Dimensions.get('window').width / 2.5;

export const Container = styled.TouchableOpacity`
  width: ${size}px;
  padding: ${moderateScale(16)}px;
  background-color: ${colors.CARD_BG};
  border-radius: ${moderateScale(8)}px;
  align-items: center;
  margin: ${moderateScale(8)}px;
`;

export const Photo = styled.Image`
  height: ${moderateScale(80)}px;
  width: ${moderateScale(80)}px;
  border-radius: ${moderateScale(50)}px;
  margin-bottom: ${moderateScale(16)}px;
`;
