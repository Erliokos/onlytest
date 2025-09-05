import styled from 'styled-components'

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
