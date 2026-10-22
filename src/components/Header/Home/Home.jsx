import { useState } from 'react';
import { BiPlusCircle, BiSolidXCircle  } from 'react-icons/bi';
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


    const deleteInput = () => {
    if (input.length > 0) {
        const remove = input.slice(0, -1);
        ClickNewInput(remove);
    }
};

const [Alert, setXAlert] = useState(false);
const [alertMessage, setAlertMessage] = useState('');
const handleSend = () => {
    const allFilled = input.length > 0 && input.every(value => value.trim() !== '');

    if (allFilled) {
        setAlertMessage('✅ اطلاعات با موفقیت ارسال شد!');
        setXAlert(true);
    } else {
        setAlertMessage('⚠️ لطفاً همه کارها را پر کنید!');
        setXAlert(true);
    }

    // بستن هشدار بعد از ۳ ثانیه
    setTimeout(() => setXAlert(false), 3000);
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
                                    <option value="Work">Work</option>
                                    <option value="Education">Education</option>
                                    <option value="Purchase">Purchase</option>
                                </select>
                                <select>
                                    <option value="Little">Little</option>
                                    <option value="Average">Average</option>
                                    <option value="very">very</option>
                                </select>
                            </div>

                            <div className='ToDoList'>
                                <BiSolidXCircle className='ToDoListIcon' onClick={deleteInput} />
                                <div className='boxInputs'>
                                    {input.map((value, index) => (
                                        <input key={index} type="text" value={value} onChange={(e) => NewInput(index, e.target.value)} placeholder={`Work ${index + 1}`} className='newInput' />
                                    ))}
                                </div>
                                <BiPlusCircle className='ToDoListIcon' onClick={addNewInput} />
                            </div>

                            <div className='boxButton'>
                                <input type="button" value="Cancel" className='buttonBox red' onClick={onclick} />

    {/* ✅ این بخش رو اضافه کن */}
    {Alert && (
        <div className={`alertBox ${input.length > 0 && input.every(v => v.trim() !== '') ? 'success' : 'error'}`}>
            {alertMessage}
        </div>
    )}

                                <input type="button" value="Send" className='buttonBox green' onClick={handleSend} />
                            </div>

                        </div>
                    </form>
            )}
        </>
    )
}

export default Home;