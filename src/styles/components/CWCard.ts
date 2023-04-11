import CWCard from '../../components/CWCard';
import { IThemeContext } from '../../types/theme/context';

export default (context: IThemeContext) => {
  return {
    container: { backgroundColor: context.colors.card, borderRadius: 8 },
    content: {
      alignContent: 'center',
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      margin: 5,
      padding: 10,
    },
    icon: {
      height: 80,
      width: 80,
    },
    iconBox: { alignContent: 'center', width: '30%' },
    textBox: { alignContent: 'center', flexShrink: 1, width: '70%' },
    title: {
      city: {
        width: '75%',
        color: context.colors.text,
        fontSize: 20,
        flexShrink: 1,
      },
      degrees: {
        color: context.colors.text,
        fontSize: 50,
        flexShrink: 1,
      },
    },
  } as CWCard['props']['style'];
};
