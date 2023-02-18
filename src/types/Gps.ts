import { ContextType } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import ThemeContext from '../theme/ThemeContext';

import { RootStackParamList } from './RootStackParamList';

export type IGpsProps = NativeStackScreenProps<RootStackParamList, 'Gps'>;

export type IGpsState = {
  search: string;
};

export type IGpsContext = ContextType<typeof ThemeContext>;
