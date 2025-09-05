import React, { useCallback, useEffect, useState } from 'react'
import {
  ButtonsWrapper,
  ButtonText,
  CircleButton,
  CircleTimeLineContainer,
  CircleTimeLineLine,
  Description
} from './Styled'

export type CircleTimeLineProps = {
  entityCount: number
  description: string
  activeSlide: number
  onChangeActiveSlide: (value: number) => void
}

export const CircleTimeLine: React.FC<CircleTimeLineProps> = ({
  entityCount = 0,
  description,
  activeSlide,
  onChangeActiveSlide
}) => {
  const [buttonWrapperAngle, setButtonWrapperAngle] = useState<number>(120)

  
  const handleRotate = useCallback((buttonNumber: number) => {
    const step = 360 / entityCount
    onChangeActiveSlide(buttonNumber)
    setButtonWrapperAngle(360 + 120 - step * (buttonNumber - 1))
  }, [entityCount, onChangeActiveSlide])

  useEffect(() => {
    handleRotate(activeSlide)
  }, [activeSlide, handleRotate] )

  return (
    <CircleTimeLineContainer>
      <CircleTimeLineLine />
      <Description>{description}</Description>
      <ButtonsWrapper rotation={buttonWrapperAngle}>
        {[...Array(entityCount)].map((_, i) => (
          <CircleButton
            key={i}
            angle={(360 / entityCount) * i}
            isActive={i + 1 === activeSlide}
            onClick={() => handleRotate(i + 1)}
          >
            <ButtonText angle={(360 / entityCount) * i + buttonWrapperAngle}>
              {i + 1}
            </ButtonText>
          </CircleButton>
        ))}
      </ButtonsWrapper>
    </CircleTimeLineContainer>
  )
}
