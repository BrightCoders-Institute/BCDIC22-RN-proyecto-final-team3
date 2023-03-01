import React, { Component } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';

import Settings from '../screens/Settings';
import InGps from './InGps';
import InFollowing from './InFollowing';

import { RootStackParamList } from '../types/navigation/RootStackParamList';
import { ILoggedTabProps } from '../types/navigation/LoggedTab';

const Tab = createBottomTabNavigator<RootStackParamList>();

export default class LoggedTab extends Component<ILoggedTabProps> {
  constructor(props: ILoggedTabProps) {
    super(props);
  }

  render() {
    return (
      <Tab.Navigator initialRouteName='InGps' backBehavior='initialRoute'>
        <Tab.Screen
          name='InGps'
          component={InGps}
          options={{
            title: 'Gps',
            headerShown: false,
            tabBarIcon: ({ focused, color, size }) => (
              <MaterialCommunityIcons
                name={focused ? 'map-marker-radius' : 'map-marker-radius-outline'}
                size={size}
                color={color}
              />
            ),
          }}
        />
        <Tab.Screen
          name='InFollowing'
          component={InFollowing}
          options={{
            title: 'Following',
            headerShown: false,
            tabBarIcon: ({ focused, color, size }) => (
              <MaterialIcons name={focused ? 'favorite' : 'favorite-outline'} size={size} color={color} />
            ),
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
