import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { FormikProps } from 'formik';

import { RootStackParamList } from '../navigation/RootStackParamList';

export type ISignUpProps = NativeStackScreenProps<RootStackParamList, 'SignUp'>;

export type ISignUpState = {
  formikProps: {
    name?: string;
    email?: string;
    password?: string;
  };
};

export type ISignUpFormikProps = FormikProps<ISignUpState['formikProps']>;
