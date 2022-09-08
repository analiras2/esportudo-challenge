import React from 'react';
import Lottie from 'lottie-react-native';
import string from '../../res/strings';
import {BaseContainer, Typography} from '../../components';

const LeagueScreen = () => {
  return (
    <BaseContainer>
      <Typography>{string.appName}</Typography>
      <Lottie
        source={require('../../res/lottie/playerLoading.json')}
        autoPlay
        loop
      />
    </BaseContainer>
  );
};

export default LeagueScreen;
