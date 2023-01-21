import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import normalize from 'react-native-normalize';

const GroupScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Group Screen</Text>
    </View>
  );
};

export default GroupScreen;

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
