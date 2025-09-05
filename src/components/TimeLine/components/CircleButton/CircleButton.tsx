import { ButtonProps } from 'ui-kit/Button'

export interface CircleButtonProps extends ButtonProps {
  arrowLeft?: boolean
}

export const CircleButton: React.FC<CircleButtonProps> = () => {
  return <div>HELLO</div>
}
