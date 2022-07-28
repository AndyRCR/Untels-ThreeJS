import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Layout from '../components/Layout'
import Home from '../views/Home'

const Rutas = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Layout/>}>
                <Route index element={<Home/>}/>
            </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default Rutas