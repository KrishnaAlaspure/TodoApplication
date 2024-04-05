import { useState,useEffect } from 'react'
import CreateTodo from './components/CreateTodo'
import Todos from './components/Todos'
import axios from 'axios'
import './App.css'

function App() {
 
  return(
    <>
    <div className='CT-contianer'>
    <CreateTodo/>
    </div>
    <div className='Td-container'>
    <Todos/>
    </div>
    

    
    </>
  )
}
  
export default App
