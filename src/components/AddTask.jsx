

import React, { useState, useRef } from 'react'

const AddTask = ({ tasks, setTasks }) => {

    /* const [taskValue, setTaskValue] = useState(""); */
    const [progress, setProgress] = useState(false);
    const taskRef = useRef("s");  /* useref nacin  */

    /* moze umjesto event samo e */

    const handleChange = (event) => {
        /* setTaskValue(event.target.value) */
        console.log(taskRef)
        console.log(event.target.value)
    }

    const handleReset = () => {
        /* setTaskValue(""); */
        taskRef.current.value = ""; /* useref nacin za restart */
        /* setProgress(false) */    /* za select restart */
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const task = {
            id: Math.floor(Math.random() * 10000),
            name: taskRef.current.value, /* taskRef.current.value UseRef  */ /* taskValue za prvi nacin */
            completed: progress
        }
        setTasks([...tasks, task])
        handleReset()
        console.log(task)
    }
    /* setTasks([...tasks, task]) tasks je od prije iz app.jsx da postavi objekte a task je novo sto cemo mi sami dodati */


    return (
        <section className="addtask">
            <form onSubmit={handleSubmit}>
                <label htmlFor="task">Task Name:</label>
                <input onChange={handleChange} type="text" name='task' id='task' placeholder='Task name...' /* value={taskValue} */ ref={taskRef}  /*useref nacin   */ />

                <select onChange={(event) => setProgress(event.target.value)} value={progress} /*value={progress} da se vrati na zadano */ >
                    <option value={false}>Pending</option>
                    <option value={true}>Completed</option>
                </select>

                {/* ili na ovaj nacin. moze umjesto event samo e */}
                {/* <input onChange={(e) => setTaskValue(e.target.value)} type="text" name='task' id='task' placeholder='Task name' /> */}
                <button type='submit'>Add task</button>
                <span onClick={handleReset} className="reset">Reset</span>
            </form>
            <p>{/* {taskValue} */}</p>
        </section>
    )
}

export default AddTask
