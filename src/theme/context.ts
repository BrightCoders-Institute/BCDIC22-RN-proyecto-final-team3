import { createContext } from 'react';
import { themeMode } from './themes';

export default createContext<{
  isDark?: boolean;
  colors: {
    background: string;
    button: {
      default: {
        background: string;
        text: string;
      };
    };
    input: {
      default: {
        background: string;
        text: string;
        icon: string;
        border: {
          default: string;
          active: string;
        };
      };
    };
    text: string;
  };
}>(themeMode.light || themeMode.dark);
