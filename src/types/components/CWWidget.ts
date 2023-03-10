import { ComponentProps } from 'react';
import { ImageProps, TextProps, ViewProps } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export type ICWWidgetProps = {
  data: {
    icon: string;
    city: string;
    degrees: string;
  };
  style: {
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
