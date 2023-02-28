import React, { Component } from 'react';
import { Button, Text, View } from 'react-native';
import CTextInput from '../components/CTextInput';
import ThemeContext from '../theme/ThemeContext';
import LogInStyles from '../styles/LogIn';
import { ILogInProps } from '../types/LogIn';
import { IThemeContext } from '../types/ThemeContext';

export default class LogIn extends Component<ILogInProps> {
  static contextType = ThemeContext;
  declare context: IThemeContext;

  constructor(props: ILogInProps) {
    super(props);
  }

  render() {
    return (
      <View style={LogInStyles(this.context).screen.style.container}>
        <CTextInput
          error={{ active: true, message: 'Name is short' }}
          label={'name'}
          style={LogInStyles(this.context).input}
        />
        <CTextInput
          error={{ active: false, message: 'Email address is invalid' }}
          style={LogInStyles(this.context).input}
          type={'email'}
        />
        <CTextInput
          error={{ active: false, message: 'Password is incorrect' }}
          style={LogInStyles(this.context).input}
          type={'password'}
        />
        <Button
          title='Go to Sign Up'
          onPress={() => {
            this.props.navigation.navigate('SignUp');
          }}
        />
      </View>
    );
  }
}
