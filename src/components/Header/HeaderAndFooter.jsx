import './HeaderAndFooter.css';
import { MdSettings } from 'react-icons/md';

function HeaderAndFooter() {

    return(
        <>
        <header className='HeaderAndFooter'>
            <p>Do it🔨</p>
            <div className='boxIcon'>
                <div className='iconNav'>
                    <MdSettings size={28} className='icon'/>
                </div>
            </div>
        </header>

        <footer></footer>
        </>
    )
}

export default HeaderAndFooter;