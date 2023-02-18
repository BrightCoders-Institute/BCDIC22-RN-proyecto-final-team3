import React, { Component } from 'react';
import { Text, Switch, View } from 'react-native';
import { EventRegister } from 'react-native-event-listeners';
import ThemeContext from '../theme/ThemeContext';
import SettingsStyles from '../styles/Settings';
import { ISettingsProps, ISettingsState, ISettingsContext } from '../types/Settings';

export default class LogIn extends Component<ISettingsProps, ISettingsState> {
  static contextType = ThemeContext;
  declare context: ISettingsContext;

  constructor(props: ISettingsProps) {
    super(props);
    this.state = {
      mode: this.props.route.params.mode,
    };
  }

  onThemeChange = (value: boolean) => {
    EventRegister.emit('changeTheme', value);
    this.setState({ mode: value });
  };

  componentDidMount() {
    this.setState({ mode: this.props.route.params.mode });
  }

  componentWillUnmount(): void {
    this.setState({ mode: this.props.route.params.mode });
  }

  render() {
    return (
      <View style={SettingsStyles(this.context).screen.style.container}>
        <Text style={SettingsStyles(this.context).screen.style.text}>
          Open up ./src/screens/Settings.tsx to start working on your app!
        </Text>
        <Switch value={this.state.mode} onValueChange={this.onThemeChange} />
      </View>
    );
  }
}
