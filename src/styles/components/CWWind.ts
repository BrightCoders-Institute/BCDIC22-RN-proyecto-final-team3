import CWWind from '../../components/CWWind';
import { IThemeContext } from '../../types/theme/context';

export default (context: IThemeContext) => {
  return {
    compassContainer: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    compassText: {
      color: context.colors.text,
    },
    compassTextContainer: {
      marginTop: 5,
    },
    container: {
      borderRadius: 8,
      backgroundColor: context.colors.card,
      paddingVertical: 10,
    },
    content: {
      marginVertical: 5,
    },
    elements: {
      flexDirection: 'row',
      justifyContent: 'space-evenly',
    },
    titleText: {
      color: context.colors.text,
    },
    textCenter: {
      textAlign: 'center',
    },
    windContainer: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    windText: {
      color: context.colors.text,
    },
    windTextContainer: {
      marginTop: 8,
    },
    windIcon: {
      color: context.colors.text,
    },
  } as CWWind['props']['style'];
};
