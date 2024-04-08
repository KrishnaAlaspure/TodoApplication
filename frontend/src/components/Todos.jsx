import React, { useState ,useEffect} from "react";
import axios from 'axios'
import "../css/Todos.css"

export default function Todos(){
    function onClickHandle(id){
      
      axios.put("http://localhost:3000/todos/?id="+id)
      .then((res)=>{
        alert('Marked as done!')
        refreshList();
      })
      .catch((error)=>{
        setError(error.message);
      })
    
    }
    const clickDeleteHandle=(id)=>{
      console.log(id);
      axios.delete("http://localhost:3000/todos/?id="+id)
        .then((res)=>{
          alert('Deleted');
          refreshList();
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
   const refreshList = () =>{
    const a=axios.get("http://localhost:3000/todos/")
    .then((response)=>{
     const t=response.data
     setTodos(t.todos)
    }).catch((error)=>{
     console.log(error.message);
     setError(error.message)
    })
   }
  useEffect(()=>{
    refreshList();
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
                    <button onClick={()=>onClickHandle(todo._id)} value={todo.completed} disabled={todo.completed===true} >{todo.completed?"Done":"Not Done"}</button>
                    <button onClick={()=>{clickDeleteHandle(todo._id)}} >Delete</button>
                      </div>
                    </div>
                )
            })}
            </div>
        </>
    )
}