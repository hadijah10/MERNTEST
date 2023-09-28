import { useState } from 'react'
import {Route,Routes} from 'react-router-dom'
import Home from './pages/Home'
import NavBar from './component/NavBar'
import UpdateForm from './component/UpdateForm'
function App() {


  return (
    <>
    <NavBar/>
     <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/update/:id' element={<UpdateForm/>}></Route>
     </Routes>
    </>
  )
}

export default App
