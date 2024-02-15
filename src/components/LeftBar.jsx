import '../styles/components/navbar.sass'
import logoImg from '../assets/logo.svg';

// Icons
import { FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

const Leftbar = () => {
    return (
    <nav id='left_nav'>
        <img id='left_logo' src={logoImg}/>
        {/* <ul id='left_links'>
            <li>
                <p>Sobre</p>
            </li>
            <li>
                <p>Galeria</p>
            </li>
            <li>
                <p>Contato</p>
            </li>
        </ul>
        <ul id='left_social'>
            <li>
                <FaInstagram />
            </li>
            <li>
                <BsTwitterX />
            </li>
        </ul> */}
    </nav>
    )
}

export default Leftbar