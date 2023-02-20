import React, { Component } from 'react';
import { Appearance } from 'react-native';
import 'expo-dev-client';
import { StatusBar } from 'expo-status-bar';
import * as SystemUI from 'expo-system-ui';
import { EventRegister } from 'react-native-event-listeners';
import { NavigationContainer, DarkTheme, DefaultTheme } from '@react-navigation/native';
import theme from './src/theme/theme';
import ThemeContext from './src/theme/ThemeContext';
import Navigation from './src/navigation/Index';
import { IAppState } from './src/types/App';

export default class App extends Component<object, IAppState> {
  constructor(props: object) {
    super(props);
    this.state = {
      mode: Appearance.getColorScheme(),
    };
  }

  componentDidMount() {
    const eventListener = EventRegister.addEventListener('changeTheme', (mode: string) => {
      this.setState({ mode });
      SystemUI.setBackgroundColorAsync(mode === 'dark' ? DarkTheme.colors.card : DefaultTheme.colors.card);
    });
    return () => {
      if (typeof eventListener === 'string') {
        EventRegister.removeEventListener(eventListener);
      }
    };
  }

  render() {
    return (
      <ThemeContext.Provider value={this.state.mode === 'dark' ? theme.dark : theme.light}>
        <StatusBar style={this.state.mode === 'dark' ? 'light' : 'dark'} />
        <NavigationContainer theme={this.state.mode === 'dark' ? DarkTheme : DefaultTheme}>
          <Navigation />
        </NavigationContainer>
      </ThemeContext.Provider>
    );
  }
}
