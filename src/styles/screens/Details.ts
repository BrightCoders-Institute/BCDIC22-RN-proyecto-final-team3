import { StyleSheet } from 'react-native';
import CButtonComponent from '../../components/CButton';
import CButtonStyle from '../components/CButton';
import CWDetailsComponent from '../../components/CWDetails';
import CWDetailsStyle from '../components/CWDetails';
import CWInfoComponent from '../../components/CWInfo';
import CWInfoStyle from '../components/CWInfo';
import CWWidgetComponent from '../../components/CWWidget';
import CWWidgetStyle from '../components/CWWidget';
import CWWindComponent from '../../components/CWWind';
import CWWindStyle from '../components/CWWind';
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
          marginVertical: 15,
        },
        text: {
          color: context.colors.text,
        },
        contendInfo: {
          marginVertical: 5,
        },
        loadingBox: {
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        },
      }),
    },
    addedButton: {
      ...CButtonStyle(context),
      buttonColor: context.colors.button.added.background,
      textColor: context.colors.button.added.text,
      icon: {
        source: 'check-circle',
        direction: 'ltr',
      },
    } as CButtonComponent['props']['style'],
    notAddedButton: {
      ...CButtonStyle(context),
      buttonColor: 'transparent',
      textColor: context.colors.button.notAdded.text,
      icon: {
        source: 'plus-circle',
        direction: 'ltr',
      },
    } as CButtonComponent['props']['style'],
    weatherDetails: {
      ...CWDetailsStyle(context),
    } as CWDetailsComponent['props']['style'],
    weatherInfo: {
      ...CWInfoStyle(context),
    } as CWInfoComponent['props']['style'],
    weatherWidget: {
      ...CWWidgetStyle(context),
    } as CWWidgetComponent['props']['style'],
    weatherWind: {
      ...CWWindStyle(context),
    } as CWWindComponent['props']['style'],
  };
};
