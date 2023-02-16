import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LogIn from '../screens/LogIn';
import SignUp from '../screens/SignUp';

import { RootStackParamList } from '../types/RootStackParamList';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default class Navigation extends Component {
	render() {
		return (
			<NavigationContainer>
				<Stack.Navigator initialRouteName='LogIn'>
					<Stack.Screen name='LogIn' component={LogIn} options={{ title: 'Log in' }} />
					<Stack.Screen name='SignUp' component={SignUp} options={{ title: 'Sign up' }} />
				</Stack.Navigator>
			</NavigationContainer>
		);
	}
}
