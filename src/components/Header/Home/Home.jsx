import { useState } from 'react';
import { BiPlusCircle } from 'react-icons/bi';
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
                        <h2 className='titleForm'>Write down the information.</h2>
                        <div className='alinItems'>
                            <input type="text" placeholder='Name' name="name" id="name" className='inputForm' />
                            <input type="time" name="time" className='inputForm' />
                            <div className='ToDoList'>
                                <BiPlusCircle className='ToDoListIcon' />
                            </div>
                            <input type="button" value="Cancel" />
                            <input type="button" value="Send" />
                        </div>
                    </form>
            )}
        </>
    )
}

export default Home;