import React, { useContext } from 'react';
import Button from '../Button/Button';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({ producto }) => {
  const { addToCart, cart, isInCart } = useContext(CartContext);

  const handleAddToCart = (quantity) => {
    const newItem = { ...producto, cantidad: quantity };
    addToCart(newItem);
  };

  return (
    <>
      {producto && (
        <div className="bg-white p-4 shadow-md rounded-md">
          <h2 className="text-2xl font-bold mb-4">{producto.nameProduct}</h2>
          <p className="text-gray-700 mb-4">{producto.description}</p>
          <p className="text-xl font-bold mb-4">${producto.price}</p>
          <img src={producto.img} alt="" className="mb-4 rounded-md" />
          {isInCart(producto.id) ? (
            <Link to="/cart">
              <Button label="Ir al Carrito" />
            </Link>
          ) : (
            <ItemCount initial={1} stock={producto.stock} onAdd={handleAddToCart} />
          )}
        </div>
      )}
    </>
  );
};

export default ItemDetail;
