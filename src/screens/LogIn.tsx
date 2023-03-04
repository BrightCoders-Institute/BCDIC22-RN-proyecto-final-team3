import React, { Component } from 'react';
import { Image, View, Text } from 'react-native';
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
        <View style={LogInStyles(this.context).screen.style.content}>
          <View style={LogInStyles(this.context).screen.style.imageContent}>
            <Image source={require('../assets/wwu.png')} style={LogInStyles(this.context).screen.style.image} />
          </View>
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
          <View style={LogInStyles(this.context).screen.style.containerBtn}>
            <View style={LogInStyles(this.context).screen.style.containerDivider}>
              <View style={LogInStyles(this.context).screen.style.containerDividerInter}>
                <View style={LogInStyles(this.context).screen.style.divider} />
                <View>
                  <Text style={LogInStyles(this.context).screen.style.textLine}>Or log in with</Text>
                </View>
                <View style={LogInStyles(this.context).screen.style.divider} />
              </View>
            </View>
            <View style={LogInStyles(this.context).screen.style.containerBtnGoogle}>
              <CButtonIcon
                disabled={false}
                name={'google'}
                onPress={() => {
                  this.props.navigation.navigate('SignUp');
                }}
                style={LogInStyles(this.context).googleLoginButton}
              />
            </View>
          </View>
        </View>
      </View>
    );
  }
}
