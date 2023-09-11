const mongoose = require('mongoose')

//const Schema = mongoose.Scheme

const workoutSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    reps:{
        type:Number,
        required: true
    },
    loads:{
        type:Number,
        require:true
    }

},    {timestamps:true})

module.exports = mongoose.model('Workout',workoutSchema)