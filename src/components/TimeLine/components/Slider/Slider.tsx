
import { NextSliderButtonContainer, Container, SliderItem, SliderItemDate, SliderItemDescription, SwiperContainer } from './Styled'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Swiper as SwiperType } from 'swiper/types'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import { Navigation, Pagination } from 'swiper/modules'
import { ButtonArrow } from 'ui-kit'
import { useEffect, useRef } from 'react'
import type { EventsData } from 'components/TimeLine/interfaces'

export type SliderProps = {
  data: Array<EventsData>
}

export const Slider: React.FC<SliderProps> = ({data}) => {

  const swiperRef = useRef<SwiperType | null>(null)

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.slideTo(0, 0)
    }
  }, [data])
  
  return (
    <Container>
      <SwiperContainer>
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={80}
          slidesPerView={3}
          style={{ width: '100%', height: '135px' }}
          onSwiper={(swiper: SwiperType) => {
            swiperRef.current = swiper
          }}
        >
          {data.map(item => (
            <SwiperSlide key={item.id}>
              <SliderItem>
                <SliderItemDate>{item.date}</SliderItemDate>
                <SliderItemDescription>
                  {item.description}
                </SliderItemDescription>
              </SliderItem>
            </SwiperSlide>
          ))}
        </Swiper>
        <NextSliderButtonContainer>
          <ButtonArrow onClick={() => {
            swiperRef.current?.slideNext()
          }} />
        </NextSliderButtonContainer>
      </SwiperContainer>
    </Container>
  )
}
