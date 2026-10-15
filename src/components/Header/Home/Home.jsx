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
                            
                            <div className='boxButtonDate'>
                                <input type="date" name="" id="" className='buttonDateBox' />
                                <input type="time" name="" id="" className='buttonDateBox' />
                            </div>

                            <div className='ToDoList'>
                                <BiPlusCircle className='ToDoListIcon' />
                            </div>

                            <div className='boxButton'>
                                <input type="button" value="Cancel" className='buttonBox red' onClick={onclick} />
                                <input type="button" value="Send" className='buttonBox green' />
                            </div>

                        </div>
                    </form>
            )}
        </>
    )
}

export default Home;