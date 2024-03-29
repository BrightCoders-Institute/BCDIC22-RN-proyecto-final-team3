import { ComponentProps } from 'react';
import { StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { IThemeContext } from '../../types/theme/context';

export default (context: IThemeContext) => {
  return {
    screen: {
      style: StyleSheet.create({
        container: {
          flex: 1,
        },
        content: {
          marginHorizontal: 20,
        },
        dividerOff: {
          borderBottomWidth: 0,
        },
        cellEnd: {
          justifyContent: 'flex-end',
        },
        cellCenter: {
          justifyContent: 'center',
        },
        text: {
          color: context.colors.text,
        },
      }),
      icon: {
        color: context.colors.text as ComponentProps<typeof MaterialCommunityIcons>['color'],
        size: 24 as ComponentProps<typeof MaterialCommunityIcons>['size'],
        style: { alignSelf: 'center', marginRight: 8 } as ComponentProps<typeof MaterialCommunityIcons>['style'],
      },
    },
  };
};
