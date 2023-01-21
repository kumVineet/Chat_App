import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import SignInScreen from '../screens/SignInScreen';
import GroupScreen from '../screens/GroupScreen';
import AddGroupScreen from '../screens/AddGroupScreen';
import ChatScreen from '../screens/ChatScreen';

const Stack = createStackNavigator();

const ChatFlow = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="chat">
        <Stack.Screen
          name="SignInScreen"
          component={SignInScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="GroupScreen"
          component={GroupScreen}
          options={{title: 'Groups'}}
        />
        <Stack.Screen
          name="AddGroupScreen"
          component={AddGroupScreen}
          options={{title: 'Add Group'}}
        />
        <Stack.Screen
          name="ChatScreen"
          component={ChatScreen}
          options={{title: 'Chats'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const MainStackNavigator = () => {
  return <ChatFlow />;
};

export default MainStackNavigator;
