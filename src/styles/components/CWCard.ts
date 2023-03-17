import CWCard from '../../components/CWCard';
import { IThemeContext } from '../../types/theme/context';

export default (context: IThemeContext) => {
  return {
    container: { backgroundColor: context.colors.card, borderRadius: 8 },
    content: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      margin: 5,
      padding: 10,
    },
    icon: {
      height: 100,
      width: 100,
    },
    title: {
      city: {
        fontSize: 20,
        color: context.colors.text,
      },
      degrees: {
        fontSize: 50,
        color: context.colors.text,
      },
    },
  } as CWCard['props']['style'];
};
