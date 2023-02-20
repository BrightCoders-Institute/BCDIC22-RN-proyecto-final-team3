import { createContext } from 'react';
import theme from './theme';

export default createContext<{
  isDark?: boolean;
  colors: {
    primary: string;
    secondary: string;
    text: string;
  };
}>(theme.light || theme.dark);
