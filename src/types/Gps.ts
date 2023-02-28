import { ContextType } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import * as Location from 'expo-location';
import ThemeContext from '../theme/ThemeContext';
import { RootStackParamList } from './RootStackParamList';

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
    data?: Location.LocationObject;
    message?: unknown;
  };
  search: string;
  tasks: {
    location: string;
  };
};
