import { StyleSheet } from 'react-native';
import { ISettingsContext } from '../types/Settings';

export default (context: ISettingsContext) => {
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
