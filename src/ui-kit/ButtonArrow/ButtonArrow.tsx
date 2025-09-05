import { Button, type ButtonProps } from '../Button/Button'

import { ReactComponent as MyIcon } from '../icons/arrow.svg'
import { Icon } from './Styled'

export interface ButtonArrowProps extends ButtonProps {
  arrowLeft?: boolean
}

export const ButtonArrow: React.FC<ButtonArrowProps> = ({ variant, arrowLeft }) => {
  return (
    <Button>
      <Icon as={MyIcon} arrowLeft={arrowLeft} />
    </Button>
  )
}
