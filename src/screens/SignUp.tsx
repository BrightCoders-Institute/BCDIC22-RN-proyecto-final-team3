import React, { Component } from 'react';
import { Alert, Image, Text, View } from 'react-native';
import auth from '@react-native-firebase/auth';
import { Formik } from 'formik';
import CButton from '../components/CButton';
import CButtonIcon from '../components/CButtonIcon';
import CTextInput from '../components/CTextInput';
import { GoogleSignin } from '../firebase/config';
import validator from '../functions/validator';
import SignUpStyles from '../styles/screens/SignUp';
import ThemeContext from '../theme/context';
import { ISignUpProps, ISignUpState, ISignUpFormikProps } from '../types/screens/SignUp';
import { IThemeContext } from '../types/theme/context';

export default class LogIn extends Component<ISignUpProps, ISignUpState> {
  static contextType = ThemeContext;
  declare context: IThemeContext;

  constructor(props: ISignUpProps) {
    super(props);
    this.state = {
      formikProps: {
        name: '',
        email: '',
        password: '',
      },
    };
  }

  emailValidator = (formikProps: ISignUpFormikProps) => {
    return formikProps.values.email !== '' ? !validator.email.check(formikProps.values.email) : false;
  };

  passwordValidator = (formikProps: ISignUpFormikProps) => {
    return formikProps.values.password !== '' ? !validator.password.check(formikProps.values.password) : false;
  };

  signupButtonValidator = (formikProps: ISignUpFormikProps) => {
    return formikProps.values.email && formikProps.values.password
      ? !(validator.email.check(formikProps.values.email) && validator.password.check(formikProps.values.password))
      : true;
  };

  onEmailSignUp = async (formikProps: ISignUpFormikProps) => {
    try {
      await auth().createUserWithEmailAndPassword(formikProps.values.email, formikProps.values.password);
      await auth().currentUser?.updateProfile({
        displayName: formikProps.values.name,
      });
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

  onGoogleSignUp = async (formikProps: ISignUpFormikProps) => {
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
      <View style={SignUpStyles(this.context).screen.style.container}>
        <View style={SignUpStyles(this.context).screen.style.content}>
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
                <View style={SignUpStyles(this.context).screen.style.imageContent}>
                  <Image source={require('../assets/wwu.png')} style={SignUpStyles(this.context).screen.style.image} />
                </View>
                <CTextInput
                  label={'name'}
                  style={SignUpStyles(this.context).input}
                  type={'text'}
                  value={formikProps.values.name}
                  onChangeText={(text) => formikProps.setFieldValue('name', text)}
                />
                <CTextInput
                  error={{
                    active: this.emailValidator(formikProps),
                    message: 'Email address is invalid',
                  }}
                  style={SignUpStyles(this.context).input}
                  type={'email'}
                  value={formikProps.values.email}
                  onChangeText={(text) => formikProps.setFieldValue('email', text)}
                />
                <CTextInput
                  error={{
                    active: this.passwordValidator(formikProps),
                    message: 'Password is incorrect',
                  }}
                  style={SignUpStyles(this.context).input}
                  type={'password'}
                  value={formikProps.values.password}
                  onChangeText={(text) => formikProps.setFieldValue('password', text)}
                />
                <CButton
                  disabled={this.signupButtonValidator(formikProps)}
                  onPress={async () => {
                    await this.onEmailSignUp(formikProps);
                  }}
                  style={SignUpStyles(this.context).commonLoginButton}
                  title={'Sign Up'}
                />
                <View style={SignUpStyles(this.context).screen.style.textNav}>
                  <Text style={SignUpStyles(this.context).screen.style.text}>
                    Do you have an account?{' '}
                    <Text
                      style={SignUpStyles(this.context).screen.style.textLink}
                      onPress={() => this.props.navigation.navigate('LogIn')}
                    >
                      Log In
                    </Text>
                  </Text>
                </View>
                <View style={SignUpStyles(this.context).screen.style.containerBtn}>
                  <View style={SignUpStyles(this.context).screen.style.containerDivider}>
                    <View style={SignUpStyles(this.context).screen.style.containerDividerInter}>
                      <View style={SignUpStyles(this.context).screen.style.divider} />
                      <View>
                        <Text style={SignUpStyles(this.context).screen.style.textLine}>Or Sign Up with</Text>
                      </View>
                      <View style={SignUpStyles(this.context).screen.style.divider} />
                    </View>
                  </View>
                  <View style={SignUpStyles(this.context).screen.style.containerBtnGoogle}>
                    <CButtonIcon
                      disabled={false}
                      name={'google'}
                      onPress={async () => {
                        await this.onGoogleSignUp(formikProps);
                      }}
                      style={SignUpStyles(this.context).googleLoginButton}
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
