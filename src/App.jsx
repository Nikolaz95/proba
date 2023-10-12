

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


import Header from './components/Header'
import Footer from './components/Footer'
import Tasklist from './components/TaskList'
import AddTask from './components/AddTask'

function App() {

  /* 
 
1The current state of this state variable, initially set to the initial state you provided.
[tasks ovo je stari zadani 1, setTasks set-pa dalje je nova funckija 2]
2The set function that lets you change it to any other value in response to interaction.
*/

  const [tasks, setTasks] = useState([/* 
    { id: 1, name: "nikola", completed: false },
    { id: 221312, name: "peor", completed: true },
    { id: 3, name: "Alokin", completed: false }
   */]);


  return (
    <div className='App'>
      <Header />
      <AddTask tasks={tasks} setTasks={setTasks} />
      <Tasklist tasks={tasks} setTasks={setTasks} />
      <Footer />
    </div>
  )
}

export default App
