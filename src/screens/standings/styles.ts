import styled from 'styled-components/native';
import {colors, moderateScale} from '../../res';
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

export const DropdownContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: ${moderateScale(79)}px;
  background-color: ${colors.CARD_BG};
  padding-vertical: ${moderateScale(4)}px;
  padding-horizontal: ${moderateScale(8)}px;
  border-radius: ${moderateScale(4)}px;
`;

export const FlagContainer = styled.View`
  width: ${moderateScale(79)}px;
`;
