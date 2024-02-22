import '../styles/components/navbar.sass'
import logoImg from '../assets/logobranca.png';

const Leftbar = () => {
    return (
    <nav id='left_nav'>
        <img id='left_logo' src={logoImg}/>
    </nav>
    )
}

export default Leftbar