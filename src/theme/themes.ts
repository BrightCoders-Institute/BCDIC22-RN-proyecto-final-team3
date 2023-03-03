import { Theme, DarkTheme, DefaultTheme } from '@react-navigation/native';

import colors from './colors';

export const themeMode = {
  light: {
    isDark: false,
    colors: {
      background: colors.light.blue,
      button: {
        default: {
          background: colors.light.royalBlue,
          text: colors.general.white,
        },
      },
      buttonIcon: {
        default: {
          background: colors.general.white,
          border: colors.general.gray,
          text: colors.light.royalBlue,
        },
      },
      input: {
        default: {
          background: colors.general.white,
          icon: colors.general.black,
          text: colors.general.black,
          border: {
            default: colors.general.black,
            active: colors.light.royalBlue,
          },
        },
      },
      text: colors.general.black,
    },
  },
  dark: {
    isDark: true,
    colors: {
      background: colors.dark.darkBlue,
      button: {
        default: {
          background: colors.dark.softBlue,
          text: colors.general.black,
        },
      },
      buttonIcon: {
        default: {
          background: colors.general.black,
          border: colors.general.gray,
          text: colors.dark.softBlue,
        },
      },
      input: {
        default: {
          background: colors.general.black,
          icon: colors.general.white,
          text: colors.general.white,
          border: {
            default: colors.general.white,
            active: colors.dark.softBlue,
          },
        },
      },
      text: colors.general.white,
    },
  },
};

export const navigationThemeMode = {
  light: {
    ...DefaultTheme,
    dark: false,
    colors: {
      primary: colors.light.royalBlue,
      card: colors.light.bluesky,
      text: colors.general.black,
    },
  } as Theme,
  dark: {
    ...DarkTheme,
    dark: true,
    colors: {
      primary: colors.dark.softBlue,
      card: colors.dark.blueGrey,
      text: colors.general.white,
    },
  } as Theme,
};
