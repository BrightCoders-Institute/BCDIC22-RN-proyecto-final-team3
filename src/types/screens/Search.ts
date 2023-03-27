import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { OWMALocationAndWeather } from '../client/OWMA';

import { RootStackParamList } from '../navigation/RootStackParamList';

export type ISearchProps = NativeStackScreenProps<RootStackParamList, 'Search'>;

export type ISearchState = {
  search: string;
  locations: OWMALocationAndWeather[];
  events: {
    focus: () => void;
  };
};
