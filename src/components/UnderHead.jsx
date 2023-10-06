

import React, { useState } from 'react'
import TaskCard from './TaskCard';
import BoxCard from './BoxCard';

const UnderHead = ({ info }) => {

    /* 
    
    1The current state of this state variable, initially set to the initial state you provided.
    [tasks ovo je stari zadani 1, setTasks set-pa dalje je nova funckija 2]
    2The set function that lets you change it to any other value in response to interaction.
 */

    const [tasks, setTasks] = useState([
        { id: 1, name: "nikola", completed: false },
        { id: 221312, name: "peor", completed: true },
        { id: 3, name: "Alokin", completed: false }
    ]);

    const [show, setSwow] = useState(true)

    let buttonText = show ? "Hide Task" : "Show Task";

    function handleDelete(id) {
        setTasks(tasks.filter(task => task.id !== id))
        console.log(id);

        /* Another method for conditionally rendering elements inline is to use the JavaScript conditional operator condition ? true : false. */
    }

    return (
        <>
            <ul>
                <div className='header'>
                    <h1>Task List </h1>
                    <button className='trigger' onClick={() => setSwow(!show)}>{buttonText}</button>
                </div>
                {show && tasks.map((task) => (
                    <TaskCard key={task.id} task={task} handleDelete={handleDelete} />
                ))}
            </ul>

            <BoxCard result="success">
                <p className="title">Lorem ipsum dolor sit amet.</p>
                <p className="description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis, fugiat.</p>
            </BoxCard>

            <BoxCard result="warning">
                <p className="title">Lorem ipsum dolor sit amet.</p>
                <p className="description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis, fugiat.</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor sed mollitia delectus repellendus voluptatibus laudantium explicabo non molestiae consequatur ad?</p>
            </BoxCard>

        </>
    )
}

export default UnderHead
