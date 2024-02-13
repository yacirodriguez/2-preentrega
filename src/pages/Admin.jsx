import React from 'react'
import {products} from '../AsyncMock'
import {db} from '../services/firebaseConfig'
import { collection,addDoc } from 'firebase/firestore'

const productsRef =collection(db,'products')

const handledUpload = ()=>{
    products.forEach((item)=>{
        delete item.id
        addDoc(productsRef, item)
    })
}


const Admin = () => {
  return (
    <div onClick={()=>handledUpload()}>subir productos</div>
  )
}

export default Admin