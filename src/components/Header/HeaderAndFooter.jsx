import './HeaderAndFooter.css';
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useState } from 'react';
import { MdSettings, MdCalendarToday, MdSchool } from 'react-icons/md';
import { BiNotepad  } from 'react-icons/bi';

function HeaderAndFooter() {

    const [inSide, outSide] = useState(false);
    const answerChange = () => {
        outSide(!inSide);
    };

    const [isMenuOpen, open] = useState(false);
    const menu = () => {
        open(!isMenuOpen);
    };

    return(
        <>
        <header className='HeaderAndFooter'>
            <p>Do it🔨</p>
            <div className='boxIcon'>
                <div className='iconNav' onClick={menu}>
                    <MdSettings size={33} className='icon'/>
                </div>
            </div>
        </header>

        <footer onClick={answerChange} className={`footer ${inSide ? 'go' : ''}`}>
            {inSide ? <IoIosArrowDown size={24} className='DownAndUp' /> : <IoIosArrowUp size={24} className='DownAndUp' />}
            <div className='iconDiv'>
                <BiNotepad  size={28} className='icon marginBiNotepad'/>
            </div>
            <div>
                <MdCalendarToday size={28} className='icon'/>
            </div>
            <div>
                <MdSchool size={28} className='icon'/>
            </div>
        </footer>

        <div className={`sideMenu ${isMenuOpen ? 'open' : ''}`}>
        <ul>
            <li>001011100</li>
            <li>001011100</li>
            <li>001011100</li>
        </ul>
        </div>
        </>
    )
}

export default HeaderAndFooter;