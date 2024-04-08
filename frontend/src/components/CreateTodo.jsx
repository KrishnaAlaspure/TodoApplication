import axios from "axios";
import '../css/CreateTodo.css'

import React, { useEffect, useState } from "react";


export default function CreateTodo(){
    const [title,setTitle]=useState("")
    const [discription,setDiscription]=useState("")
    const [data,setData]=useState({title:"",discription:""})

    const [todos,setTodos]=useState([])
    const [error,setError]=useState([])

    function handleChange(event){
        setData({...data,[event.target.name]:event.target.value})
    }
    
    function handleSubmit(event){
        event.preventDefault();
        console.log("hello");
        
        
            axios.post("http://localhost:3000/todos",data)
            .then((response)=>{ 
                
                console.log(response.data);
                console.log(data);
                location.reload()
            }).catch((error)=>{
                console.log(error);
            })
        
     
    }
   
    
    



    return(
        <>
        <br />
        <div className="sub-contianerCT">
        <div >
        <input type="text" name="title" value={data.title} placeholder="title" onChange={handleChange}/><br />
        <input type="text" name="discription" value={data.discription} placeholder="discription" onChange={handleChange}/><br />

        <button id="" onClick={handleSubmit}>Add Todo</button>
        </div>
        </div>
        </>
    )
}