import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

import '../styles/components/solucoes.sass'

import { LuBoxes } from "react-icons/lu";
import { LuSofa } from "react-icons/lu";
import { FaRegEye } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FaMoneyBill } from "react-icons/fa";



function Solucoes() {

    useEffect(() => {
        const sr = ScrollReveal().reveal;
    
        sr('#li1', { delay: 400, duration: 1500, trigger: 'onScroll', reset: true });
        sr('#li2', { delay: 200, duration: 1500, trigger: 'onScroll', reset: true });
        sr('#li3', { delay: 400, duration: 1500, trigger: 'onScroll', reset: true });
        sr('#li4', { delay: 600, duration: 1500, trigger: 'onScroll', reset: true });
        sr('#li5', { delay: 600, duration: 1500, trigger: 'onScroll', reset: true });
    }, []);

    return (
        <div id='solucoes'>
            <h3>Soluções</h3>
            <div id='solucoes_content'>
                <ul>
                    <li id='li1'>
                        <p>Arquitetura</p>
                        <LuBoxes />
                    </li>
                    <li id='li2'>
                        <p>Acompanhamento em lojas e fornecedores especializados</p>
                        <FaShoppingCart />
                    </li>
                    <li id='li3'>
                        <p>Design de Interiores</p>
                        <LuSofa />
                    </li>
                </ul>
                <ul>
                    <li id='li4'>
                        <p>Acompanhamento de Obras</p>
                        <FaRegEye />
                    </li>
                    <li id='li5'>
                        <p>Estudo de Viabilidade Financeira</p>
                        <FaMoneyBill />
                    </li>
                </ul>
                <a href="https://api.whatsapp.com/message/KOB3B5A6ZSLWP1?autoload=1&app_absent=0"><button>Fale conosco</button></a>
            </div>
        </div>
    )
}

export default Solucoes
