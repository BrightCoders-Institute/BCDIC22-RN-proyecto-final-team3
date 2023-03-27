import CWDetails from '../../components/CWDetails';
import { IThemeContext } from '../../types/theme/context';

export default (context: IThemeContext) => {
  return {
    container: {
      alignItems: 'center',
      backgroundColor: context.colors.card,
      borderRadius: 8,
      paddingVertical: 10,
    },
    title: {
      box: {
        marginVertical: 5,
      },
      text: {
        color: context.colors.text,
      },
    },
    content: {
      contentContainerStyle: { flexGrow: 1, justifyContent: 'space-evenly' },
    },
    item: {
      day: { color: context.colors.text, textAlign: 'center', marginVertical: 5 },
      icon: { height: 70, width: 70, marginVertical: 5 },
      degrees: { color: context.colors.text, textAlign: 'center', marginVertical: 5 },
      time: { color: context.colors.text, textAlign: 'center', marginVertical: 5 },
    },
  } as CWDetails['props']['style'];
};
