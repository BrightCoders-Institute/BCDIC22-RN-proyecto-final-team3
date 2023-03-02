import { StyleSheet } from 'react-native';
import CButtonComponent from '../../components/CButton';
import CButtonStyle from '../components/CButton';
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
    commonLoginButton: {
      ...CButtonStyle(context),
      buttonColor: '#0B6EFE',
      textColor: 'white',
    } as CButtonComponent['props']['style'],
  };
};
