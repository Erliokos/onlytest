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
    padding: 0 clamp(16px, 5%, 20px) 0 clamp(16px, 10%, 20px);
  `)}
`;

export const HorizontalLine = styled.div`
  position: absolute;
  top: 50%;
  width: 100%;
  height: 1px;
  opacity: 10%;
  background: ${({ theme }) => theme.colors.text};
`

export const VerticalLine = styled.div<{ left: string }>`
  position: absolute;
  top: 0;
  left:  ${({ left }) => left};
  width: 1px;
  height: 100%;
  opacity: 10%;
  background: ${({ theme }) => theme.colors.text};
`

export const Divider = styled.div`
  width: 100%;
  height: 2px;
  opacity: 10%;
  background: ${({ theme }) => theme.colors.text};
  margin-bottom: 16px;
`
