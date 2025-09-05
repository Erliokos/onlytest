import styled, { createGlobalStyle } from 'styled-components'
import { media } from './theme';

export const GlobalStyle = createGlobalStyle`
  html, body, #root {
    margin: 0;
    padding: 0;
    height: 100%;
    box-sizing: border-box;
  }
  body {
    font-family: ${({ theme }) => theme.fonts.main};
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    box-sizing: border-box;
  }
`;

export const MainContainer = styled.div`
  height: 100vh;
  padding: 0 clamp(16px, 5%, 160px) 0 clamp(16px, 10%, 320px);
  ${media.mobile(`
    padding: 0;
  `)}
`;
