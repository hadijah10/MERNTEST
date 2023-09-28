
import React from "react"
import axios from "axios"
import { useState } from "react"
import {useWorkoutContext} from '../hooks/useWorkoutContext'


const WorkoutForm = ()=> {
const {dispatch} = useWorkoutContext()
const [title,setTitle] = useState('')
const [loads,setLoads] = useState(null)
const [reps,setReps] = useState(null)
const [error,setError] = useState(null)

const handleSubmit = async(e) => {
e.preventDefault()
const workout = {title,reps,loads}

const response = await fetch('http://localhost:4000/api/workouts',{
    method:'POST',
    body:JSON.stringify(workout),
    headers:{
        'Content-Type':'application/json'
    }
   
}) 
const json = await response.json()

if(!response.ok){
    setError(json.error)
}else{
setTitle('')
setLoads('')
setReps('')
setError(null)
console.log("new workout added "+json)
dispatch({type:'CREATEWORKOUT',payload:json})
}
/*axios.post('http://localhost:4000/api/workouts',{title,loads,reps})
.then(resp => {alert("user created")
//error i
setTitle('')
setLoads('')
setReps('')
setError(null)
console.log("new workout added "+json)
dispatch({type:'CREATEWORKOUT',payload:resp.data})})

.catch(err =>{console.log(err)
    setError(json.error)})*/

}

return(
    <>
    <form action="" onSubmit={handleSubmit}>
        <h3>Add a New Workout</h3>
        <label htmlFor="title">Exercise Title:</label>
        <input type="text" id="title" placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} required/><br></br>
        <label htmlFor="loads">Loads in kg</label>
        <input type="number" id="loads" placeholder="Loads" value={loads} onChange={e => setLoads(e.target.value)} required/><br></br>
        <label htmlFor="reps">Reps:</label>
        <input type="number" id="reps" placeholder="Reps" value={reps} onChange={e => setReps(e.target.value)} required/>
    <button onClick={handleSubmit}>Add Workout</button>
    {error && (<div className='error'>{error}</div>)}
    </form>
    </>
)

}
export default WorkoutForm