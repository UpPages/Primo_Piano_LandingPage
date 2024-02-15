import '../styles/components/footer.sass'
import logoImg from '../assets/logo.svg';

const Footer = () => {
    return (
        <footer>
            <a href="https://api.whatsapp.com/message/KOB3B5A6ZSLWP1?autoload=1&app_absent=0"><img id='top_logo' src={logoImg}/></a>
            <div>
                <h3>Primo Piano 2024</h3>
                <a href="#"><h2>Projeto Web: UpPages</h2></a>
            </div>
        </footer>
    )
}

export default Footer