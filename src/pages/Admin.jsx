import React from 'react'
import {products} from '../AsyncMock'
import {db} from '../services/firebaseConfig'
import { collection,addDoc } from 'firebase/firestore'
import Button from '../components/Button/Button'

const productsRef =collection(db,'products')

const handledUpload = ()=>{
    products.forEach((item)=>{
        delete item.id
        addDoc(productsRef, item)
    })
}


const Admin = () => {
  return (
    <button onClick={()=>handledUpload()}>subir productos</button>
  )
}

export default Admin