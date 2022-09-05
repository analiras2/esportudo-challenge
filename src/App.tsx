/**
 * @format
 */

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LeagueScreen from './screens/leagues';
import {RootStackParamList, Routes} from './@types/routes';

const RootStack = createNativeStackNavigator<RootStackParamList>();

function App() {
  return (
    <NavigationContainer>
      <RootStack.Navigator screenOptions={{headerShown: false}}>
        <RootStack.Screen name={Routes.Leagues} component={LeagueScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

export default App;
