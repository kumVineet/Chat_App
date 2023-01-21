import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import normalize from 'react-native-normalize';

const AddGroupScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Add Group Screen</Text>
    </View>
  );
};

export default AddGroupScreen;

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
