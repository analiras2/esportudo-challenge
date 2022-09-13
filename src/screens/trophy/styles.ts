import styled from 'styled-components/native';
import {colors, moderateScale} from '../../res';

export const Container = styled.View`
  align-items: center;
  padding: ${moderateScale(8)}px;
  background-color: ${colors.CARD_BG};
  margin-bottom: ${moderateScale(8)}px;
  border-radius: ${moderateScale(8)}px;
`;
