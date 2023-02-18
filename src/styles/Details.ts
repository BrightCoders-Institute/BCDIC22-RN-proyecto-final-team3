import { StyleSheet } from 'react-native';
import { IDetailsContext } from '../types/Details';

export default (context: IDetailsContext) => {
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
