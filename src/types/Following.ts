import { ContextType } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import ThemeContext from '../theme/ThemeContext';

import { RootStackParamList } from './RootStackParamList';

export type IFollowingProps = NativeStackScreenProps<RootStackParamList, 'Following'>;

export type IFollowingState = {
	search: string;
};

export type IFollowingContext = ContextType<typeof ThemeContext>;
