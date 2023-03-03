import { ButtonProps } from 'react-native-paper';

export type ICButtonProps = {
  disabled?: ButtonProps['disabled'];
  loading?: ButtonProps['loading'];
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
