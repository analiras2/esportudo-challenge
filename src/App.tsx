/**
 * @format
 */

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LeagueScreen from './screens/league';
import StandingsScreen from './screens/standings';
import {RootStackParamList, Routes} from './@types/routes';
import PlayersScreen from './screens/player';
import StoreProvider from './store/context';
import TrophiesScreen from './screens/trophy';

const RootStack = createNativeStackNavigator<RootStackParamList>();

function App() {
  return (
    <StoreProvider>
      <NavigationContainer>
        <RootStack.Navigator screenOptions={{headerShown: false}}>
          <RootStack.Screen name={Routes.Leagues} component={LeagueScreen} />
          <RootStack.Screen
            name={Routes.Standings}
            component={StandingsScreen}
          />
          <RootStack.Screen name={Routes.Players} component={PlayersScreen} />
          <RootStack.Screen name={Routes.Trophies} component={TrophiesScreen} />
        </RootStack.Navigator>
      </NavigationContainer>
    </StoreProvider>
  );
}

export default App;
