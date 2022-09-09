import React from 'react';
import * as St from './styles';
import AppBar from '../appBar';
import {StatusBar} from 'react-native';

interface Props {
  children: JSX.Element | JSX.Element[];
  title: string;
  onBackPress?: () => void;
  onRightPress?: () => void;
  paddingVertical?: boolean;
}

const BaseContainer: React.FC<Props> = ({
  children,
  title,
  onBackPress,
  onRightPress,
  paddingVertical = true,
}): JSX.Element => {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <St.Container>
        <AppBar
          title={title}
          onBackPress={onBackPress}
          onRightPress={onRightPress}
        />
        <St.Body paddingVertical={paddingVertical}>{children}</St.Body>
      </St.Container>
    </>
  );
};

export default BaseContainer;
