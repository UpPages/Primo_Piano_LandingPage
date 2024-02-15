import '../styles/components/navbar.sass'
import logoImg from '../assets/primopiano.svg';

const Navbar = () => {
    return (
    <nav id='top_nav'>
        <div>
            <a href="https://api.whatsapp.com/message/KOB3B5A6ZSLWP1?autoload=1&app_absent=0"><img id='top_logo' src={logoImg}/></a>
        </div>
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