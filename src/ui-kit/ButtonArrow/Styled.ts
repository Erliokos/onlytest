import styled from 'styled-components'

export const Icon = styled.svg<{ arrowLeft?: boolean}>`
  width: 6px;
  height: 12px;
  stroke: ${({ theme }) => theme.colors.border};
  transform: ${({ arrowLeft }) => `scaleX(${arrowLeft ? -1 : 1})`};
  stroke-width: 2;
  padding-left: 2px
`;
