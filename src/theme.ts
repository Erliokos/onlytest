import { DefaultTheme, css } from "styled-components";

export const breakpoints = {
  mobile: "768px",
};

export const theme: DefaultTheme  = {
  colors: {
    primary: "white",
    background: "#FFFFFF",
    text: "#42567A",
    border: "#3877EE",
    gradientA: "#5D5FEF",
    gradientB: "#EF5DA8",
  },
  fonts: {
    main: "'PT Sans', sans-serif",
    heading: "'Bebas Neue', sans-serif",
  },
  spacing: {
    small: "8px",
    medium: "16px",
    large: "32px",
  },
}

export const media = {
  mobile: (styles: TemplateStringsArray | string) => css`
    @media (max-width: ${breakpoints.mobile}) {
      ${styles}
    }
  `,
};
