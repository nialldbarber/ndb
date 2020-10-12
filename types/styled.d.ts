import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      white: string;
      fadedWhite: string;
      black: string;
      green: string;
      pink: string;
      orange: string;
    };
    font: {};
    animation: {
      swoop: string;
      btn: string;
    };
  }
}
