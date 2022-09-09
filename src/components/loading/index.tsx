import React from 'react';
import Lottie from 'lottie-react-native';

interface Props {
  children: JSX.Element;
  isLoading: boolean;
}

const Loading: React.FC<Props> = ({children, isLoading}): JSX.Element => {
  return isLoading ? (
    <Lottie
      source={require('../../res/lottie/playerLoading.json')}
      autoPlay
      loop
    />
  ) : (
    children
  );
};

export default Loading;
