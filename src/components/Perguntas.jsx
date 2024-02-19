import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import Accordion from 'react-bootstrap/Accordion';

import '../styles/components/perguntas.sass'
import 'bootstrap/dist/css/bootstrap.min.css';



function Perguntas() {

    useEffect(() => {
        const sr = ScrollReveal().reveal;
    
        sr('#perguntas', { delay: 300, duration: 1500, easing: 'ease', trigger: 'onScroll', reset: true });
        
    }, []);

    return (
        <div id='perguntas'>

            <h3>Perguntas Frequentes</h3>
            <div>
                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Porque devo contratar um arquiteto?</Accordion.Header>
                        <Accordion.Body>
                            Através do projeto de arquitetura você vai ter segurança de como ficará seu espaço e previsibilidade financeira. É essencial que você tenha um profissional capacitado para solucionar problemas técnicos e imprevistos durante a obra. Além do arquiteto garantir que seu espaço atenda todas as suas necessidades, você será orientado sobre o melhor custo beneficio dos materiais, detalhes técnicos de uso, entre outras coisas. Com um projeto de arquitetura você terá todos os desenhos técnicos necessários para realizar sua obra.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Como funciona o processo de desenvolvimento do projeto?</Accordion.Header>
                        <Accordion.Body>
                            O desenvolvimento do projeto será desenvolvido em 4 etapas:
                            
                            1º Briefing humanizado: Esse é o momento de nos aprofundarmos na vida da família e em tudo que engloba o seu bem estar. Nessa etapa vamos entender os gostos do cliente, todas as suas necessidades e desejos.

                            2º Estudo Preliminar: Etapa que visa a concepção inicial do projeto. Aqui vamos começar a materializar todas as ideias iniciais, fazer estudos de layout e iniciar todo o processo criativo!

                            3º Projeto Conceitual: Com o layout aprovado, é hora de iniciar o projeto em 3D. É nessa etapa que iremos desenvolver a maquete eletrônica para tour virtual nos ambientes.

                            4º Projeto Executivo: Etapa que consiste na elaboração de todos os desenhos técnicos necessários para a execução da sua obra. Aqui iremos detalhar minuciosamente o projeto para evitar e minimizar problemas e imprevistos durante a sua reforma.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>Quantas alterações posso pedir durante o desenvolvimento do projeto?</Accordion.Header>
                        <Accordion.Body>
                            Até a etapa do estudo preliminar são ilimitadas as alterações de projeto. A partir da segunda etapa entendemos que o projeto deve estar bem alinhado e fixamos em 03 alterações até o projeto executivo. Após o executivo elaborado, caso haja alterações solicitadas, elas serão cobradas por hora extra trabalhada.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header>Como funciona o acompanhamento de obra?</Accordion.Header>
                        <Accordion.Body>
                            O Acompanhamento de Obras tem por objetivo fiscalizar e certificar que a execução da obra está ocorrendo conforme o projeto. Com esse trabalho conseguimos dar todo o suporte necessário para tirar dúvidas, solucionar possíveis intercorrências e garantir o bom andamento da sua obra. O A.D.O é realizado por meio de visitas técnicas semanais, previamente agendadas e descritas em contrato conforme a necessidade do projeto e pode ser fechado posteriormente, no momento da execução da obra.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="4">
                        <Accordion.Header>Quando devo contratar o arquiteto?</Accordion.Header>
                        <Accordion.Body>
                            Em média, com um prazo de 70 à 90 dias antes da entrega das chaves ou liberação do imóvel.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="5">
                        <Accordion.Header>Vocês indicam fornecedores?</Accordion.Header>
                        <Accordion.Body>
                            Sim, indicamos parceiros e fornecedores que já trabalharam conosco e confiamos.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="6">
                        <Accordion.Header>Vocês fazem visita no local?</Accordion.Header>
                        <Accordion.Body>
                            Sim, agendamos visitas presenciais na cidade de Campinas e região. Normalmente realizamos a visita antes da etapa de Briefing Humanizado, para já fazermos a medição completa do local. Para imóveis que ainda não foram liberados, iniciamos o projeto com o material disponibilizado pela construtora e após a liberação, realizamos a medição e fazemos os ajustes necessários no projeto executivo.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="7">
                        <Accordion.Header>Vocês fazem especificação de materiais, acabamentos, louças e metais?</Accordion.Header>
                        <Accordion.Body>
                            Sim, o projeto contempla um memorial descritivo com todas essas especificações e quantitativos.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>

        </div>
    )
}

export default Perguntas
