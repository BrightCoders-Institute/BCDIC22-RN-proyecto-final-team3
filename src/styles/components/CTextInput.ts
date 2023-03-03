import CTextInput from '../../components/CTextInput';
import { IThemeContext } from '../../types/theme/context';

export default (context: IThemeContext) => {
  return {
    box: {
      mode: 'outlined',
      activeOutlineColor: context.colors.input.default.border.active,
      textColor: context.colors.input.default.text,
      style: {
        backgroundColor: context.colors.input.default.background,
      },
      icon: {
        iconColor: context.colors.input.default.text,
      },
    },
    error: {
      icon: {
        name: 'alert-circle',
        style: { textAlignVertical: 'center' },
        size: 20,
        color: 'red',
      },
      text: {
        color: 'red',
        textAlignVertical: 'center',
        flexShrink: 1,
      },
      view: {
        flexDirection: 'row',
      },
    },
  } as CTextInput['props']['style'];
};
