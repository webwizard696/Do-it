import './HeaderAndFooter.css';
import { MdHome, MdReport } from 'react-icons/md';
import { FiEdit } from 'react-icons/fi';

function HeaderAndFooter() {
    return(
        <div className='HeaderAndFooter'>
            <div className='iconNav'><MdHome size={24}/></div>
            <div className='iconNav'><FiEdit size={24}/></div>
            <div className='iconNav'><MdReport size={24}/></div>
            <p>You can</p>
        </div>
    )
}

export default HeaderAndFooter;