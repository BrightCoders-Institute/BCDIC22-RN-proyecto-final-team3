import { ContextType } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import ThemeContext from '../theme/ThemeContext';

import { RootStackParamList } from './RootStackParamList';

export type ISettingsProps = NativeStackScreenProps<RootStackParamList, 'Settings'>;

export type ISettingsState = {
  mode: boolean;
};

export type ISettingsContext = ContextType<typeof ThemeContext>;
