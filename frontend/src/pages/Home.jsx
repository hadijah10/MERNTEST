import React, { useEffect, useState } from 'react'
import WorkoutDetails from '../component/WorkoutDetails';
import WorkoutForm from '../component/WorkoutForm';
import axios from "axios"
import { useWorkoutContext } from '../hooks/useWorkoutContext';

export default function Home() {
    //const [workouts,setWorkouts] = useState([]);
   const {workouts,dispatch} = useWorkoutContext()

    useEffect(()=>{
        const fetchworkouts = async()=> {
           try{
            const response = await fetch('http://127.0.0.1:4000/api/workouts')
            const rest= await response.json()
            if(response.ok) {
              //  setWorkouts(rest )
              dispatch({type:'SETWORKOUTS',payload:rest})
            }
          }catch(error){
              console.log(error)
            }
           
        }
        fetchworkouts()
       /*axios.get('http://127.0.0.1:4000/api/workouts').then(response => //setWorkouts(response.data)
       dispatch({type:'SETWORKOUTS',payload:response.data})
       ).catch(error => console.log(error))*/
    },[dispatch])
  return (
    <>
    <div className='home'>
        <div className='workouts'>
            {workouts && workouts.map((data) => (
             <div key = {data._id}>
               <WorkoutDetails  workout={data} id = {data._id}/>
             </div>
            ))}
        </div>
        <WorkoutForm/>
    </div>
    </>
  )
}
