import { HorizontalLine, VerticalLine } from '../../globalStyles'
import { CircleTimeLine } from './components/CircleTimeLine'
import { Header } from './components/Header'
import { Container } from './Styled'


export type TimeLineProps = {}

export const TimeLine: React.FC<TimeLineProps> = () => {
  return (
    <Container>
      <Header/>
      <HorizontalLine />
      <VerticalLine left="0%" />
      <VerticalLine left="50%" />
      <VerticalLine left="100%" />
      <CircleTimeLine/>
    </Container>
  )
}
