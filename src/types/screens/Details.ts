import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ForecastWeather as OWMAForecastWeather } from 'openweather-api-node';
import { OWMALocationAndWeather } from '../client/OWMA.js';

import { RootStackParamList } from '../navigation/RootStackParamList';

export type IDetailsProps = NativeStackScreenProps<RootStackParamList, 'Details'>;

export type IDetailsState = {
  following?: boolean;
  location?: OWMALocationAndWeather & { forecast?: OWMAForecastWeather[] };
};
