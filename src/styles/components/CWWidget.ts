import CWWidget from '../../components/CWWidget';
import { IThemeContext } from '../../types/theme/context';

export default (context: IThemeContext) => {
  return {
    container: {
      backgroundColor: context.colors.card,
      borderRadius: 8,
      paddingVertical: 10,
    },
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
      width: '75%',
      textAlign: 'center',
      fontSize: 40,
      marginHorizontal: 5,
      color: context.colors.text,
    },
    textDegrees: {
      fontSize: 50,
      fontWeight: '500',
      color: context.colors.text,
    },
  } as CWWidget['props']['style'];
};
