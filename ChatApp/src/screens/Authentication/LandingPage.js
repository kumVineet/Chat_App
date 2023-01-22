import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import normalize from 'react-native-normalize';

import Colors from '../../utils/Colors';
import Images from '../../const/Images';
import Constants from '../../const/Constants';

const LandingPage = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <LinearGradient
        colors={['purple', 'white']}
        style={{flex: 1}}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}>
        <StatusBar backgroundColor={Colors.theme} barStyle="light-content" />
        <View style={styles.header}>
          <Animatable.Image
            animation="bounceIn"
            duration={2000}
            source={Images.logo}
            style={styles.logo}
            resizeMode="stretch"
          />
        </View>
        <Animatable.View style={styles.footer} animation="fadeInUpBig">
          <Text style={styles.title}>Stay Connected with Everyone... !</Text>
          <Text style={styles.text}>Sign In with Account</Text>
          <View style={styles.button}>
            <TouchableOpacity
              onPress={() => navigation.navigate('SignInScreen')}>
              <LinearGradient
                colors={[Colors.lightTheme, Colors.theme]}
                style={styles.signIn}>
                <Text style={styles.textSign}> Login</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
          <View style={styles.button}>
            <TouchableOpacity
              onPress={() => navigation.navigate('SignUpScreen')}>
              <LinearGradient
                colors={[Colors.lightTheme, Colors.theme]}
                style={styles.signIn}>
                <Text style={styles.textSign}> Sign Up</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </Animatable.View>
      </LinearGradient>
    </View>
  );
};

export default LandingPage;

const styles = StyleSheet.create({
  header: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    height: Constants.screenHeight * 0.2,
    width: Constants.screenHeight * 0.2,
    borderRadius: (Constants.screenHeight * 0.2) / 4,
  },
  title: {
    color: '#05375a',
    fontSize: 30,
    fontWeight: 'bold',
  },
  footer: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 50,
    paddingHorizontal: 30,
  },
  text: {
    color: 'grey',
    marginTop: 5,
  },
  button: {
    alignItems: 'flex-end',
    marginTop: normalize(15),
  },
  signIn: {
    width: normalize(150),
    height: normalize(40),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    flexDirection: 'row',
  },
  textSign: {
    color: Colors.smoke,
    fontWeight: 'bold',
  },
});
