import { ImageProps, ViewProps, TextProps } from 'react-native';

export type ICWCardProps = {
  data: {
    icon: string;
    city: string;
    state?: string;
    country: string;
    degrees: number;
  };
  style: {
    container: ViewProps['style'];
    content: ViewProps['style'];
    icon: ImageProps['style'];
    iconBox: ViewProps['style'];
    textBox: ViewProps['style'];
    title: {
      city: TextProps['style'];
      degrees: TextProps['style'];
    };
  };
};
