import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { RootStackParamList } from '../navigation/RootStackParamList';

export type ISearchProps = NativeStackScreenProps<RootStackParamList, 'Search'>;

export type ISearchState = {
  search: string;
};
