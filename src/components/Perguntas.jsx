import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import Accordion from 'react-bootstrap/Accordion';

import '../styles/components/perguntas.sass'
import 'bootstrap/dist/css/bootstrap.min.css';



function Perguntas() {

    useEffect(() => {
        const sr = ScrollReveal().reveal;
    
        sr('#li1', { delay: 400, duration: 1500, trigger: 'onScroll'});
        
    }, []);

    return (
        <div id='perguntas'>

            <h3>Perguntas Frequentes</h3>
            <div>
                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Pergunta #1</Accordion.Header>
                        <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Pergunta #2</Accordion.Header>
                        <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>

        </div>
    )
}

export default Perguntas
