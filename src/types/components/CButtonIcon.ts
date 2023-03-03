import { ComponentProps } from 'react';
import { TouchableOpacityProps } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export type ICButtonIcon = {
  name: ComponentProps<typeof FontAwesome>['name'];
  onPress?: TouchableOpacityProps['onPress'];
  disabled?: TouchableOpacityProps['disabled'];
  style?: {
    box?: TouchableOpacityProps;
    icon?: ComponentProps<typeof FontAwesome>;
  };
};
