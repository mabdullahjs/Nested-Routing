import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../screens/Home/Home'
import Login from '../screens/Login'

function Router() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='home/*' element={<Home/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default Router