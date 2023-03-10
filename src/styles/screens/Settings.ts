import { StyleSheet } from 'react-native';
import { IThemeContext } from '../../types/theme/context';

export default (context: IThemeContext) => {
  return {
    screen: {
      style: StyleSheet.create({
        container: {
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        },
        text: {
          color: context.colors.text,
        },
      }),
    },
  };
};
