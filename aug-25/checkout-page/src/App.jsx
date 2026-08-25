import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import Cart from './pages/Cart'
import CheckOut from './pages/CheckOut'


const App = () => {
  return (

    <div>

      <Routes>

        <Route path = "/" element= {<Home />}  />

        <Route path = "/cart" element = { <Cart /> } />

        <Route path = "/checkout" element = {<CheckOut/>}  />

      </Routes>
      
    </div>
  )
}

export default App

