const express = require('express')
const {createTodo, updateTodo} =require('./types.js')
const {todo} =require('./db.js')
const cors =require('cors')


const app=express()
const port=3000

app.use(express.json())
app.use(cors())

app.delete('/todos', async (req, res) => {
    const id = req.query.id;
    console.log("this is the id " + id);
    await todo.findByIdAndDelete(id);
    res.json({ msg: 'Todo deleted' });
  });

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
    res.json({msg:"created"})


})

app.get('/todos',async(req,res)=>{
 const todos= await todo.find()
 return(
    res.json({
        todos
    })
 )


})

app.put('/todos/',async(req,res)=>{
    const id=req.query.id
    await todo.findByIdAndUpdate({_id:id},{completed:true})
    res.json({msg:"Task has been done!"});


    // const updatePayload=req.body
    // const parsePayload=updateTodo.safeParse(updatePayload)
    

    // if(!(parsePayload.success)){
        
    //         res.status(411).json({
    //             msg : "You sent wrong inputs"
    //         })
    //     return
    // }
    // await todo.findByIdAndUpdate({
    //     _id:req.body.id

    // },{
    //     completed:true
    // })
    // res.json({
    //     msg:"Todo marked as completed"
    // })
    //https://www.youtube.com/watch?v=IymPq7ik29k&list=PLwGdqUZWnOp2Z3eFOgtOGvOWIk4e8Bsr_



})

app.get('/',(req,res)=>{
    res.json({"msg":"Server is running"})
})

app.listen(port,()=>{
    {console.log(`App is listening on Port ${port}`)}
})