import styled from 'styled-components'


export const Container = styled.div`
  height: 279px;
  width: 100%;
  box-sizing: border-box;
`

export const SliderItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`
export const SliderItemDate = styled.div`
  color: ${({theme}) => theme.colors.secondary};
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 25px;
`
export const SliderItemDescription = styled.div`
  font-size: 18px;
`
export const SwiperContainer = styled.div`
  display: flex;
  gap: 20px;
`
export const NextSliderButtonContainer = styled.div`
  padding: 40px;
`
