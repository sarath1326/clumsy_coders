

import React from 'react'
import Home from "./compontns/home/Home"
import { Route, Routes } from "react-router-dom"
import Join from './compontns/join/Join'


function App() {
  return (
    <div>

      <Routes>

        <Route element={<Home />} path='/' />
        <Route element={<Join />} path='/joincommunity' />
        
        
       


      </Routes>

      

      

      
    </div>
  )
}

export default App

