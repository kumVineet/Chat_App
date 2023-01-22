import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import normalize from 'react-native-normalize';
import LinearGradient from 'react-native-linear-gradient';

import Button from '../../components/Button';
import Strings from '../../const/Strings';
import TextField from '../../components/TextField';
import Colors from '../../utils/Colors';

const SignInScreen = () => {
  return (
    <View style={{flex: 1}}>
      <LinearGradient
        colors={['purple', 'white']}
        style={{flex: 1}}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}>
        <Text>Logged In</Text>
      </LinearGradient>
    </View>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#101010',
    fontSize: normalize(24),
    fontWeight: 'bold',
  },
});
