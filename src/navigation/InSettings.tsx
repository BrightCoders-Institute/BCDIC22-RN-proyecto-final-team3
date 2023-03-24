import React, { Component } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Account from '../screens/Account';
import Settings from '../screens/Settings';

import { RootStackParamList } from '../types/navigation/RootStackParamList';
import { IInSettings } from '../types/navigation/InSettings';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default class InSettings extends Component<IInSettings> {
  constructor(props: IInSettings) {
    super(props);
  }

  render() {
    return (
      <Stack.Navigator initialRouteName='Settings'>
        <Stack.Screen
          name='Account'
          component={Account}
          options={{
            title: 'Account',
          }}
        />
        <Stack.Screen
          name='Settings'
          component={Settings}
          options={{
            title: 'Settings',
          }}
        />
      </Stack.Navigator>
    );
  }
}
