import React, { Component } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';

import InForms from './InForms';
import Settings from '../screens/Settings';

import { RootStackParamList } from '../types/navigation/RootStackParamList';
import { INotLoggedTabProps } from '../types/navigation/NotLoggedTab';

const Tab = createBottomTabNavigator<RootStackParamList>();

export default class NotLoggedTab extends Component<INotLoggedTabProps> {
  constructor(props: INotLoggedTabProps) {
    super(props);
  }

  render() {
    return (
      <Tab.Navigator initialRouteName='InForms' backBehavior='initialRoute'>
        <Tab.Screen
          name='InForms'
          component={InForms}
          options={{
            title: 'Account',
            headerShown: false,
            tabBarIcon: ({ color, size }) => <MaterialIcons name={'login'} size={size} color={color} />,
          }}
        />
        <Tab.Screen
          name='Settings'
          component={Settings}
          options={{
            title: 'Settings',
            tabBarIcon: ({ color, size }) => <MaterialIcons name={'settings'} size={size} color={color} />,
          }}
        />
      </Tab.Navigator>
    );
  }
}
