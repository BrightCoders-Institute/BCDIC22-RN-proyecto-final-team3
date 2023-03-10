import { StyleSheet } from 'react-native';
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
        text: {
          color: context.colors.text,
        },
      }),
    },
    weatherWidget: {
      ...CWWidgetStyle(context),
    } as CWWidgetComponent['props']['style'],
  };
};
