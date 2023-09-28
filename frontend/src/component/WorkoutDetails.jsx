import { useEffect} from "react"
import {Link} from 'react-router-dom'
import { useWorkoutContext } from "../hooks/useWorkoutContext"

const WorkoutDetails = ({workout,id}) => {
    const {dispatch} = useWorkoutContext()
    const handleclick=async()=>{
        const responx = await fetch('http://127.0.0.1:4000/api/workouts/'+workout._id,{
            method:'DELETE'
        }
        )
        const json = await responx.json()
        
        if(responx.ok){
            dispatch({type:'DELETEWORKOUT',payload:json})
        }
    } 

    return (
        <div className="workout-details">
            <h4>{workout.title}</h4>
            <p><strong>Load(kg):</strong>{workout.loads}</p>
            <p><strong>Reps:</strong>{workout.reps}</p>
            <p>{workout.createdAt}</p>
            <Link  className='ubtn'  to={`update/${id}`}>Update</Link>
            <span onClick={handleclick}>delete</span>
        </div>
    )
}
export default WorkoutDetails