import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

import '../styles/components/sobre.sass'

function Sobre() {

    useEffect(() => {
        const sr = ScrollReveal().reveal;
    
        sr('#texts', { delay: 200, duration: 1500, origin: 'top', distance: '1000px', easing: 'ease', trigger: 'onScroll', reset: true });
        sr('#texts a', { delay: 400, duration: 1500, trigger: 'onScroll', reset: true });
        sr('#right_bar_sobre', { delay: 200, duration: 1500, origin: 'top', distance: '1500px', easing: 'ease', trigger: 'onScroll', reset: true });
        sr('#infos .info1', { delay: 500, duration: 1700, easing: 'ease', trigger: 'onScroll', reset: true });
        sr('#infos .info2', { delay: 600, duration: 1700, easing: 'ease', trigger: 'onScroll', reset: true });
        sr('#infos .info3', { delay: 700, duration: 1700, easing: 'ease', trigger: 'onScroll', reset: true });
        sr('#infos .info4', { delay: 800, duration: 1700, easing: 'ease', trigger: 'onScroll', reset: true });
        sr('#infos h3', { duration: 1500, origin: 'top', distance: '1000px', easing: 'ease', trigger: 'onScroll', reset: true });
    
    }, []);

    return (
        <div id='sobre'>
            <div id='texts'>
                <h3>Nossa história</h3>
                <p>Primo Piano, o escritório de arquitetura fundado por Iran Souza em Natal, RN. Com uma visão inovadora e inspiração na rica herança cultural local, o Primo Piano cria projetos contemporâneos que refletem a essência da cidade. Descubra nossos projetos únicos e transformadores, onde a criatividade e a funcionalidade se encontram para criar espaços extraordinários.</p>
                <a href="https://api.whatsapp.com/message/KOB3B5A6ZSLWP1?autoload=1&app_absent=0"><button>Fale conosco</button></a>
            </div>
            <div id='infos'>
                <h3>Já são...</h3>
                <div id='info_content'>

                    <div id='info_line' className='line1'>
                        <div id='info' className='info1'>
                            <h1>20.000 m²</h1>
                            <h2>TRABALHADOS</h2>
                        </div>
                        <div id='info' className='info2'>
                            <h1>+60</h1>
                            <h2>PROJETOS</h2>
                        </div>
                    </div>
                    <div id='info_line' className='line2'>
                        <div id='info' className='info3'>
                            <h1>+50</h1>
                            <h2>FAMÍLIAS TRANSFORMADAS</h2>
                        </div>
                        <div id='info' className='info4'>
                            <h1>+12</h1>
                            <h2>PARCEIROS</h2>
                        </div>
                    </div>
                    
                    
                </div>
            </div>
            <div id='right_bar_sobre'>
            </div>
        </div>
    )
}

export default Sobre
