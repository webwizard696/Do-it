import { useState } from 'react';
import { BiPlusCircle } from 'react-icons/bi';
import './Home.css';
import './styleForm.css';

function Home() {
    const [show, hidden] = useState(false);

    const onclick = () =>{
        hidden(!show);
    }



    const [input, ClickNewInput] = useState([]);

    const addNewInput = () => {
        ClickNewInput([...input, '']);
    };

     const NewInput = (index, value) => {
        const newInputs = [...input];
        newInputs[index] = value;
        ClickNewInput(newInputs);
    };



    return(
        <>
            <button type="button" className='creat' onClick={onclick}>+</button>

            {show && (
                    <form className='contactForm'>
                        <h2 className='titleForm'>Write down the information.</h2>
                        <div className='alinItems'>

                            <input type="text" placeholder='Name' name="name" id="name" className='inputForm' />
                            
                            <div className='boxButtonDate'>
                                <input type="time" className='buttonDateBox' />
                            </div>

                            <div className='boxChoose'>
                                <select>
                                    <option value="Category">Category</option>
                                    <option value="Work">Work</option>
                                    <option value="Education">Education</option>
                                    <option value="Purchase">Purchase</option>
                                </select>
                                <select>
                                    <option value="Priority">Priority</option>
                                    <option value="Little">Little</option>
                                    <option value="Average">Average</option>
                                    <option value="very">very</option>
                                </select>
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