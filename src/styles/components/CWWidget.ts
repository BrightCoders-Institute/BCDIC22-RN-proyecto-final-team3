import { StyleSheet } from 'react-native';
import CWWidget from '../../components/CWWidget';
import { IThemeContext } from '../../types/theme/context';

export default (context: IThemeContext) => {
  return {
    rowContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    image: {
      width: 200,
      height: 200,
    },
    textCity: {
      fontSize: 40,
      marginHorizontal: 5,
      color: context.colors.text,
    },
    textDegrees: {
      fontSize: 50,
      fontWeight: '500',
      color: context.colors.text,
    },
    icon: {
      size: 24,
      style: { marginHorizontal: 5 },
      color: context.colors.text,
    },
  } as CWWidget['props']['style'];
};
