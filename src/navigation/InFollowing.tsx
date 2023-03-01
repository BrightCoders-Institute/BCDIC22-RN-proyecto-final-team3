import React, { Component } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Details from '../screens/Details';
import Following from '../screens/Following';

import { RootStackParamList } from '../types/navigation/RootStackParamList';
import { IInFollowingProps } from '../types/navigation/InFollowing';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default class InFollowing extends Component<IInFollowingProps> {
  constructor(props: IInFollowingProps) {
    super(props);
    this.state = {
      search: '',
    };
  }

  render() {
    return (
      <Stack.Navigator initialRouteName='Following'>
        <Stack.Screen
          name='Details'
          component={Details}
          options={{
            title: 'Details',
          }}
        />
        <Stack.Screen
          name='Following'
          component={Following}
          options={{
            title: 'Following',
          }}
        />
      </Stack.Navigator>
    );
  }
}
