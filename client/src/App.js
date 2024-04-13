

import React from 'react'
import Home from "./compontns/home/Home"
import { Route, Routes } from "react-router-dom"
import Join from './compontns/join/Join'
import Contact from './compontns/contact/Contact'
import Projects from './compontns/projects/Projects'
import Nave from './compontns/nave/Nave'
import About from './compontns/about/About'
import Service from './compontns/service/Service'


function App() {
  return (
    <div>

      <Nave />

      <Routes>

        <Route element={<Home />} path='/' />
        <Route element={<Join />} path='/joincommunity' />
        <Route element={<Contact />} path='/contact' />
        <Route element={<Projects />} path='/projects' />
        <Route element={<About />} path='/about' />
        <Route element={<Service />} path='/services' />
        
        
       


      </Routes>

      

      

      
    </div>
  )
}

export default App

