import styled from 'styled-components/native';
import {colors, moderateScale} from '../../res';

export const Container = styled.TouchableOpacity`
  position: relative;
  width: 100%;
  background-color: ${colors.CARD_BG};
  border-radius: ${moderateScale(8)}px;
  margin-bottom: ${moderateScale(16)}px;
`;

export const Flag = styled.Image`
  height: ${moderateScale(32)}px;
  width: ${moderateScale(32)}px;
`;

export const Header = styled.View`
  flex-direction: row;
  padding: ${moderateScale(16)}px;
  border-bottom-width: 1px;
  border-bottom-color: ${colors.DIVIDER};
  justify-content: space-between
  align-items: center;
  margin-bottom: ${moderateScale(16)}px;
`;

export const MatchesRow = styled.View`
  flex-direction: row;
  justify-content: space-around;
  margin-bottom: ${moderateScale(16)}px;
`;

export const InfoRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: ${moderateScale(16)}px;
`;

export const LoadingContainer = styled.View`
  position: absolute;
  flex: 1;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 10;
`;
