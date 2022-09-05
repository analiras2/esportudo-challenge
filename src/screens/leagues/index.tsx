import React from 'react';
import Lottie from 'lottie-react-native';
import string from '../../res/strings';
import {Text, SafeAreaView} from 'react-native';

const LeagueScreen = () => {
  return (
    <SafeAreaView style={{flexGrow: 1}}>
      <Text>{string.appName}</Text>
      <Lottie
        source={require('../../res/lottie/playerLoading.json')}
        autoPlay
        loop
      />
    </SafeAreaView>
  );
};

export default LeagueScreen;
