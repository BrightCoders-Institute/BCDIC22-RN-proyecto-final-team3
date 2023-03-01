import React, { Component } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoggedTab from './LoggedTab';
import NotLoggedTab from './NotLoggedTab';

import { RootStackParamList } from '../types/navigation/RootStackParamList';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default class Navigation extends Component {
  render() {
    return (
      <Stack.Navigator initialRouteName='NotLoggedTab'>
        <Stack.Screen
          name='NotLoggedTab'
          component={NotLoggedTab}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name='LoggedTab'
          component={LoggedTab}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    );
  }
}
