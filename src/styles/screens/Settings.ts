import { StyleSheet } from 'react-native';
import CButtonComponent from '../../components/CButton';
import CButtonStyle from '../components/CButton';
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
        imageContainer: {
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 10,
        },
        image: {
          width: 150,
          height: 150,
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
    },
    logOutButton: {
      ...CButtonStyle(context),
      buttonColor: 'transparent',
      textColor: 'red',
      icon: {
        source: 'logout',
        direction: 'ltr',
      },
    } as CButtonComponent['props']['style'],
  };
};
