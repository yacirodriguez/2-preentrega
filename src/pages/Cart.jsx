import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';

const Cart = () => {
  const { cart, total, emptyCart, removeItem } = useContext(CartContext);
  const [quantityToRemove, setQuantityToRemove] = useState(1); // Estado para almacenar la cantidad a eliminar

  const handleRemoveItem = (id) => {
    removeItem(id, quantityToRemove); // Llama a removeItem con la cantidad a eliminar
    setQuantityToRemove(1); // Restaura la cantidad a eliminar a 1 después de eliminar
  };

  return (
    <div className="mt-4">
      {cart.length === 0 ? (
        <h3 className="text-xl font-semibold">Tu carrito está vacío</h3>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item.id} className="flex items-center justify-between pl-6 border-b-2 border-gray-300 mb-4">
              <div className="flex items-center space-x-4">
                <img className="h-20" src={item.img} alt={item.nameProduct} />
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
                <button className="btn btn-danger" onClick={() => handleRemoveItem(item.id)}>❌</button>
              </div>
            </div>
          ))}
          
            <h3 className="text-lg font-semibold">Precio total: $ {total()}</h3>
            <button className="btn btn-danger" onClick={() => emptyCart()}>Vaciar Carrito</button>
          
        </>
      )}
    </div>
  );
};

export default Cart;
