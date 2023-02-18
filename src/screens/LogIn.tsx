import React, { Component } from 'react';
import { Button, Text, View } from 'react-native';
import ThemeContext from '../theme/ThemeContext';
import LogInStyles from '../styles/LogIn';
import { ILogInProps, ILogInContext } from '../types/LogIn';

export default class LogIn extends Component<ILogInProps> {
	static contextType = ThemeContext;
	declare context: ILogInContext;

	constructor(props: ILogInProps) {
		super(props);
	}

	render() {
		return (
			<View style={LogInStyles(this.context).screen.style.container}>
				<Text style={LogInStyles(this.context).screen.style.text}>
					Open up ./src/screens/LogIn.tsx to start working on your app!
				</Text>
				<Button
					title='Go to Sign Up'
					onPress={() => {
						this.props.navigation.navigate('SignUp', { mode: this.props.route.params.mode });
					}}
				/>
			</View>
		);
	}
}
