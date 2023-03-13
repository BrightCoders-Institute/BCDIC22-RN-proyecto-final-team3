export type IThemeContext = {
  isDark?: boolean;
  colors: {
    card: string;
    background: string;
    button: {
      default: {
        background: string;
        text: string;
      };
    };
    buttonIcon: {
      default: {
        background: string;
        border: string;
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
    link: string;
    text: string;
  };
};
