import React, { Component } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Details from '../screens/Details';
import Following from '../screens/Following';

import ThemeContext from '../theme/context';

import { RootStackParamList } from '../types/navigation/RootStackParamList';
import { IInFollowingProps } from '../types/navigation/InFollowing';
import { IThemeContext } from '../types/theme/context';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default class InFollowing extends Component<IInFollowingProps> {
  static contextType = ThemeContext;
  declare context: IThemeContext;

  constructor(props: IInFollowingProps) {
    super(props);
  }

  render() {
    return (
      <Stack.Navigator
        initialRouteName='Following'
        screenOptions={{
          headerSearchBarOptions: {
            placeholder: 'Search',
            hideWhenScrolling: true,
            shouldShowHintSearchIcon: false,
            headerIconColor: this.context.colors.text,
            textColor: this.context.colors.text,
            tintColor: this.context.colors.text,
            hintTextColor: this.context.colors.text,
            onSearchButtonPress: (e) => {
              this.props.navigation.navigate('Details', { search: e.nativeEvent.text });
            },
          },
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
