const express = require('express')
const app = express()


// have to complete the next task  


//server port numebr 
const PORT = 3000

app.get('/',(req,res)=> {
    res.send(`Welcome, The server is running on ${PORT}`)
})

app.post('/login',(req,res)=>{
    res.send(`you are in the login route`)
})

 
//  work on the singup 
app.post('/singup',async(req,res)=>{
    try{
        const {username,password} = req.body
        // const hashPassword = await bcrypt.hash(password,10)

    }
    catch(error){
        res.status(500).send("there is an error while singup userdata", error)
    }
    
})

app.post('/logout',(req,res)=>{
    res.send(`you are in the logout route`)
})


app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}`)
})