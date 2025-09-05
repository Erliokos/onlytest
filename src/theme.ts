import { DefaultTheme, css } from "styled-components";

export const breakpoints = {
  mobile: "768px",
};

export const theme: DefaultTheme  = {
  colors: {
    primary: "white",
    secondary: "#3877EE",
    background: "#FFFFFF",
    text: "#42567A",
    border: "rgba(48, 62, 88, 0.5)",
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
