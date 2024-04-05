const mongoose =require('mongoose')
const { string, boolean } = require('zod')

mongoose.connect("mongodb+srv://krishnaalas:aP9MSy3LiVfyfv6I@cluster0.9hmsiut.mongodb.net/")

const todoSchema=mongoose.Schema({
    title: String,
    discription : String,
    completed : Boolean
})


const todo=mongoose.model('todos',todoSchema)

module.exports={
    todo
}