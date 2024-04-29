

import React from 'react'
import Home from "./compontns/home/Home"
import { Route, Routes } from "react-router-dom"
import Join from './compontns/join/Join'
import Contact from './compontns/contact/Contact'
import Projects from './compontns/projects/Projects'
import Nave from './compontns/nave/Nave'
import About from './compontns/about/About'
import Service from './compontns/service/Service'
import OpenS from './compontns/opensource/OpenS'
import OpenHost from './compontns/opensource/OpenHost'
import Viewproject from './compontns/opensource/Viewproject'


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
        <Route element={<OpenS />} path='/openSource' />
        <Route element={<OpenHost />} path='/openHost' />
        <Route element={<Viewproject />} path='/viewproject' />
        
        
       


      </Routes>

      

      

      
    </div>
  )
}

export default App

