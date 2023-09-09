import React, { useEffect, useState } from 'react'
import WorkoutDetails from '../component/WorkoutDetails';
import WorkoutForm from '../component/WorkoutForm';

export default function Home() {
    const [workouts,setWorkouts] = useState(null);

    useEffect(()=>{
        const fetchworkouts = async()=> {
           try{
            const response = await fetch('http://localhost:4000/api/workouts')
            const rest= await response.json()
            if(response.ok) {
                setWorkouts(rest )
            }
          }catch(error){
              console.log(error)
            }
           
        }
        fetchworkouts()
    },[])
  return (
    <>
    <div className='home'>
        <div className='workouts'>
            {workouts && workouts.map((data) => (
             <div key = {data.id}>
               <WorkoutDetails  workout={data}/>
             </div>
            ))}
        </div>
        <WorkoutForm/>
    </div>
    </>
  )
}
