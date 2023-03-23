import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { CurrentWeather as OWMACurrentWeather, ForecastWeather as OWMAForecastWeather, Location as OWMALocation} from 'openweather-api-node';

import { RootStackParamList } from '../navigation/RootStackParamList';

export type IDetailsProps = NativeStackScreenProps<RootStackParamList, 'Details'>;

export type IDetailsState = {
  following?: boolean;
  location?: OWMALocation | null;
  conditions?: {
    current: OWMACurrentWeather;
    forecast: OWMAForecastWeather[];
  };
};
