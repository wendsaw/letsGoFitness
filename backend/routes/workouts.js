
const express =require('express')

const router=express.Router()

const Workout =require ('../models/workoutModel')

//get all workouts


router.get('/',(req,res)=>{

    res.json({mssg:'get all workouts'})



})


//get a single workout

router.get('/:id',(req,res)=>{

    res.json({mssg:'get a single workout'})


})

// post or create a new workout 

router.post('/',async (req,res)=>{

    const {title,load ,reps}=req.body

    try {

        const workout = await Workout.create({ title, load, reps });
        res.status(200).json(workout)
        
    } catch (error) {
        res.status(400).json({error:error.message})
        
    }

    

})

//delete workout

router.delete('/:id',(req,res)=>{

    res.json({mssg:"a  workout was deleted"})
    
})

//update workout

router.put('/:id',(req,res)=>{

    res.json({mssg:"a workout was updated"})
    
})

module.exports=router