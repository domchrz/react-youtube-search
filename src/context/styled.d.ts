import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    fonts: {
      serif: string;
      sansSerif: string;
      mono: string;
      materialIcon: string;
    };
    colors: {
      main: string;
      secondary: string;
      secondaryContrast: string;
      mainContrast: string;
      action: string;
      warning: string;
    };
    effects: {
      borderRadius: string;
      boxShadow: string;
    };
  }
}
