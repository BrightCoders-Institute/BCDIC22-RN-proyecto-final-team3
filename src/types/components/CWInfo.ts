import { ViewProps, TextProps } from 'react-native';
import { CurrentWeather as OWMACurrentWeather } from 'openweather-api-node';

export type ICWInfoProps = {
  data: OWMACurrentWeather;
  style: {
    container: ViewProps['style'];
    textCenter: TextProps['style'];
    textCenterSpace: TextProps['style'];
  };
};
