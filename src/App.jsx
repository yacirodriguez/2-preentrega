import React from 'react'
import NavBar from './components/NavBar/NavBar'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import {BrowserRouter ,Routes, Route, } from  'react-router-dom'

function App() {
  
    return (
    <>
    <BrowserRouter>
    
    <NavBar/>

    <Routes>
      
      <Route path="/" element={<ItemListContainer greeting='Hola'/>}/>
      <Route path="category/:category" element={<ItemListContainer greeting='Hola'/>}/>
      <Route path="producto/:id" element={<ItemDetailContainer/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
