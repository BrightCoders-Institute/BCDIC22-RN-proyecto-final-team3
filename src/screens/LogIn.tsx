import React, { Component } from 'react';
import { View } from 'react-native';
import CButton from '../components/CButton';
import CButtonIcon from '../components/CButtonIcon';
import CTextInput from '../components/CTextInput';
import ThemeContext from '../theme/context';
import LogInStyles from '../styles/screens/LogIn';
import { ILogInProps } from '../types/screens/LogIn';
import { IThemeContext } from '../types/theme/context';

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
        <CButton
          disabled={false}
          onPress={() => {
            this.props.navigation.navigate('SignUp');
          }}
          style={LogInStyles(this.context).commonLoginButton}
          title={'Log in'}
        />
        <CButton
          disabled={true}
          onPress={() => {
            this.props.navigation.navigate('SignUp');
          }}
          style={LogInStyles(this.context).commonLoginButton}
          title={'Log in'}
        />
        <CButtonIcon
          disabled={false}
          name={'google'}
          onPress={() => {
            this.props.navigation.navigate('SignUp');
          }}
          style={LogInStyles(this.context).googleLoginButton}
        />
        <CButtonIcon
          disabled={true}
          name={'google'}
          onPress={() => {
            this.props.navigation.navigate('SignUp');
          }}
          style={LogInStyles(this.context).googleLoginButton}
        />
      </View>
    );
  }
}
