import './HeaderAndFooter.css';
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useState } from 'react';
import { MdSettings, MdCalendarToday, MdSchool } from 'react-icons/md';
import { BiNotepad, BiLogoGmail  } from 'react-icons/bi';
import { FaTelegram, FaInstagram, FaGithub} from 'react-icons/fa';

function HeaderAndFooter() {

    const [inSide, outSide] = useState(false);
    const answerChange = () => {
        outSide(!inSide);
    };

    const [isMenuOpen, open] = useState(false);
    const menu = () => {
        open(!isMenuOpen);
    };

    const [up, down] = useState(false);
    const closeThenOpen = () => {
        down(!up);
    }

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
            <div className='divContactUs' onClick={closeThenOpen}>
                <p>Contact Us {up ? <IoIosArrowDown size={20} className='DownAndUp' /> : <IoIosArrowUp size={20} className='DownAndUp' />}</p>
            </div>
            <div className='iconAndApp'>
                <ul>
                    <li><a href="https://t.me/Nrrrafj"><FaTelegram className='icon' size={28} /><span>Telegram</span></a></li>
                    <li><a href="mailto:web.wizard.696@gmail.com"><BiLogoGmail className='icon' size={28} /><span>Email</span></a></li>
                    <li><a href="https://github.com/webwizard696"><FaGithub className='icon' size={28} /><span>Github</span></a></li>
                    <li><a href="http://instagram.com/hamze1010100011"><FaInstagram className='icon' size={28} /><span>Instagram</span></a></li>
                </ul>
            </div>
        </ul>
        </div>
        </>
    )
}

export default HeaderAndFooter;