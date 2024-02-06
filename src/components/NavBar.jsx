import '../styles/components/navbar.sass'
import logoImg from '../assets/primopiano.svg';

import { CiSearch } from "react-icons/ci";

const Navbar = () => {
    return (
    <nav id='top_nav'>
        <img id='top_logo' src={logoImg}/>
        <ul>
            <li>sobre</li>
            <li>galeria</li>
            <li>contato</li>
        </ul>
        <div>
            <CiSearch />
        </div>
    </nav>
    )
}

export default Navbar