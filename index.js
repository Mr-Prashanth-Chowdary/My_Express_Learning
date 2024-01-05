const express = require('express')
const app = express()

//server port numebr 
const PORT = 3000

app.get('/',(req,res)=> {
    res.send(`Welcome, The server is running on ${PORT}`)
})

app.post('/login',(req,res)=>{
    res.send(`you are in the login route`)
})

app.post(`/singin`,(req,res)=>{
    res.send(`you are in the signin route`)
})

app.post('/logout',(req,res)=>{
    res.send(`you are in the logout route`)
})


app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}`)
})