import '../styles/components/navbar.sass'
import smoothScroll from 'smooth-scroll';
import logoImg from '../assets/primopiano.svg';

const Navbar = () => {

    const handleClick = (e) => {
        e.preventDefault();
        const targetId = e.target.getAttribute('href');
        smoothScroll.animateScroll(document.querySelector(targetId));
    };
    
    return (
    <nav id='top_nav'>
        <div>
            <a href="https://api.whatsapp.com/message/KOB3B5A6ZSLWP1?autoload=1&app_absent=0"><img id='top_logo' src={logoImg}/></a>
        </div>
    </nav>
    )
}

export default Navbar