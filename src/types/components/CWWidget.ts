import { ImageProps, TextProps, ViewProps } from 'react-native';
import { Location as OWMALocation } from 'openweather-api-node';

export type ICWWidgetProps = {
  data: {
    icon: string;
    city: OWMALocation;
    degrees: number;
  };
  style?: {
    container: ViewProps['style'];
    rowContainer: ViewProps['style'];
    image: ImageProps['style'];
    textDegrees: TextProps['style'];
    textCity: TextProps['style'];
  };
};
