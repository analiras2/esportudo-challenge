import React from 'react';
import * as St from './styles';
import AppBar from '../appBar';
import {StatusBar} from 'react-native';

interface Props {
  children: JSX.Element | JSX.Element[];
  title: string;
  onBackPress?: () => void;
  onRightPress?: () => void;
}

const BaseContainer: React.FC<Props> = ({
  children,
  title,
  onBackPress,
  onRightPress,
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
        <St.Body>{children}</St.Body>
      </St.Container>
    </>
  );
};

export default BaseContainer;
