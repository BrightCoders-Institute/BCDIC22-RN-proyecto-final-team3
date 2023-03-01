import { ComponentProps } from 'react';
import { TextProps, ViewProps } from 'react-native';
import { TextInputIconProps, TextInputProps } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export type ICTextInputProps = {
  error?: {
    active?: boolean;
    message?: string;
  };
  label?: string;
  onChangeText?: TextInputProps['onChangeText'];
  type?: 'email' | 'password' | 'text';
  value?: string;
  style?: {
    error?: {
      icon?: ComponentProps<typeof MaterialCommunityIcons>;
      text: TextProps['style'];
      view: ViewProps['style'];
    };
    box?: { activeOutlineColor?: TextInputProps['activeOutlineColor'] } & { mode?: TextInputProps['mode'] } & {
      icon?: TextInputIconProps;
    } & { style?: TextInputProps['style'] };
    text?: TextProps['style'];
    view?: ViewProps['style'];
  };
};

export type ICTextInputsState = {
  hidden?: boolean;
};
