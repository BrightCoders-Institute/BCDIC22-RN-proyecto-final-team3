import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { FormikProps } from 'formik';

import { RootStackParamList } from '../navigation/RootStackParamList';

export type ILogInProps = NativeStackScreenProps<RootStackParamList, 'LogIn'>;

export type ILogInState = {
  fomikProps: {
    email?: string;
    password?: string;
  };
};

export type ILogInFormikProps = FormikProps<ILogInState['fomikProps']>;
