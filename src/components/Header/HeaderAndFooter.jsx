import { useState, useEffect } from 'react';
import './HeaderAndFooter.css';
import { MdHome, MdReport } from 'react-icons/md';
import { FiEdit } from 'react-icons/fi';

function HeaderAndFooter() {
     const [today, setToday] = useState(new Date());


    useEffect(() => {
        const timer = setInterval(() => {
            setToday(new Date());
        }, 60000);
        return () => clearInterval(timer);
    }, []);

    const dateString = today.toLocaleDateString('en-US', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    timeZone: 'America/New_York'
    });

    return(
        <div className='HeaderAndFooter'>
            <p>Do it🔨</p>
            <div className='boxIcon'>
                <div className='iconNav'>
                    <FiEdit size={26} className='icon'/>
                </div>
                <div className='iconNav'>
                    <MdHome size={26} className='icon'/>
                </div>
                <div className='iconNav'>
                    <MdReport size={26} className='icon'/>
                </div>
            </div>
            <div className='dateBox'>
                <span className='dateText'>{dateString}</span>
            </div>
        </div>
    )
}

export default HeaderAndFooter;