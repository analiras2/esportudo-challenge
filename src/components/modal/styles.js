import styled from 'styled-components/native';
import {colors, moderateScale} from '../../res';
import Typography from '../typography';

export const Container = styled.View`
  background-color: ${colors.BACKGROUND};
  padding: ${moderateScale(16)}px;
  border-radius: ${moderateScale(8)}px;
  width: 60%;
`;

export const PlayerContainer = styled.View`
  background-color: ${colors.BACKGROUND};
  padding: ${moderateScale(16)}px;
  border-radius: ${moderateScale(8)}px;
  width: 60%;
  align-items: center;
`;

export const Logo = styled.Image`
  height: ${100}px;
  width: ${100}px;
  margin-bottom: ${moderateScale(8)}px;
`;

export const Name = styled(Typography)`
  margin-bottom: ${moderateScale(10)}px;
`;
