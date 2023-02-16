import React, { Component } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, Text, View } from 'react-native';
import SignUpStyles from '../styles/SignUp';
import { ISignUpProps } from '../types/SignUp';

export default class LogIn extends Component<ISignUpProps> {
	constructor(props: ISignUpProps) {
		super(props);
	}

	render() {
		return (
			<View style={SignUpStyles.screen.style.container}>
				<StatusBar style='auto' />
				<Text>Open up ./src/screens/SignUp.tsx to start working on your app!</Text>
				<Button
					title='Go to Log In'
					onPress={() => {
						this.props.navigation.navigate('LogIn');
					}}
				/>
			</View>
		);
	}
}
