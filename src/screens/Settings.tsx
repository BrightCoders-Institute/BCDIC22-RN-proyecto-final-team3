import React, { Component } from 'react';
import { Text, Switch, View } from 'react-native';
import { EventRegister } from 'react-native-event-listeners';
import ThemeContext from '../theme/ThemeContext';
import SettingsStyles from '../styles/Settings';
import { ISettingsProps, ISettingsContext } from '../types/Settings';

export default class LogIn extends Component<ISettingsProps> {
  static contextType = ThemeContext;
  declare context: ISettingsContext;

  constructor(props: ISettingsProps) {
    super(props);
  }

  onThemeChange = (value: boolean) => {
    EventRegister.emit('changeTheme', value ? 'dark' : 'light');
  };

  render() {
    return (
      <View style={SettingsStyles(this.context).screen.style.container}>
        <Text style={SettingsStyles(this.context).screen.style.text}>
          Open up ./src/screens/Settings.tsx to start working on your app!
        </Text>
        <Switch value={this.context.isDark} onValueChange={this.onThemeChange} />
      </View>
    );
  }
}
