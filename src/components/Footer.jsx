import '../styles/components/footer.sass'
import logoImg from '../assets/logo.svg';

const Footer = () => {
    return (
        <footer>
            <div className="footer_content">
                <a href="https://wa.me/558496188401"><img id='top_logo' src={logoImg}/></a>
                <div>
                    <h3>Primo Piano 2024</h3>
                    <a href="#"><h2>Projeto Web: UpPages</h2></a>
                </div>
            </div>
        </footer>
    )
}

export default Footer