/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  useColorScheme,
  Text,
  View,
} from 'react-native';
import MainStackNavigator from './src/navigation/MainStackNavigator';

const App = () => {
  return <MainStackNavigator />;
};

export default App;
