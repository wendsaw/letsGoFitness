
const express =require('express');

const  mongoose=require('mongoose');


require ('dotenv').config()

//express app

const app=express();

const workoutRoutes=require('../backend/routes/workouts')

//middlewares

app.use(express.json())

app.use((req,res,next)=>{

    console.log(req.path, req.method);
    next()
    
})

//routes

app.use('/api/workouts',workoutRoutes)

//connect to db

mongoose.connect(process.env.MONG_URL)
.then(()=>{
    //listen for request

app.listen(process.env.PORT,()=>{

    console.log('listen on port', process.env.PORT,'connect to data base');
    
})
})
.catch((err)=>{

    console.log(err);
    
})


