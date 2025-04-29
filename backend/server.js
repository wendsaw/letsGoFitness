
const express =require('express');

require ('dotenv').config()

//express app

const app=express();

//middlewares

app.use((req,res,next)=>{

    console.log(req.path, req.method);
    next()
    
})

//routes

app.get('/', (req,res)=>{

    res.send({mssg:'welcome to the app'})
})

//listen for request

app.listen(process.env.PORT,()=>{

    console.log('listen on port', process.env.PORT);
    
})
