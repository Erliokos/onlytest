
import { TimeLine } from './components/TimeLine'
import { MainContainer } from './globalStyles'
import data from './timeline_data.json'



function App() {
  return (
    <MainContainer>
      <TimeLine data={data} title="Исторические даты" />
    </MainContainer>
  )
}

export default App
