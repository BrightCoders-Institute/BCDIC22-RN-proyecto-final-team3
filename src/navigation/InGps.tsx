import React, { Component } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Details from '../screens/Details';
import Gps from '../screens/Gps';
import Search from '../screens/Search';

import ThemeContext from '../theme/context';

import { RootStackParamList } from '../types/navigation/RootStackParamList';
import { IInGpsProps } from '../types/navigation/InGps';
import { IThemeContext } from '../types/theme/context';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default class InGps extends Component<IInGpsProps> {
  static contextType = ThemeContext;
  declare context: IThemeContext;

  constructor(props: IInGpsProps) {
    super(props);
  }

  render() {
    return (
      <Stack.Navigator
        initialRouteName='Gps'
        screenOptions={({ navigation }) => {
          return {
            headerSearchBarOptions: {
              placeholder: 'Search',
              hideWhenScrolling: true,
              shouldShowHintSearchIcon: false,
              headerIconColor: this.context.colors.text,
              textColor: this.context.colors.text,
              tintColor: this.context.colors.text,
              hintTextColor: this.context.colors.text,
              onSearchButtonPress(e) {
                navigation.navigate('Search', {
                  search: e.nativeEvent.text,
                });
              },
            },
          };
        }}
      >
        <Stack.Screen
          name='Details'
          component={Details}
          options={{
            title: 'Details',
            headerSearchBarOptions: undefined,
          }}
        />
        <Stack.Screen
          name='Gps'
          component={Gps}
          options={{
            title: 'Gps',
          }}
        />
        <Stack.Screen
          name='Search'
          component={Search}
          options={{
            title: 'Search',
          }}
        />
      </Stack.Navigator>
    );
  }
}
