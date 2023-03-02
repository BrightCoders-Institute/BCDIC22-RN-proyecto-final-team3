import CButton from '../../components/CButton';
import { IThemeContext } from '../../types/theme/ThemeContext';

export default (context: IThemeContext) => {
  return {
    buttonStyle: { borderRadius: 8 },
    buttonColor: context.colors.secondary,
    mode: 'contained',
    textColor: context.colors.text,
    uppercase: true,
  } as CButton['props']['style'];
};
