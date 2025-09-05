import React from 'react'
import { HorizontalLine, VerticalLine } from './Styled'

export function LineGroup() {
  return (
    <div>
      <HorizontalLine />
      <VerticalLine left="0%" />
      <VerticalLine left="50%" />
      <VerticalLine left="100%" />
    </div>
  )
}
