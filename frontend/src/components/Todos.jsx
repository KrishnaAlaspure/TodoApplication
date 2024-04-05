import React, { useState ,useEffect} from "react";
import axios from 'axios'
import "../css/Todos.css"

export default function Todos(){
    function onClickHandle(event){
      console.log(event);
    
    }
    const clickDeleteHandle=(title)=>{
      console.log(title);
      axios.delete("http://localhost:3000/todos/"+title)
        .then((res)=>{
          alert('Deleted')
        }).catch((error)=>{
          console.log(error.message);
          setError(error.message)
         })
    }

    const [todos,setTodos]=useState([])
    const [error,setError]=useState([])
  
    /*fetch("http://localhost:3000/todos")
    .then(async function(response){
  
      const json= await response.json()
      console.log(json.todos)
      setTodos(json.todos)
    })
    */
  useEffect(()=>{
    const a=axios.get("http://localhost:3000/todos/")
    .then((response)=>{
     const t=response.data
     setTodos(t.todos)
    }).catch((error)=>{
     console.log(error.message);
     setError(error.message)
    })
  },[])
    return(
        <>
            <div className="grid-container ">
            {todos.map((todo)=>{
              const a=todo._id 
                return(
                    <div key={todo._id} className="grid-item">
                      <div>
                    
                    <h2>{todo.title}</h2>
                    <p>{todo.discription}</p>
                    <button onClick={onClickHandle} value={todo.completed} >{todo.completed?"Done":"Not Done"}</button>
                    <button onClick={()=>{clickDeleteHandle(todo.title)}} >Delete</button>
                      </div>
                    </div>
                )
            })}
            </div>
        </>
    )
}