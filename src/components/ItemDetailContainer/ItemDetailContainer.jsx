import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getProductById } from '../../AsyncMock'
import ItemDetail from '../ItemDetail/ItemDetail'

const ItemDetailContainer = () => {
    const {id}= useParams()
    const[producto, setProducto]= useState(null)

    useEffect(()=>{
        
        getProductById(id).then(res => setProducto(res))
        
    },  [id])


  return (
    <>
    {
         id &&
        <ItemDetail producto={producto}/>
    }
    </>
  )
}

export default ItemDetailContainer