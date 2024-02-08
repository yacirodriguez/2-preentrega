import React, { useContext, useState } from 'react';
import Button from '../Button/Button';
import { CartContext } from '../../context/CartContext';
import Cart from '../../pages/Cart';
import { Link } from 'react-router-dom';

const ItemDetail = ({ producto }) => {
  const [counter, setCounter] = useState(1);
  const [addedProduct, setAddedProduct]= useState({})
  const { addToCart, cart, isInCart} = useContext(CartContext);

  console.log(cart)
  const handleAdd = () => {
    if (counter < producto.stock) {
      setCounter(counter + 1);
    }
  };

  const handleSubtract = () => {
    if (counter > 1) {
      setCounter(counter - 1);
    }
  };

  const handleAddToCart = () => {
    const newItem = { ...producto, cantidad: counter };
    addToCart(newItem);
    
  };

  return (
    <>
      {producto && (
        <>
        <div className="bg-white p-4 shadow-md rounded-md">
          <h2 className="text-2xl font-bold mb-4">{producto.nameProduct}</h2>
          <p className="text-gray-700 mb-4">{producto.description}</p>
          <p className="text-xl font-bold mb-4">${producto.price}</p>
          <img src={producto.img} alt="" className="mb-4 rounded-md" />
          {
            isInCart(producto.id)
            ?<Link to='/cart'><Button label='Ir al Carrito' callback={handleAdd}/></Link>
            :
            <>
            <div className="flex items-center mb-4">
            <Button label='-' callback={handleSubtract} className="bg-gray-200 px-4 py-2 rounded-l-md" />
            <div className="px-4 py-2 border-t border-b text-xl">{counter}</div>
            <Button label='+' callback={handleAdd} className="bg-gray-200 px-4 py-2 rounded-r-md" />
            <Button label='Agregar al Carrito' callback={handleAddToCart} className="bg-gray-200" />
          </div>
            </>
          }
        </div>
          </>
      )}
    </>
  );
};

export default ItemDetail;
