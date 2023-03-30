import { ComponentProps } from 'react';
import { ImageProps, TextProps, ViewProps } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
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
    icon: {
      color: ComponentProps<typeof FontAwesome>['color'];
      style: ComponentProps<typeof FontAwesome>['style'];
      size: ComponentProps<typeof FontAwesome>['size'];
    };
  };
};
