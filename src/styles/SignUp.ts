import { StyleSheet } from 'react-native';
import { ISignUpContext } from '../types/SignUp';

export default (context: ISignUpContext) => {
	return {
		screen: {
			style: StyleSheet.create({
				container: {
					flex: 1,
					backgroundColor: context.colors.primary,
					alignItems: 'center',
					justifyContent: 'center',
				},
				text: {
					color: context.colors.text,
				},
			}),
		},
	};
};
