import { ComponentProps } from 'react';
import { ViewProps, TextProps } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { CurrentWeather as OWMACurrentWeather } from 'openweather-api-node';

export type ICWWindProps = {
  data: OWMACurrentWeather;
  style?: {
    compassContainer: ViewProps['style'];
    compassText: TextProps['style'];
    compassTextContainer: TextProps['style'];
    container: ViewProps['style'];
    content: ViewProps['style'];
    elements: ViewProps['style'];
    titleText: TextProps['style'];
    textCenter: TextProps['style'];
    textCenterSpace: TextProps['style'];
    windContainer: ViewProps['style'];
    windText: TextProps['style'];
    windTextContainer: TextProps['style'];
    windIcon: {
      color: ComponentProps<typeof MaterialCommunityIcons>['color'];
    };
  };
};
