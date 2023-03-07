import { StyleSheet } from 'react-native';
import CButtonComponent from '../../components/CButton';
import CButtonStyle from '../components/CButton';
import CButtonIconComponent from '../../components/CButtonIcon';
import CButtonIconStyle from '../components/CButtonIcon';
import CTextInputComponent from '../../components/CTextInput.js';
import CTextInputStyle from '../components/CTextInput';
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
        text: {
          color: context.colors.text,
        },
        textNav: {
          marginTop: 20,
          flexDirection: 'row',
          justifyContent: 'center',
        },
        imageContent: {
          alignItems: 'center',
          marginVertical: 10,
        },
        image: {
          width: 200,
          height: 200,
        },
        containerBtnGoogle: {
          flexDirection: 'row',
          marginVertical: 20,
        },
        divider: {
          flex: 1,
          height: 1,
          backgroundColor: context.colors.text,
        },
        textLine: {
          color: context.colors.text,
          width: 100,
          textAlign: 'center',
        },
        textLink: {
          textDecorationLine: 'underline',
          color: context.colors.link,
        },
        containerBtn: {
          alignItems: 'center',
          marginVertical: 20,
        },
        containerDividerInter: {
          flexDirection: 'row',
          alignItems: 'center',
        },
        containerDivider: {
          width: '100%',
        },
      }),
    },
    input: { ...CTextInputStyle(context) } as CTextInputComponent['props']['style'],
    commonLoginButton: {
      ...CButtonStyle(context),
    } as CButtonComponent['props']['style'],
    googleLoginButton: {
      ...CButtonIconStyle(context),
    } as CButtonIconComponent['props']['style'],
  };
};
