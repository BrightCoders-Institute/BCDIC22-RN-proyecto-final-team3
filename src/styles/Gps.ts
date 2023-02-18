import { StyleSheet } from 'react-native';
import { IGpsContext } from '../types/Gps';

export default (context: IGpsContext) => {
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
