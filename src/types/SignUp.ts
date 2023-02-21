import { ContextType } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import ThemeContext from '../theme/ThemeContext';

import { RootStackParamList } from './RootStackParamList';

export type ISignUpProps = NativeStackScreenProps<RootStackParamList, 'SignUp'>;

export type ISignUpContext = ContextType<typeof ThemeContext>;