import styled from 'styled-components/native';
import {colors} from '../../res';
import {moderateScale} from '../../res/scaling';

export const Container = styled.SafeAreaView`
  flex-grow: 1;
  background-color: ${colors.PRIMARY};
`;

export const Body = styled.SafeAreaView`
  flex: 1;
  padding-vertical: ${moderateScale(32)}px;
  padding-horizontal: ${moderateScale(20)}px;
  background-color: ${colors.BACKGROUND};
`;
