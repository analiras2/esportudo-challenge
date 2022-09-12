import styled from 'styled-components/native';
import {colors, moderateScale} from '../../res';

export const Container = styled.View`
  background-color: ${colors.BACKGROUND};
  padding: ${moderateScale(16)}px;
  border-radius: ${moderateScale(8)}px;
  width: 60%;
`;

export const Logo = styled.Image`
  height: ${100}px;
  width: ${100}px;
  margin-bottom: ${moderateScale(8)}px;
`;
