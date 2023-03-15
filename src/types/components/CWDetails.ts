import { FlatListProps, ImageProps, ViewProps, TextProps } from 'react-native';
import { ForecastWeather as OWMAForecastWeather } from 'openweather-api-node';

export type ICWDetailsProps = {
  data: OWMAForecastWeather[];
  style: {
    container: ViewProps['style'];
    title: {
      box: ViewProps['style'];
      text: TextProps['style'];
    };
    content: {
      style: FlatListProps<OWMAForecastWeather[]>['style'];
      contentContainerStyle: FlatListProps<OWMAForecastWeather[]>['contentContainerStyle'];
    };
    item: {
      day: TextProps['style'];
      icon: ImageProps['style'];
      degrees: TextProps['style'];
      time: TextProps['style'];
    };
    textCenterSpace: TextProps['style'];
  };
};
