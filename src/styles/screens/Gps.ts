import { StyleSheet } from 'react-native';
import CWDetailsComponent from '../../components/CWDetails';
import CWDetailsStyle from '../components/CWDetails';
import CWInfoComponent from '../../components/CWInfo';
import CWInfoStyle from '../components/CWInfo';
import CWWidgetComponent from '../../components/CWWidget';
import CWWidgetStyle from '../components/CWWidget';
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
          paddingTop: 15,
        },
        text: {
          color: context.colors.text,
        },
        contendInfo: {
          paddingBottom: 15,
          paddingTop: 15,
        },
      }),
    },
    weatherDetails: {
      ...CWDetailsStyle(context),
    } as CWDetailsComponent['props']['style'],
    weatherInfo: {
      ...CWInfoStyle(context),
    } as CWInfoComponent['props']['style'],
    weatherWidget: {
      ...CWWidgetStyle(context),
    } as CWWidgetComponent['props']['style'],
  };
};
