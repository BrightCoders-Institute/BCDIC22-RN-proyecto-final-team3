import { StyleSheet } from 'react-native';
import CButtonComponent from '../../components/CButton';
import CButtonStyle from '../components/CButton';
import CTextInputComponent from '../../components/CTextInput.js';
import CTextInputStyle from '../components/CTextInput';
import { IThemeContext } from '../../types/theme/context';

export default (context: IThemeContext) => {
  return {
    screen: {
      style: StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: context.colors.background,
          justifyContent: 'center',
        },
        text: {
          color: context.colors.text,
        },
      }),
    },
    input: { ...CTextInputStyle(context) } as CTextInputComponent['props']['style'],
    commonLoginButton: {
      ...CButtonStyle(context),
    } as CButtonComponent['props']['style'],
  };
};
