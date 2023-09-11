const workout  = require('../Model/workoutSchema')
const mongoose = require('mongoose')
//get all workout
const getworkout=async(req,res)=> {
    const works = await workout.find({}).sort({createdAt:-1})
    res.status(200).json(works)
}

//get single workout
const getsingleworkout = async(req,res)=>{
    const  {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such workout'})
    }
    const workouts = await workout.findById(id)
    if (!workouts){
        return res.status(404).json({error: 'No such workout'})
    }
    res.status(200).json(workouts)
}
//create new workout
const createworkout = async(req,res)=> {
    const {title,loads,reps} = req.body;

    try{
        const workoute = await workout.create({title,loads,reps})
        res.status(200).json(workoute)
    }catch(error){
        res.status(404).json({error:error.message})
    }
res.json({msg: 'Post a new workout'})}

//delete workout
const deleteworkout = async(req,res)=> {
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such workout'})
    }

    const weh = await workout.findOneAndDelete({_id:id})
  if(!weh){
    return res.status(400).json({error: 'No such workout deleted'})
  }
  res.status(200).json(weh)


}

//update route
const updateRoute = async(req,res) => {
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such workout updated'})
    }
    const up = await workout.findOneAndDUpdate({_id:id},{...req.body})
    if(!up){
        res.status(404).json({error:'No update'})
    }
    res.status(200).json(up)
}

module.exports = {getworkout,getsingleworkout,createworkout,deleteworkout,updateRoute}