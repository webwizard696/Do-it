import './HeaderAndFooter.css';
import { MdSettings } from 'react-icons/md';
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useState } from 'react';

function HeaderAndFooter() {

    const [inSide, outSide] = useState(false);
    const answerChange = () => {
        outSide(!inSide);
    };

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

        <footer onClick={answerChange} className={`footer ${inSide ? 'go' : ''}`}>
            {inSide ? <IoIosArrowDown size={24} /> : <IoIosArrowUp size={24} />}
        </footer>
        </>
    )
}

export default HeaderAndFooter;