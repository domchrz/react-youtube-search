import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    fonts: {
      sansSerif: string;
      serif: string;
      icon: string;
    };
    colors: {
      font: string;
      main: string;
      secondary: string;
      background: string;
      action: string;
      warning: string;
    };
  }
}
