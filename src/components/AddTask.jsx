

import React, { useState } from 'react'

const AddTask = () => {

    const [taskValue, setTaskValue] = useState("")

    /* moze umjesto event samo e */

    const handleChange = (event) => {
        setTaskValue(event.target.value)
        console.log(event.target.value)
    }

    const handleReset = () => {
        setTaskValue("");
    }


    return (
        <section className="addtask">
            <form>
                <label htmlFor="task">Task Name:</label>
                <input onChange={handleChange} type="text" name='task' id='task' placeholder='Task name...' value={taskValue} />

                {/* ili na ovaj nacin. moze umjesto event samo e */}
                {/* <input onChange={(e) => setTaskValue(e.target.value)} type="text" name='task' id='task' placeholder='Task name' /> */}
                <button type='submit'>Add task</button>
                <span onClick={handleReset} className="reset">Reset</span>
            </form>
            <p>{taskValue}</p>
        </section>
    )
}

export default AddTask
