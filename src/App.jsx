import React, { useEffect } from 'react';
import TopSection from './components/TopSection'
import Sobre from './components/Sobre'
import Depoimentos from './components/Depoimentos';
import NavBar from './components/NavBar'
import leftsimbol from './assets/simbolo.svg';
import Solucoes from './components/Solucoes';

import ScrollReveal from 'scrollreveal';

import './styles/app.sass'
import Footer from './components/Footer';



function App() {

  useEffect(() => {
    const sr = ScrollReveal().reveal;

    sr('#left_simbol', { delay: 200, duration: 1500, origin: 'left', distance: '300px', easing: 'ease', trigger: 'onScroll', reset: true });
    
  }, []);

  return (
    <>
      <main>
        <TopSection/>
        <div id='sections'>
          <NavBar/>
          <img id='left_simbol' src={leftsimbol}/>
          <img id='third_simbol' src={leftsimbol}/>
          <Sobre/>
          <Depoimentos />
          <Solucoes />
        </div>
        <Footer />
      </main>
    </>
  )
}

export default App
