import CWInfo from '../../components/CWInfo';
import { IThemeContext } from '../../types/theme/context';

export default (context: IThemeContext) => {
  return {
    container: {
      width: '100%',
      height: 60,
      borderRadius: 15,
      backgroundColor: context.colors.card,
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      paddingTop: 7,
    },
    textCenter: {
      color: context.colors.text,
      textAlign: 'center',
    },
    textCenterSpace: {
      color: context.colors.text,
      textAlign: 'center',
      marginBottom: 5,
    },
  } as CWInfo['props']['style'];
};
