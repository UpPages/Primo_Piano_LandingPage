
import TopSection from './components/TopSection'
import Sobre from './components/Sobre'
import NavBar from './components/NavBar'
import leftsimbol from './assets/simbolo.svg';

import './styles/app.sass'

function App() {

  return (
    <>
      <main>
        <TopSection/>
        <div id='sections'>
          <NavBar/>
          <img id='left_simbol' src={leftsimbol}/>
          <Sobre/>
        </div>
      </main>
    </>
  )
}

export default App
