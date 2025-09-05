import { HeaderContainer, HeaderText, HeaderVerticalLine } from './Styled'

export type HeaderProps = {
  title: string
}

export const Header: React.FC<HeaderProps> = ({title}) => {
  return (
    <HeaderContainer>
      <HeaderVerticalLine />
      <HeaderText>{title}</HeaderText>
    </HeaderContainer>
  )
}
