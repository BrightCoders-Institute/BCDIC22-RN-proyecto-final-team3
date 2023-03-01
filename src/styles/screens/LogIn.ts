import { StyleSheet } from 'react-native';
import CTextInput from '../components/CTextInput';
import { IThemeContext } from '../../types/theme/ThemeContext';

export default (context: IThemeContext) => {
  return {
    screen: {
      style: StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: context.colors.primary,
          justifyContent: 'center',
        },
        text: {
          color: context.colors.text,
        },
      }),
    },
    input: CTextInput(context),
  };
};
