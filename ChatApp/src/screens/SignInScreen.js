import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import normalize from 'react-native-normalize';

const SignInScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Sign In Screen</Text>
    </View>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ebebeb',
  },
  text: {
    color: '#101010',
    fontSize: normalize(24),
    fontWeight: 'bold',
  },
});
