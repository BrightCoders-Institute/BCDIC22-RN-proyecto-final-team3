import CButtonIcon from '../../components/CButtonIcon';
import { IThemeContext } from '../../types/theme/context';

export default (context: IThemeContext) => {
  return {
    box: {
      style: {
        borderWidth: 2,
        borderColor: context.colors.buttonIcon.default.border,
        alignItems: 'center',
        justifyContent: 'center',
        width: 70,
        height: 70,
        backgroundColor: context.colors.buttonIcon.default.background,
        borderRadius: 100,
      },
    },
    icon: {
      size: 40,
      color: context.colors.buttonIcon.default.text,
    },
  } as CButtonIcon['props']['style'];
};
