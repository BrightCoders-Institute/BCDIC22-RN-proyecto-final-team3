import React, { Component } from 'react';
import { createNativeStackNavigator, NativeStackNavigationOptions } from '@react-navigation/native-stack';
import { EventRegister } from 'react-native-event-listeners';
import { Ionicons } from '@expo/vector-icons';
import LogIn from '../screens/LogIn';
import SignUp from '../screens/SignUp';
import { INavigationProps } from '../types/Navigation';
import { RootStackParamList } from '../types/RootStackParamList';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default class Navigation extends Component<INavigationProps> {
	constructor(props: INavigationProps) {
		super(props);
	}

	headerRight: NativeStackNavigationOptions['headerRight'] = () => {
		return this.props.mode ? (
			<Ionicons name={'moon'} size={24} color={'white'} onPress={() => this.onThemeChange(this.props.mode)} />
		) : (
			<Ionicons name={'sunny'} size={24} color={'black'} onPress={() => this.onThemeChange(this.props.mode)} />
		);
	};

	onThemeChange = (value: boolean) => {
		this.setState({ mode: !value });
		EventRegister.emit('changeTheme', !value);
	};

	render() {
		return (
			<Stack.Navigator initialRouteName='LogIn'>
				<Stack.Screen
					name='LogIn'
					component={LogIn}
					options={{
						title: 'Log in',
						headerRight: this.headerRight,
					}}
					initialParams={{ mode: this.props.mode }}
				/>
				<Stack.Screen
					name='SignUp'
					component={SignUp}
					options={{
						title: 'Sign up',
						headerRight: this.headerRight,
					}}
					initialParams={{ mode: this.props.mode }}
				/>
			</Stack.Navigator>
		);
	}
}
