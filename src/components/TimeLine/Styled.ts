import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  padding-top: 170px;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const YearLine = styled.div`
  position: absolute;
  height: 160px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 130px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 90px;
  pointer-events: none;
  z-index: -1;
`

export const YearLineLeft = styled.div`
  color: ${({theme}) => theme.colors.gradientA};
`
export const YearLineRight = styled.div`
  color: ${({theme}) => theme.colors.gradientB};
`
export const SliderContainer = styled.div`
  height: 300px;
  padding-left: 80px;
  display: flex;
  flex-direction: column;
  gap: 50px;
`

export const NavigateButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

export const NavigateButtonGroup = styled.div`
  display: flex;
  gap: 20px;
`
export const SectionNumberContainer = styled.div`
  font-size: 14px;
`

