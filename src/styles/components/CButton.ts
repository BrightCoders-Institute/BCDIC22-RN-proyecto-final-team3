import CButton from '../../components/CButton';
import { IThemeContext } from '../../types/theme/context';

export default (context: IThemeContext) => {
  return {
    buttonStyle: { borderRadius: 8 },
    buttonColor: context.colors.button.default.background,
    mode: 'contained',
    textColor: context.colors.button.default.text,
    uppercase: true,
  } as CButton['props']['style'];
};
