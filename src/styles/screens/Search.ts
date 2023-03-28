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
        cardBox: { marginVertical: 5, marginHorizontal: 20 },
      }),
    },
    weatherCard: {
      ...CWCardStyle(context),
    } as CWCardComponent['props']['style'],
  };
};
