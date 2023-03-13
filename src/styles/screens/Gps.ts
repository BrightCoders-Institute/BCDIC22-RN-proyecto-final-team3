import { StyleSheet } from 'react-native';
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
          alignItems: 'center',
          justifyContent: 'center',
        },
        content: {
          marginHorizontal: 20,
        },
        text: {
          color: context.colors.text,
        },
      }),
    },
    weatherWidget: {
      ...CWWidgetStyle(context),
    } as CWWidgetComponent['props']['style'],
    weatherInfo: {
      ...CWInfoStyle(context),
    } as CWInfoComponent['props']['style'],
  };
};
