/**
 * @format
 */

import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import LeagueScreen from '../src/screens/leagues';

it('renders correctly', () => {
  renderer.create(<LeagueScreen />);
});
