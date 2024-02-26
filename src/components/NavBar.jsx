import '../styles/components/navbar.sass'
import logoImg from '../assets/primopiano.svg';

const Navbar = () => {
    
    return (
    <nav id='top_nav'>
        <div>
            <a href="https://wa.me/558496188401"><img id='top_logo' src={logoImg}/></a>
        </div>
    </nav>
    )
}

export default Navbar