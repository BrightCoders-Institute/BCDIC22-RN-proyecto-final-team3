import { ButtonProps } from 'react-native-paper';

export type ICButtonProps = {
  disabled?: ButtonProps['disabled'];
  onPress?: ButtonProps['onPress'];
  title: ButtonProps['children'];
  style?: {
    buttonColor?: ButtonProps['buttonColor'];
    buttonStyle?: ButtonProps['style'];
    contentStyle?: ButtonProps['contentStyle'];
    mode?: ButtonProps['mode'];
    textColor?: ButtonProps['textColor'];
    uppercase?: ButtonProps['uppercase'];
    icon?: ButtonProps['icon'];
  };
};
