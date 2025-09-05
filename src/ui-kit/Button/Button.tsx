

import React from 'react'
import { StyledButton } from './Styled'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary'
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant,
  ...props
}) => {
  return (
    <StyledButton variant={variant} {...props}>
      {children}
    </StyledButton>
  )
}
