import styled from 'styled-components'

export const Container = styled.div<{isMobile: boolean}>`
  position: relative;
  padding-top: ${({ isMobile }) => isMobile ? '59px' : '170px'};
  gap: ${({ isMobile }) => isMobile ? '56px' : '0'};
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: ${({ isMobile }) => isMobile ? 'space-between' : 'space-between'};
`

export const YearLine = styled.div<{isMobile: boolean}>`
  position: ${({ isMobile }) => isMobile ? 'initial' : 'absolute'};
  height: ${({ isMobile }) => isMobile ? 'auto' : '160px'};
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transform: ${({ isMobile }) => isMobile ? 'none' : 'translate(-50%, -50%)'};
  font-size: ${({ isMobile }) => isMobile ? '56px' : '130px'};
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ isMobile }) => isMobile ? '30px' : '90px'};
  pointer-events: none;
  z-index: -1;
`

export const YearLineLeft = styled.div`
  color: ${({theme}) => theme.colors.gradientA};
`
export const YearLineRight = styled.div`
  color: ${({theme}) => theme.colors.gradientB};
`
export const SliderContainer = styled.div<{isMobile: boolean}>`
  height: 300px;
  padding-left: ${({ isMobile }) => isMobile ? '0' : '80px'};
  display: flex;
  flex-direction: ${({ isMobile }) => isMobile ? 'column-reverse' : 'column'};
  gap: 38px;
`

export const NavigateButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-bottom: 12px;
`

export const NavigateButtonGroup = styled.div`
  display: flex;
  gap: 20px;
`
export const SectionNumberContainer = styled.div`
  font-size: 14px;
`

