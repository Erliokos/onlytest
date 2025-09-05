import styled from 'styled-components'


export const HeaderContainer = styled.div`
  height: 120px;
  display: flex;
  gap: 78px;
  align-items: center;
`

export const HeaderVerticalLine = styled.div`
  background: ${({ theme }) => `linear-gradient(to bottom, ${theme.colors.gradientA}, ${theme.colors.gradientB});`};
  height: 100%;
  width: 5px;
`

export const HeaderText = styled.h1`

  width: 353px;
  font-size: 56px;
  line-height: 1.2;
  font-weight: bold;
  margin: 0;
`


