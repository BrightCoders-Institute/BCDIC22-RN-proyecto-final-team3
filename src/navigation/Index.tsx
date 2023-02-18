import React, { Component } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoggedTab from './LoggedTab';
import NotLoggedTab from './NotLoggedTab';

import { INavigationProps } from '../types/Navigation';
import { RootStackParamList } from '../types/RootStackParamList';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default class Navigation extends Component<INavigationProps> {
  constructor(props: INavigationProps) {
    super(props);
  }

  render() {
    return (
      <Stack.Navigator initialRouteName='NotLoggedTab'>
        <Stack.Screen
          name='NotLoggedTab'
          component={NotLoggedTab}
          options={{
            headerShown: false,
          }}
          initialParams={{ mode: this.props.mode }}
        />
        <Stack.Screen
          name='LoggedTab'
          component={LoggedTab}
          initialParams={{ mode: this.props.mode }}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    );
  }
}
