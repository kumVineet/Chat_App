import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import Colors from '../utils/Colors';
import normalize from 'react-native-normalize';
import LinearGradient from 'react-native-linear-gradient';

const Button = props => {
  const {title = '', style = {}, textStyle = {}, onPress} = props;

  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, style]}>
      <LinearGradient colors={[Colors.lightTheme, Colors.theme]}>
        <Text style={[styles.text, textStyle]}>{title}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    display: 'flex',
    height: normalize(50),
    borderRadius: normalize(5),
    paddingLeft: normalize(20),
    paddingRight: normalize(20),
    justifyContent: 'center',
    alignItems: 'center',
    margin: normalize(20),
    shadowColor: Colors.studioGreen,
    shadowOpacity: 0.4,
    shadowOffset: {height: normalize(10), width: normalize(10)},
    shadowRadius: normalize(20),
  },
  text: {
    fontSize: normalize(16),
    textTransform: 'uppercase',
    color: Colors.white,
  },
});

export default Button;
