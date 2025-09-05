import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      background: string;
      text: string;
      border: string;
      gradientA: string;
      gradientB: string;
    };
    fonts: {
      main: string;
      heading: string
    };
    spacing: {
      small: string;
      medium: string;
      large: string;
    };
  }
}
