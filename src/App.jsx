import React, { useState } from 'react'
import Navbar from './components/navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import PlaceOrder from './pages/placeOrder/placeOrder'
import Home from './pages/home/home'
import Cart from './pages/cart/cart'
import Header from './components/Header/Header.Jsx'
import Footer from './components/footer/Footer'
import LoginPopUp from './components/LoginPopUp/LoginPopUp'

const App = () => {
  const [showLogin, setShowLogin]=useState(false)
  return (
    <>
    {showLogin ?<LoginPopUp setShowLogin/>:<></>}

    <div className='app'>
   < Navbar setShowLogin={setShowLogin}/>
    <Routes>
      <Route path='/' element ={<Home/>}/>
      <Route path='/cart' element ={<Cart/>}/>
      <Route path='/order' element ={<PlaceOrder/>}/>
    </Routes>     
    </div>

    <Footer/>
    </>
  )
}

export default App
