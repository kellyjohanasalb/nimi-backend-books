import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/home/home'

const Router = () => {
  return (
      <BrowserRouter>
          <Routes>
              <Route path='/' element={ <Home/>} />
          </Routes>
      </BrowserRouter>
  )
}
export default Router

   