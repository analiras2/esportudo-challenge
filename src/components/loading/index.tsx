import React from 'react';
import Lottie from 'lottie-react-native';

const Loading = (): JSX.Element => (
  <Lottie
    source={require('../../res/lottie/playerLoading.json')}
    autoPlay
    loop
  />
);

export default Loading;
