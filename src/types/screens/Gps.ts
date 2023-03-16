import { NativeStackScreenProps } from '@react-navigation/native-stack';
import * as Location from 'expo-location';
import {
  Location as OWMALocation,
  CurrentWeather as OWMACurrentWeather,
  ForecastWeather as OWMAForecastWeather,
} from 'openweather-api-node';

import { RootStackParamList } from '../navigation/RootStackParamList';

export type IGpsProps = NativeStackScreenProps<RootStackParamList, 'Gps'>;

export type IGpsState = {
  conditions?: {
    current: OWMACurrentWeather;
    forecast: OWMAForecastWeather[];
  };
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
};
