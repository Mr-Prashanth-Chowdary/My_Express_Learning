const express = require('express')
const app = express()

//server port numebr 
const PORT = 3000

app.get('/',(req,res)=> {
    res.send(`Welcome, The server is running on ${PORT}`)
})



app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}`)
})