import { useState } from 'react'
import {Route,Routes} from 'react-router-dom'
import Home from './pages/Home'
import NavBar from './component/NavBar'
function App() {


  return (
    <>
    <NavBar/>
     <Routes>
        <Route path='/' element={<Home/>}></Route>
     </Routes>
    </>
  )
}

export default App
