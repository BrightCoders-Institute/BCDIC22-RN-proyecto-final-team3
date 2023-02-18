import { StyleSheet } from 'react-native';
import { IFollowingContext } from '../types/Following';

export default (context: IFollowingContext) => {
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
