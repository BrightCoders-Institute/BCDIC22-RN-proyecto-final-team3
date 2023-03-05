import { createContext } from 'react';
import { themeMode } from './themes';
import { IThemeContext } from '../types/theme/context';

export default createContext<IThemeContext>(themeMode.light || themeMode.dark);
