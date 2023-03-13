import { NativeStackScreenProps } from '@react-navigation/native-stack';
import * as Location from 'expo-location';
import { Location as OWMALocation, CurrentWeather as OWMACurrentWeather } from 'openweather-api-node';

import { RootStackParamList } from '../navigation/RootStackParamList';

export type IGpsProps = NativeStackScreenProps<RootStackParamList, 'Gps'>;

export type IGpsState = {
  events: {
    navigation: {
      focus?: () => void;
    };
    location: {
      update?: Location.LocationSubscription;
    };
  };
  location: {
    enabled?: boolean;
    data?: {
      coords: Location.LocationObject['coords'];
      timestamp: Location.LocationObject['timestamp'];
      city?: OWMALocation | null;
    };
    message?: Error['message'];
  };
  search: string;
  tasks: {
    location: string;
  };
  conditions?: OWMACurrentWeather;
};
