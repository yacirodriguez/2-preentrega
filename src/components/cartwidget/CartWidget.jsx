import React, { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"


const CartWidget = () => {
  const {itemQuantity} = useContext(CartContext)
    return (
      <Link to='/cart'>

      <div className='text-white flex items-center'>
        <span role="img" aria-label='Carrito de compras'>🛒</span>
        <span className='cart-count'>{itemQuantity()}</span>
      </div>
      </Link>
    )
  }
  
  export default CartWidget
  