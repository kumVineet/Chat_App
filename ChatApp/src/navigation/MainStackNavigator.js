import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import LandingPage from '../screens/Authentication/LandingPage';
import SignUpScreen from '../screens/Authentication/SignUpScreen';
import SignInScreen from '../screens/Authentication/SignInScreen';
import GroupScreen from '../screens/GroupScreen';
import AddGroupScreen from '../screens/AddGroupScreen';
import ChatScreen from '../screens/ChatScreen';

const Stack = createStackNavigator();

const AuthChatFlow = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="AuthChat">
        <Stack.Screen
          name="LandingPage"
          component={LandingPage}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SignInScreen"
          component={SignInScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SignUpScreen"
          component={SignUpScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const MainStackNavigator = () => {
  return <AuthChatFlow />;
};

export default MainStackNavigator;
