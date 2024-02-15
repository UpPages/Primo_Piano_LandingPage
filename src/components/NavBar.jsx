import '../styles/components/navbar.sass'
import logoImg from '../assets/primopiano.svg';

import { CiSearch } from "react-icons/ci";

const Navbar = () => {
    return (
    <nav id='top_nav'>
        <a href="https://api.whatsapp.com/message/KOB3B5A6ZSLWP1?autoload=1&app_absent=0"><img id='top_logo' src={logoImg}/></a>
        <ul>
            <li>sobre</li>
            <li>depoimentos</li>
            <li>contato</li>
        </ul>
        <div>
        </div>
    </nav>
    )
}

export default Navbar