import React, { Component } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, Text, View } from 'react-native';
import LogInStyles from '../styles/LogIn';
import { ILogInProps } from '../types/LogIn';

export default class LogIn extends Component<ILogInProps> {
	constructor(props: ILogInProps) {
		super(props);
	}

	render() {
		return (
			<View style={LogInStyles.screen.style.container}>
				<StatusBar style='auto' />
				<Text>Open up ./src/screens/LogIn.tsx to start working on your app!</Text>
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
