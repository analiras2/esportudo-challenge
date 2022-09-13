import styled from 'styled-components/native';
import {colors, moderateScale} from '../../res';

export const Container = styled.View`
  background-color: ${colors.PRIMARY};
  flex-direction: row;
  height: ${moderateScale(56)}px;
  align-items: center;
`;

export const LeftContainer = styled.View`
  flex: 0.5;
  padding-left: ${moderateScale(12)}px;
`;

export const RightContainer = styled.View`
  flex: 0.5;
  padding-right: ${moderateScale(20)}px;
  align-items: flex-end;
`;

export const TitleView = styled.View`
  flex: 2;
  align-items: center;
`;
