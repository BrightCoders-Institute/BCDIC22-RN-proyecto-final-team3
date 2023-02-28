import { StyleSheet } from 'react-native';
import CTextInput from '../../components/CTextInput';
import { IThemeContext } from '../../types/ThemeContext';

export default (context: IThemeContext) => {
  return {
    box: {
      mode: 'outlined',
      activeOutlineColor: context.colors.text,
      icon: {
        iconColor: context.colors.text,
      },
    },
    error: {
      icon: {
        name: 'alert-circle',
        style: { textAlignVertical: 'center' },
        size: 20,
        color: 'red',
      },
      text: {
        color: 'red',
        textAlignVertical: 'center',
        flexShrink: 1,
      },
      view: {
        flexDirection: 'row',
      },
    },
  } as CTextInput['props']['style'];
};
