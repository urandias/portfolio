import Experience from './components/Experience'
import Uran from './components/Uran'
import VantaBackground from './components/VantaBackground'

function App() {
  return (
    <>
      <VantaBackground>
        <Uran />
      </VantaBackground>
      <div className="ExperienceContainer">
        <Experience />
      </div>
    </>
  )
}

export default App
