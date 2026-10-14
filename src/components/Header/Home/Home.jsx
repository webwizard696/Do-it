import { useState } from 'react';
import './Home.css';
import './styleForm.css';

function Home() {
    const [show, hidden] = useState(false);

    const onclick = () =>{
        hidden(!show);
    }
    return(
        <>
            <button type="button" className='creat' onClick={onclick}>+</button>

            {show && (
                    <form className='contactForm'>
                        <h2 className='titleForm'>answerQ</h2>
                        <div className='alinItems'>
                            <input type="text" name="name" id="name" className='inputForm' />
                            <input type="checkbox" name="" id="" className='inputForm' />
                            <input type="time" name="" id="" className='inputForm' />
                            <input type="color" name="" id="" />
                            <div className='ToDoList'>
                                +
                            </div>
                            <input type="submit" value="Cancel" />
                            <input type="submit" value="Send" />
                        </div>
                    </form>
            )}
        </>
    )
}

export default Home;