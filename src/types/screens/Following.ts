import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { OWMALocationAndWeather } from '../client/OWMA';

import { RootStackParamList } from '../navigation/RootStackParamList';

export type IFollowingProps = NativeStackScreenProps<RootStackParamList, 'Following'>;

export type IFollowingState = {
  search: string;
  following?: OWMALocationAndWeather[];
};
