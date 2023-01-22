import React from 'react';
import {StyleSheet, View, TextInput, Text} from 'react-native';
import normalize from 'react-native-normalize';
import Colors from '../utils/Colors';
import Constants from '../const/Constants';

const TextField = props => {
  const {term, placeholder, OnTermChange, onValidEmail, error} = props;

  return (
    <View>
      <Text style={styles.errorText}>{error}</Text>
      <View style={styles.textFieldView}>
        <TextInput
          autoCorrect={false}
          style={styles.container}
          placeholder={placeholder}
          value={term}
          onChangeText={OnTermChange}
          onEndEditing={onValidEmail}
        />
      </View>
    </View>
  );
};

export default TextField;

const styles = StyleSheet.create({
  container: {
    fontSize: normalize(14),
    flex: 1,
    marginHorizontal: normalize(20),
  },
  textFieldView: {
    height: Constants.screenHeight * 0.06,
    width: Constants.screenWidth * 0.85,
    borderRadius: normalize(10),
    marginTop: normalize(5),
    marginBottom: normalize(10),
    borderColor: Colors.black,
    borderWidth: 1,
    justifyContent: 'center',
    backgroundColor: Colors.smoke,
  },
  errorText: {
    fontSize: normalize(12),
    color: Colors.cosmic,
    marginBottom: normalize(-5),
    marginHorizontal: normalize(20),
  },
});
