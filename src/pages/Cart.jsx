import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cart, total, emptyCart, removeItem } = useContext(CartContext);
  const [quantityToRemove, setQuantityToRemove] = useState(1);

  const handleRemoveItem = (id) => {
    removeItem(id, quantityToRemove);
    setQuantityToRemove(1);
  };

  return (
    <div className="container mx-auto mt-8">
      {cart.length === 0 ? (
        <h3 className="text-xl font-semibold text-center">Tu carrito está vacío</h3>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item.nameProduct} className="flex items-center justify-between border-b-2 border-gray-300 mb-4">
              <div className="flex items-center space-x-4">
                <img className="h-24 w-24 object-cover" src={item.img} alt={item.nameProduct} />
                <div>
                  <h3 className="text-lg font-semibold">{item.nameProduct}</h3>
                  <p className="text-gray-600">Precio: ${item.price}</p>
                  <p className="text-gray-600">Cantidad: {item.cantidad}</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                {/* Contador para elegir la cantidad a eliminar */}
                <input
                  type="number"
                  min="1"
                  max={item.cantidad}
                  value={quantityToRemove}
                  onChange={(e) => setQuantityToRemove(parseInt(e.target.value))}
                  className="w-16 px-2 py-1 border rounded-md text-center"
                />
                <button className="bg-gray-100 text-white px-4 py-2 rounded-md hover:bg-violet-600" onClick={() => handleRemoveItem(item.id)}>❌</button>
              </div>
            </div>
          ))}

          <div className="flex justify-between mt-4">
            <h3 className="text-lg font-semibold">Precio total: $ {total()}</h3>
            <div>
              <button className="bg-red-500 text-white px-4 py-2 rounded-md mr-2 hover:bg-red-600" onClick={() => emptyCart()}>Vaciar Carrito</button>
              <Link to="/checkout" className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600">Confirmar compra</Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
