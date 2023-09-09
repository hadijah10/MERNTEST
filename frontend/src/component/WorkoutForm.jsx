
import React from "react"
import { useState } from "react"


const WorkoutForm = ()=> {
const [title,setTitle] = useState('')
const [loads,setLoads] = useState('')
const [reps,setReps] = useState('')
const [error,setError] = useState(null)

const handleSubmit = async(e) => {
e.preventDefault()
const workout = {title,load,reps}

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
}


}

return(
    <>
    <form action="" onSubmit={handleSubmit}>
        <h3>Add a New Workout</h3>
        <label htmlFor="title">Exercise Title:</label>
        <input type="text" id={title} placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} /><br></br>
        <label htmlFor="loads">Loads in kg</label>
        <input type="text" id={loads} placeholder="Loads" value={loads} onChange={e => setLoads(e.target.value)}/><br></br>
        <label htmlFor="reps">Reps:</label>
        <input type="text" id={reps} placeholder="Reps" value={reps} onChange={e => setReps(e.target.value)}/>
    <button onClick={handleSubmit}>Add Workout</button>
    </form>
    </>
)

}
export default WorkoutForm