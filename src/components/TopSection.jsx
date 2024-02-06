import Leftbar from '../components/LeftBar';

import model from '../assets/topsectionimage.jpeg';
import simbol from '../assets/simbolo.svg';

import '../styles/components/topsection.sass';

function TopSection() {

    return (
        <div id='top_section'>
            <Leftbar />
            <div id='content'>
                <div id='titles'>
                    <h1>Headline</h1>
                    <h2>sub headline</h2>
                    <button>botão</button>
                </div>
                <div id='right_bar'>
                    <img id='simbol' src={simbol} />
                </div>
                <img id='model' src={model} />
            </div>
        </div>
    );
}

export default TopSection;