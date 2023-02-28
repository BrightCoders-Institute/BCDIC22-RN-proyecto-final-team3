import React, { Component } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LogIn from '../screens/LogIn';
import SignUp from '../screens/SignUp';

import { RootStackParamList } from '../types/navigation/RootStackParamList';
import { IInFormsProps } from '../types/navigation/InForms';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default class InForms extends Component<IInFormsProps> {
  constructor(props: IInFormsProps) {
    super(props);
  }

  render() {
    return (
      <Stack.Navigator initialRouteName='LogIn'>
        <Stack.Screen
          name='LogIn'
          component={LogIn}
          options={{
            title: 'Log in',
            headerBackVisible: false,
          }}
        />
        <Stack.Screen
          name='SignUp'
          component={SignUp}
          options={{
            title: 'Sign up',
            headerBackVisible: false,
          }}
        />
      </Stack.Navigator>
    );
  }
}
