import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      white: string;
      fadedWhite: string;
      darkBlack: string;
      darkerBlack: string;
      black: string;
      green: string;
      pink: string;
      orange: string;
    };
    dimensions: {
      maxWidth: string;
    };
    font: {
      main: string;
    };
    animation: {
      swoop: string;
      btn: string;
    };
  }
}
