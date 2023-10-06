import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import UnderHead from './components/UnderHead'
import AddTask from './components/AddTask'

function App() {


  return (
    <div className='App'>
      <Header />
      <AddTask />
      <UnderHead />
      <Footer />
    </div>
  )
}

export default App
