import { useState } from 'react';
import { BiPlusCircle, BiSolidXCircle } from 'react-icons/bi';
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import './Home.css';
import './styleForm.css';

function Home() {
    const [show, hidden] = useState(false);
    const [input, ClickNewInput] = useState([]);
    const [Alert, setXAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');
    const [name, setName] = useState('');
    const [alertType, jaAlertType] = useState('error');
    const [cards, setCards] = useState([]);
    const [hour, setHour] = useState('12');
    const [minute, setMinute] = useState('00');
    const [second, setSecond] = useState('00');
    const [ampm, setAmpm] = useState('AM');
    const [inSide, outSide] = useState(false);

    const [category, setCategory] = useState('Work');

    const onclick = () => { hidden(!show); };
    const answerChange = () => { outSide(!inSide); };

    const addNewInput = () => {
        ClickNewInput([...input, { text: '', done: false }]);
    };

    const NewInput = (index, value) => {
        const newInputs = [...input];
        newInputs[index].text = value;
        ClickNewInput(newInputs);
    };

    const deleteInput = () => {
        if (input.length > 0) {
            ClickNewInput(input.slice(0, -1));
        }
    };

    const toggleDoneInCard = (cardId, taskIndex) => {
        const updatedCards = cards.map(card => {
            if (card.id === cardId) {
                const updatedTasks = [...card.tasks];
                updatedTasks[taskIndex] = {
                    ...updatedTasks[taskIndex],
                    done: !updatedTasks[taskIndex].done
                };
                return { ...card, tasks: updatedTasks };
            }
            return card;
        });
        setCards(updatedCards);
    };

    const handleSend = () => {
        if (name.trim() === '' || hour === '') {
            setAlertMessage('⚠️Please fill in the name and time⚠️');
            setXAlert(true);
            setTimeout(() => setXAlert(false), 5000);
            jaAlertType('error');
            return;
        }

        if (input.length === 0) {
            setAlertMessage('⚠️Please enter at least one task⚠️');
            setXAlert(true);
            setTimeout(() => setXAlert(false), 5000);
            jaAlertType('error');
            return;
        }

        const allFilled = input.every(value => value.text.trim() !== '');

        if (allFilled) {
            setAlertMessage('✅Create the form✅');
            jaAlertType('success');
            setXAlert(true);

            const formattedTime = `${hour}:${minute}:${second} ${ampm}`;

            const newCard = {
                id: Date.now(),
                name: name,
                time: formattedTime,
                tasks: input,
                category: category
            };

            setCards([...cards, newCard]);
            
            setName('');
            setHour('12');
            setMinute('00');
            setSecond('00');
            setAmpm('AM');
            ClickNewInput([]);
            
        } else {
            setAlertMessage('⚠️Please fill out the form⚠️');
            jaAlertType('error');
            setXAlert(true);
        }
        setTimeout(() => setXAlert(false), 5000);
    };

    return(
        <>
            <button type="button" className='creat' onClick={onclick}>+</button>

            {show && (
                <form className='contactForm'>
                    <h2 className='titleForm'>Write down the information.</h2>
                    <div className='alinItems'>

                        <input type="text" placeholder='Name' id="name" className='inputForm' value={name} onChange={(e) => setName(e.target.value)} />
                        
                        <div className='boxButtonDate'>
                            <select value={hour} onChange={(e) => setHour(e.target.value)} className='dateSelect'>
                                {Array.from({ length: 12 }, (_, i) => i + 1).map(h => (
                                    <option key={h} value={h.toString().padStart(2, '0')}>
                                        {h.toString().padStart(2, '0')}
                                    </option>
                                ))}
                            </select>
                            
                            <select value={minute} onChange={(e) => setMinute(e.target.value)} className='dateSelect'>
                                {Array.from({ length: 60 }, (_, i) => i).map(m => (
                                    <option key={m} value={m.toString().padStart(2, '0')}>
                                        {m.toString().padStart(2, '0')}
                                    </option>
                                ))}
                            </select>
                            
                            <select value={second} onChange={(e) => setSecond(e.target.value)} className='dateSelect'>
                                {Array.from({ length: 60 }, (_, i) => i).map(s => (
                                    <option key={s} value={s.toString().padStart(2, '0')}>
                                        {s.toString().padStart(2, '0')}
                                    </option>
                                ))}
                            </select>
                            
                            <select value={ampm} onChange={(e) => setAmpm(e.target.value)} className='dateSelect'>
                                <option value="AM">AM</option>
                                <option value="PM">PM</option>
                            </select>
                        </div>

                        <div className='boxChoose'>
                            <select value={category} onChange={(e) => setCategory(e.target.value)}>
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
                                    <input 
                                        key={index} 
                                        type="text" 
                                        value={value.text} 
                                        onChange={(e) => NewInput(index, e.target.value)} 
                                        placeholder={`Work ${index + 1}`} 
                                        className='newInput' 
                                    />
                                ))}
                            </div>
                            <BiPlusCircle className='ToDoListIcon' onClick={addNewInput} />
                        </div>

                        <div className='boxButton'>
                            <input type="button" value="Cancel" className='buttonBox red' onClick={onclick} />
                            <input type="button" value="Send" className='buttonBox green' onClick={handleSend} />
                        </div>

                    </div>
                </form>
            )}

            {Alert && (
                <div className={`alertBox ${alertType}`}>
                    {alertMessage}
                </div>
            )}

            {cards.map((card) => (
                <div className={`card ${inSide ? 'coming' : ''}`} key={card.id}>
                    <div className='rank'><div className='squre'></div> {card.category}</div>
                    <div className='styleDownAndUP' onClick={answerChange}>
                        {inSide ? <IoIosArrowDown size={24} className='DownAndUp' /> : <IoIosArrowUp size={24} className='DownAndUp' />}
                    </div>
                    <div className='nameAndTimeCart'>
                        <p className='styleName'>{card.name}</p>
                        <p className='styleTime'>{card.time}</p>
                    </div>
                    <ul>
                        {card.tasks.map((task, index) => (
                            <li key={index} className={`taskItem ${task.done ? 'done' : ''}`}>
                                <input type="checkbox" checked={task.done} onChange={() => toggleDoneInCard(card.id, index)} />
                                <span>{task.text}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </>
    )
}

export default Home;