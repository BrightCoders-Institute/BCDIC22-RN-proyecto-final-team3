import { ContextType } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import ThemeContext from '../theme/ThemeContext';

import { RootStackParamList } from './RootStackParamList';

export type IDetailsProps = NativeStackScreenProps<RootStackParamList, 'Details'>;

export type IDetailsContext = ContextType<typeof ThemeContext>;
