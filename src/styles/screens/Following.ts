import { StyleSheet } from 'react-native';
import CWCardComponent from '../../components/CWCard';
import CWCardStyle from '../../styles/components/CWCard';

import { IThemeContext } from '../../types/theme/context';

export default (context: IThemeContext) => {
  return {
    screen: {
      style: StyleSheet.create({
        container: {
          flex: 1,
        },
        content: {},
      }),
    },
    weatherCard: {
      ...CWCardStyle(context),
    } as CWCardComponent['props']['style'],
  };
};
