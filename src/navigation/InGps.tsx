import React, { Component } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Details from '../screens/Details';
import Gps from '../screens/Gps';

import { RootStackParamList } from '../types/navigation/RootStackParamList';
import { IInGpsProps } from '../types/navigation/InGps';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default class InGps extends Component<IInGpsProps> {
  constructor(props: IInGpsProps) {
    super(props);
    this.state = {
      search: '',
    };
  }

  render() {
    return (
      <Stack.Navigator initialRouteName='Gps'>
        <Stack.Screen
          name='Details'
          component={Details}
          options={{
            title: 'Details',
            headerBackVisible: false,
          }}
        />
        <Stack.Screen
          name='Gps'
          component={Gps}
          options={{
            title: 'Gps',
            headerBackVisible: false,
          }}
        />
      </Stack.Navigator>
    );
  }
}
