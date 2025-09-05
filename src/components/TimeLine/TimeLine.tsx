import { useRef, useState } from 'react'
import { CircleTimeLine } from './components/CircleTimeLine'
import { Header } from './components/Header'
import {
  Container,
  NavigateButtonContainer,
  NavigateButtonGroup,
  SectionNumberContainer,
  SliderContainer,
  YearLine,
  YearLineLeft,
  YearLineRight
} from './Styled'
import gsap from 'gsap'
import { Slider } from './components/Slider'
import { ButtonArrow } from 'ui-kit'
import type { TimeLineProps } from './interfaces'
import { LineGroup } from './components/LineGroup'

export const TimeLine: React.FC<TimeLineProps> = ({ data, title }) => {
  const [activeSlide, setActiveSlide] = useState<number>(1)
  const [yearA, setYaerA] = useState<number>(
    data[activeSlide - 1].events[0].date
  )
  const [yearB, setYaerB] = useState<number>(
    data[activeSlide - 1].events.at(-1)?.date ?? 2000
  )

  const counterA = useRef({ val: yearA })
  const counterB = useRef({ val: yearB })

  const handleChangeActiveSlide = (value: number) => {
    const slideNumber =
      value < 1 ? data.length : value > data.length ? 1 : value
    setActiveSlide(slideNumber)
    gsap.to(counterA.current, {
      val: data[slideNumber - 1].events[0].date,
      duration: 1,
      ease: 'power1.out',
      onUpdate: () => {
        setYaerA(Math.round(counterA.current.val))
      }
    })
    gsap.to(counterB.current, {
      val: data[slideNumber - 1].events.at(-1)?.date,
      duration: 1,
      ease: 'power1.out',
      onUpdate: () => {
        setYaerB(Math.round(counterB.current.val))
      }
    })
  }

  return (
    <Container>
      <Header title={title} />
      <LineGroup />
      <CircleTimeLine
        entityCount={data.length}
        description={data[activeSlide - 1].title}
        activeSlide={activeSlide}
        onChangeActiveSlide={handleChangeActiveSlide}
      />
      <YearLine>
        <YearLineLeft>{yearA}</YearLineLeft>
        <YearLineRight>{yearB}</YearLineRight>
      </YearLine>
      <SliderContainer>
        <NavigateButtonContainer>
          <SectionNumberContainer>{`${activeSlide}/${data.length}`}</SectionNumberContainer>
          <NavigateButtonGroup>
            <ButtonArrow
              arrowLeft
              onClick={() => handleChangeActiveSlide(activeSlide - 1)}
            />
            <ButtonArrow
              onClick={() => handleChangeActiveSlide(activeSlide + 1)}
            />
          </NavigateButtonGroup>
        </NavigateButtonContainer>
        <Slider data={data[activeSlide - 1].events} />
      </SliderContainer>
    </Container>
  )
}
