

import React from 'react'
import Home from "./compontns/home/Home"
import { Route, Routes } from "react-router-dom"
import Join from './compontns/join/Join'
import Contact from './compontns/contact/Contact'


function App() {
  return (
    <div>

      <Routes>

        <Route element={<Home />} path='/' />
        <Route element={<Join />} path='/joincommunity' />
        <Route element={<Contact />} path='/contact' />
        
        
       


      </Routes>

      

      

      
    </div>
  )
}

export default App

