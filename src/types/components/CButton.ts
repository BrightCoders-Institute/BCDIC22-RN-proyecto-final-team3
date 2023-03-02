import { ButtonProps } from 'react-native-paper';

export type ICButtonProps = {
  disabled?: ButtonProps['disabled'];
  onPress?: ButtonProps['onPress'];
  title: ButtonProps['children'];
  style?: {
    contentStyle?: ButtonProps['contentStyle'];
    buttonColor?: ButtonProps['buttonColor'];
    mode?: ButtonProps['mode'];
    buttonStyle?: ButtonProps['style'];
    textColor?: ButtonProps['textColor'];
    uppercase?: ButtonProps['uppercase'];
    icon?: ButtonProps['icon'];
  };
};
