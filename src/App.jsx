import React, { useState } from 'react'
import NavBar from './components/NavBar/NavBar'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import {BrowserRouter ,Routes, Route, } from  'react-router-dom'
import { CartContextProvider } from './context/CartContext'
import Cart from './pages/Cart'
import Admin from './pages/Admin'
import Checkout from './pages/Checkout'

function App() {
  const [cart, setCart] = useState ([])
    return (
    <CartContextProvider>
    <BrowserRouter>
    
    <NavBar/>

    <Routes>
      
      <Route path="/" element={<ItemListContainer greeting='Hola'/>}/>
      <Route path="category/:category" element={<ItemListContainer greeting='Hola'/>}/>
      <Route path="producto/:id" element={<ItemDetailContainer/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/admin' element={<Admin/>}/>
      <Route path='/checkout' element={<Checkout/>}/>

    </Routes>
    </BrowserRouter>
    </CartContextProvider>
  )
}

export default App
