import React from 'react';
import * as St from './styles';
import AppBar from '../appBar';
import {StatusBar} from 'react-native';

interface Props {
  children: JSX.Element[];
  onBackPress?: () => void;
  onRightPress?: () => void;
}

const BaseContainer: React.FC<Props> = ({
  children,
  onBackPress,
  onRightPress,
}): JSX.Element => {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <St.Container>
        <AppBar
          title="Title"
          onBackPress={onBackPress}
          onRightPress={onRightPress}
        />
        <St.Body>{children}</St.Body>
      </St.Container>
    </>
  );
};

export default BaseContainer;
