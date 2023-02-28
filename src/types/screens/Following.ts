import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { RootStackParamList } from '../navigation/RootStackParamList';

export type IFollowingProps = NativeStackScreenProps<RootStackParamList, 'Following'>;

export type IFollowingState = {
  search: string;
};
