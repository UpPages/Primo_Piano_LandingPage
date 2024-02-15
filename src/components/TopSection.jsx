import React, { useEffect } from 'react';
import Leftbar from '../components/LeftBar';
import model from '../assets/topsectionimage.jpeg';
import simbol from '../assets/simbolo.svg';
import ScrollReveal from 'scrollreveal';
import '../styles/components/topsection.sass';

function TopSection() {
    useEffect(() => {
        const sr = ScrollReveal().reveal;
    
        // titles
        sr('#titles h1', { delay: 300, duration: 1500, origin: 'top', distance: '1000px', easing: 'ease', trigger: 'onScroll', reset: true });
        sr('#titles h2', { delay: 600, duration: 1500, origin: 'top', distance: '1000px', easing: 'ease', trigger: 'onScroll', reset: true });
        sr('#titles a', { delay: 1500, duration: 1500, reset: true });
        sr('#left_nav', { delay: 200, duration: 1500, origin: 'left', distance: '300px', easing: 'ease', trigger: 'onScroll', reset: true });
        sr('#simbol', { delay: 200, duration: 1500, origin: 'right', distance: '300px', easing: 'ease', trigger: 'onScroll', reset: true });
    
    }, []);

    return (
        <div id='top_section'>
            <Leftbar />
            <div id='content'>
                <div id='titles'>
                    <h1>Headline</h1>
                    <h2>sub headline</h2>
                    <a href="https://api.whatsapp.com/message/KOB3B5A6ZSLWP1?autoload=1&app_absent=0">
                        <button>Fale conosco</button>
                    </a>
                </div>
                <div id='right_bar'>
                    <img id='simbol' src={simbol} alt="Simbol" />
                </div>
                <img id='model' src={model} alt="Model" />
            </div>
        </div>
    );
}

export default TopSection;
