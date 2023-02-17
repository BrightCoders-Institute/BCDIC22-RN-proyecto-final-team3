import React, { Component } from 'react';
import { Button, Text, View } from 'react-native';
import ThemeContext from '../theme/ThemeContext';
import SignUpStyles from '../styles/SignUp';
import { ISignUpProps, ISignUpContext } from '../types/SignUp';

export default class LogIn extends Component<ISignUpProps> {
	static contextType = ThemeContext;
	declare context: ISignUpContext;

	constructor(props: ISignUpProps) {
		super(props);
	}

	render() {
		return (
			<View style={SignUpStyles(this.context).screen.style.container}>
				<Text style={SignUpStyles(this.context).screen.style.text}>
					Open up ./src/screens/SignUp.tsx to start working on your app!
				</Text>
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
