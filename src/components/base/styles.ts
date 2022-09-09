import styled from 'styled-components/native';
import {colors} from '../../res';
import {moderateScale} from '../../res/scaling';

interface Props {
  paddingVertical?: boolean;
}

export const Container = styled.SafeAreaView`
  flex-grow: 1;
  background-color: ${colors.PRIMARY};
`;

export const Body = styled.SafeAreaView<Props>`
  flex: 1;
  padding-vertical: ${props =>
    props.paddingVertical ? moderateScale(32) : 0}px;
  padding-horizontal: ${moderateScale(20)}px;
  background-color: ${colors.BACKGROUND};
`;
