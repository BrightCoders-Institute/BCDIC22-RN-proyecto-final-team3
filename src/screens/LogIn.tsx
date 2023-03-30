import React, { Component } from 'react';
import { Alert, Image, View, Text } from 'react-native';
import auth from '@react-native-firebase/auth';
import { Formik } from 'formik';
import CButton from '../components/CButton';
import CButtonIcon from '../components/CButtonIcon';
import CTextInput from '../components/CTextInput';
import { GoogleSignin } from '../firebase/config';
import validator from '../functions/validator';
import LogInStyles from '../styles/screens/LogIn';
import ThemeContext from '../theme/context';
import { ILogInProps, ILogInState, ILogInFormikProps } from '../types/screens/LogIn';
import { IThemeContext } from '../types/theme/context';

export default class LogIn extends Component<ILogInProps, ILogInState> {
  static contextType = ThemeContext;
  declare context: IThemeContext;

  constructor(props: ILogInProps) {
    super(props);
    this.state = {
      formikProps: {
        email: '',
        password: '',
      },
    };
  }

  emailValidator = (formikProps: ILogInFormikProps) => {
    return formikProps.values.email !== '' ? !validator.email.check(formikProps.values.email) : false;
  };

  passwordValidator = (formikProps: ILogInFormikProps) => {
    return formikProps.values.password !== '' ? !validator.password.check(formikProps.values.password) : false;
  };

  loginButtonValidator = (formikProps: ILogInFormikProps) => {
    return formikProps.values.email && formikProps.values.password
      ? !(validator.email.check(formikProps.values.email) && validator.password.check(formikProps.values.password))
      : true;
  };

  onEmailLogIn = async (formikProps: ILogInFormikProps) => {
    try {
      await auth().signInWithEmailAndPassword(formikProps.values.email, formikProps.values.password);
      formikProps.handleSubmit();
      this.props.navigation.navigate('LoggedTab');
    } catch (error) {
      if (error instanceof Error) {
        Alert.alert('Error', error.message);
      } else {
        console.error(error);
      }
    }
  };

  onGoogleLogIn = async (formikProps: ILogInFormikProps) => {
    try {
      await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
      const idToken = (await GoogleSignin.signIn()).idToken;
      const credential = auth.GoogleAuthProvider.credential(idToken);
      await auth().signInWithCredential(credential);
      formikProps.handleSubmit();
      this.props.navigation.navigate('LoggedTab');
    } catch (error) {
      if (error instanceof Error) {
        Alert.alert('Error', error.message);
      } else {
        console.error(error);
      }
    }
  };

  render() {
    return (
      <View style={LogInStyles(this.context).screen.style.container}>
        <View style={LogInStyles(this.context).screen.style.content}>
          <Formik
            initialValues={this.state.formikProps}
            onSubmit={(values, formikHelpers) => {
              formikHelpers.resetForm();
              validator.email.clear();
              validator.password.clear();
            }}
          >
            {(formikProps) => (
              <View>
                <View style={LogInStyles(this.context).screen.style.imageContent}>
                  <Image source={require('../assets/wwu.png')} style={LogInStyles(this.context).screen.style.image} />
                </View>
                <CTextInput
                  error={{
                    active: this.emailValidator(formikProps),
                    message: 'Email address is invalid',
                  }}
                  style={LogInStyles(this.context).input}
                  type={'email'}
                  value={formikProps.values.email}
                  onChangeText={(text) => formikProps.setFieldValue('email', text)}
                />
                <CTextInput
                  error={{
                    active: this.passwordValidator(formikProps),
                    message: 'Password is incorrect',
                  }}
                  style={LogInStyles(this.context).input}
                  type={'password'}
                  value={formikProps.values.password}
                  onChangeText={(text) => formikProps.setFieldValue('password', text)}
                />
                <CButton
                  disabled={this.loginButtonValidator(formikProps)}
                  onPress={async () => {
                    await this.onEmailLogIn(formikProps);
                  }}
                  style={LogInStyles(this.context).commonLoginButton}
                  title={'Log in'}
                />
                <View style={LogInStyles(this.context).screen.style.textNav}>
                  <Text style={LogInStyles(this.context).screen.style.text}>
                    Don't have an account?{' '}
                    <Text
                      style={LogInStyles(this.context).screen.style.textLink}
                      onPress={() => this.props.navigation.navigate('SignUp')}
                    >
                      Sign Up
                    </Text>
                  </Text>
                </View>
                <View style={LogInStyles(this.context).screen.style.containerBtn}>
                  <View style={LogInStyles(this.context).screen.style.containerDivider}>
                    <View style={LogInStyles(this.context).screen.style.containerDividerInter}>
                      <View style={LogInStyles(this.context).screen.style.divider} />
                      <View>
                        <Text style={LogInStyles(this.context).screen.style.textLine}>Or Log In with</Text>
                      </View>
                      <View style={LogInStyles(this.context).screen.style.divider} />
                    </View>
                  </View>
                  <View style={LogInStyles(this.context).screen.style.containerBtnGoogle}>
                    <CButtonIcon
                      disabled={false}
                      name={'google'}
                      onPress={async () => {
                        await this.onGoogleLogIn(formikProps);
                      }}
                      style={LogInStyles(this.context).googleLoginButton}
                    />
                  </View>
                </View>
              </View>
            )}
          </Formik>
        </View>
      </View>
    );
  }
}
