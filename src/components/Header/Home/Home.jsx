import { useState } from 'react';
import './Home.css';

function Home() {
    const [show, hidden] = useState(false);

    const onclick = () =>{
        hidden(!show);
    }
    return(
        <>
            <button type="button" className='creat' onClick={onclick}>+</button>

            {show && (
                <div className='answerQ'>
                <p>answerQ</p>
                </div>
            )}
        </>
    )
}

export default Home;