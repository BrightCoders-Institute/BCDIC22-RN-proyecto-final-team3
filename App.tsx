import React, { Component } from 'react';
import { Appearance } from 'react-native';
import 'expo-dev-client';
import { StatusBar } from 'expo-status-bar';
import * as SystemUI from 'expo-system-ui';
import { EventRegister } from 'react-native-event-listeners';
import { NavigationContainer } from '@react-navigation/native';
import { themeMode, navigationThemeMode } from './src/theme/themes';
import ThemeContext from './src/theme/context';
import Navigation from './src/navigation/Index';
import { IAppState } from './src/types/App';

export default class App extends Component<object, IAppState> {
  constructor(props: object) {
    super(props);
    this.state = {
      mode: Appearance.getColorScheme(),
    };
  }

  setTheme = (mode: typeof this.state.mode) => {
    if (mode != this.state.mode) this.setState({ mode });
    SystemUI.setBackgroundColorAsync(
      mode === 'dark' ? themeMode.dark.colors.background : themeMode.light.colors.background
    );
  };

  changeThemeListener = () => {
    return EventRegister.addEventListener('changeTheme', (mode: string) => this.setTheme(mode));
  };

  componentDidMount() {
    this.setTheme(this.state.mode);
    const changeThemeListener = this.changeThemeListener();
    return () => {
      if (typeof changeThemeListener === 'string') EventRegister.removeEventListener(changeThemeListener);
    };
  }

  render() {
    return (
      <ThemeContext.Provider value={this.state.mode === 'dark' ? themeMode.dark : themeMode.light}>
        <StatusBar style={this.state.mode === 'dark' ? 'light' : 'dark'} />
        <NavigationContainer theme={this.state.mode === 'dark' ? navigationThemeMode.dark : navigationThemeMode.light}>
          <Navigation />
        </NavigationContainer>
      </ThemeContext.Provider>
    );
  }
}
