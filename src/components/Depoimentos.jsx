import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

import depoimento01 from '../assets/depoimento01.jpg';
import depoimento02 from '../assets/depoimento02.jpeg';
import depoimento03 from '../assets/depoimento03.jpeg';

import '../styles/components/depoimentos.sass'


function Depoimentos() {

    useEffect(() => {
        const sr = ScrollReveal().reveal;
    
        sr('#depoimentos_title', { delay: 200, duration: 1500, trigger: 'onScroll' });
        sr('#depoimentos_box #depoimento01', { delay: 700, duration: 1000, origin: 'bottom', distance: '500px', easing: 'ease', trigger: 'onScroll'});
        sr('#depoimentos_box #depoimento02', { delay: 300, duration: 1000, origin: 'bottom', distance: '500px', easing: 'ease', trigger: 'onScroll'});
        sr('#depoimentos_box #depoimento03', { delay: 700, duration: 1500, origin: 'bottom', distance: '500px', easing: 'ease', trigger: 'onScroll'});

    }, []);

    return (
        <div id='depoimentos'>
            <h3 id='depoimentos_title'>Depoimentos</h3>
            <div id='depoimentos_box'>

                <div className='depoimento' id='depoimento01'>
                    <div className="depoimento_title">
                        <h2>01</h2>
                        <p>Cada detalhe foi cuidadosamente pensado, resultando em um espaço que não só é bonito, mas também funcional e acolhedor.</p>
                    </div>
                    <img className='depoimento_img' src={depoimento01}/>
                </div>

                <div className='depoimento' id='depoimento02'>
                    <div className="depoimento_title">
                        <h2>02</h2>
                        <p>O resultado final foi um espaço comercial que não só atende às demandas do meu negócio, mas também encanta meus clientes.</p>
                    </div>
                    <img className='depoimento_img' src={depoimento02}/>
                </div>

                <div className='depoimento' id='depoimento03'>
                    <div className="depoimento_title">
                        <h2>03</h2>
                        <p>A equipe foi incrivelmente atenciosa e receptiva a todas as minhas ideias e preocupações.</p>
                    </div>
                    <img className='depoimento_img' src={depoimento03}/>
                </div>
            </div>
        </div>
    )
}

export default Depoimentos
