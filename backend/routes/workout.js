const express = require("express")
const Workout = require('../Model/workoutSchema')
const router = express.Router();
const {getworkout,getsingleworkout,createworkout,deleteworkout,updateRoute} = require('../Controller/workoutController')
//get all workouts
router.get('/',getworkout)
//get single workout
router.get('/:id',getsingleworkout
)
//post workout
router.post('/',createworkout
)
//delete workout
router.delete('/:id', deleteworkout)
//update a workout
router.patch('/:id',updateRoute)
module.exports = router;