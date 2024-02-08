import React, {useEffect, useState} from "react";
import { getProducts, getProductsByCategory } from "../../AsyncMock";
import ItemList from "../ItemList/ItemList"
import {useParams} from 'react-router-dom';

const ItemListContainer = ({greeting}) => {
  const [loading, setLoading] = useState(true)
  const [products,setProducts] = useState([])
  const {category}= useParams()
  useEffect(()=>{
    
    category ?
    getProductsByCategory(category).then(res => {
      setProducts(res);
    }):
    getProducts().then((res) => {
      setProducts(res);
    }).finally(() => {
      setLoading(false)
      ,1000});
    
  }, [category] )
  return (
    <div className='w-full flex justify-center items-center'>
      {loading? <div>Cargando...</div>:   
      <ItemList products={products}/>
      }
    </div>
  )
}

export default ItemListContainer 