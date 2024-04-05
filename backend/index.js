const express = require('express')
const {createTodo, updateTodo} =require('./types.js')
const {todo} =require('./db.js')
const cors =require('cors')


const app=express()
const port=3000

app.use(express.json())
app.use(cors())


app.post('/todos',async (req,res)=>{
    const createPayload=req.body
    const parsePayload=createTodo.safeParse(createPayload)

    if(!(parsePayload.success)){
        
            res.status(411).json({
                msg : "You sent wrong inputs"
            })
            return
    }

    await todo.create({
        title:createPayload.title,
        discription: createPayload.discription,
        completed:false
    })

})

app.get('/todos',async(req,res)=>{
 const todos= await todo.find()
 return(
    res.json({
        todos
    })
 )


})

app.put('/completed',async(req,res)=>{
    const updatePayload=req.body
    const parsePayload=updateTodo.safeParse(updatePayload)

    if(!(parsePayload.success)){
        
            res.status(411).json({
                msg : "You sent wrong inputs"
            })
        return
    }
    await todo.update({
        _id:req.body.id

    },{
        completed:true
    })
    res.json({
        msg:"Todo marked as completed"
    })

})

app.listen(port,()=>{
    {console.log(`App is listening on Port ${port}`)}
})