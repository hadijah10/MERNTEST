import React from 'react'
import { useState } from 'react'
import {useParams} from 'react-router-dom'
import {useNavigate} from 'react-router-dom';

function UpdateForm() {
    const [title,setTitle] = useState('')
    const [load,setLoad] = useState(0)
    const [rep,setRep] = useState(0)
    const [error,setError] = useState(null)
    const workout = {title:title,reps:rep,loads:load}
    const params = useParams();
    const id = params.id
    let navigate = useNavigate()

    const update = async()=>{
        const responx = await fetch('http://127.0.0.1:4000/api/workouts/'+id,{
            method:'PATCH',
            body:JSON.stringify(workout),
            headers:{
                'Content-Type':'application/json'
            }
        }
        )

        const json = await responx.json()

if(!responx.ok){
    setError(json.error)
}else{
setTitle('')
setLoad('')
setRep('')
setError(null)
navigate('/')
console.log("update workout "+json)

}
    }

  return (
    <>
    <div>
        <h1>Update Form</h1>
        <label htmlFor="utitle">Title</label>
        <input type="text" id="utitle" placeholder='Title' onChange={e => setTitle(e.target.value)}/>
        <label htmlFor="uload"></label>
        <input type="number" id="uload" placeholder='Load'  onChange={e => setLoad(e.target.value)}/>
        <label htmlFor="urep"></label>
        <input type="number" id ="urep"placeholder='Rep'  onChange={e => setRep(e.target.value)}/>
        <button onClick={update}>Update</button>
        {error && (<div className='error'>{error}</div>)}
    </div>
    </>
  )
}

export default UpdateForm