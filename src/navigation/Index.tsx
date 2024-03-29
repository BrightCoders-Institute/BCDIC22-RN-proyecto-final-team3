import React, { Component } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import auth from '@react-native-firebase/auth';

import InForms from './InForms';
import LoggedTab from './LoggedTab';

import { RootStackParamList } from '../types/navigation/RootStackParamList';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default class Navigation extends Component {
  render() {
    return (
      <Stack.Navigator initialRouteName={auth().currentUser ? 'LoggedTab' : 'InForms'}>
        <Stack.Screen
          name='InForms'
          component={InForms}
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
