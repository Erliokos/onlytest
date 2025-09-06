import { useResponsive } from 'context/ResponsiveContext'
import { HeaderContainer, HeaderText, HeaderVerticalLine } from './Styled'

export type HeaderProps = {
  title: string
}

export const Header: React.FC<HeaderProps> = ({title}) => {

  const { isMobile } = useResponsive()

  return (
    <HeaderContainer isMobile={isMobile}>
      {!isMobile && <HeaderVerticalLine />}
      <HeaderText isMobile={isMobile}>{title}</HeaderText>
    </HeaderContainer>
  )
}
