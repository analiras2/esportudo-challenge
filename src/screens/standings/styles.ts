import styled from 'styled-components/native';
import {moderateScale} from '../../res';
import {SvgUri} from 'react-native-svg';

export const SeasonsInfo = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-vertical: ${moderateScale(20)}px;
`;

export const DataContainer = styled.View`
  flex: 1;
  align-items: center;
`;

export const Flag = styled(SvgUri).attrs({
  height: moderateScale(30),
  width: moderateScale(79),
})`
  margin-bottom: ${moderateScale(8)}px;
  border-radius: ${moderateScale(8)}px;
`;
