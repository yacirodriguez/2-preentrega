import React, { useContext, useEffect, useState } from "react"
import { CartContext } from "../context/CartContext"


const Checkout = () => {
    const {cart} = useContext(CartContext)
    
    const [values, setValues] = useState({
        name: '',
        adress: '',
        email: '',
    })

    const handleSubmit = ()=> {
        return
    }

    const handleInputChange = (e) => {
        console.log(e.target.value)
        setValues({
            ...values, 
            [e.target.name]: e.target.value
        })

    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input
            type="text"
            required
            placeholder="Tu nombre"
            name='name'
            onChange={handleInputChange}
            />
            <input
            type="text"
            required
            placeholder="Dirección"
            name='adress'
            onChange={handleInputChange}
            />
            <input
            type="email"
            required
            placeholder="Tu email"
            name='email'
            onChange={handleInputChange}
            />
            <button className="btn btn-succes" type="submit">Confirmar compra</button>/>
            

        </form>
    </div>
  )
}

export default Checkout