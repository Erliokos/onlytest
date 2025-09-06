
import { ResponsiveProvider } from 'context/ResponsiveContext'
import { TimeLine } from './components/TimeLine'
import { MainContainer } from './globalStyles'
import data from './timeline_data.json'



function App() {

  return (
    <ResponsiveProvider>
      <MainContainer>
        <TimeLine data={data} title="Исторические даты" />
      </MainContainer>
    </ResponsiveProvider>
  )
}

export default App
