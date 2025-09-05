import { HeaderContainer, HeaderText, HeaderVerticalLine } from './Styled'

export type HeaderProps = {}

export const Header: React.FC<HeaderProps> = () => {
  return (
    <HeaderContainer>
      <HeaderVerticalLine />
      <HeaderText>Исторические даты</HeaderText>
    </HeaderContainer>
  )
}
