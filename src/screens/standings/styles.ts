import styled from 'styled-components/native';
import {moderateScale} from '../../res';

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

export const Flag = styled.Image`
  height: ${moderateScale(32)}px;
  width: ${moderateScale(79)}px;
  margin-bottom: ${moderateScale(8)}px;
  background-color: red;
  border-radius: ${moderateScale(8)}px;
`;
