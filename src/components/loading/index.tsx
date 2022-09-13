import React from 'react';
import Lottie from 'lottie-react-native';
import {ActivityIndicator} from 'react-native';
import {colors} from '../../res';

const Loading = ({small}: {small?: boolean}): JSX.Element =>
  small ? (
    <ActivityIndicator size="large" color={colors.ACCENT} />
  ) : (
    <Lottie
      source={require('../../res/lottie/playerLoading.json')}
      autoPlay
      loop
    />
  );

export default Loading;
