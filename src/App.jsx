
import TopSection from './components/TopSection'
import Sobre from './components/Sobre'
import NavBar from './components/NavBar'

import './styles/app.sass'

function App() {

  return (
    <>
      <main>
        <TopSection/>
        <div id='sections'>
          <NavBar/>
          <Sobre/>
        </div>
      </main>
    </>
  )
}

export default App
