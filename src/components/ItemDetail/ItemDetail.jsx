import React, { useState } from 'react';
import Button from '../Button/Button';

const ItemDetail = ({ producto }) => {
  const [counter, setCounter] = useState(1);

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

  return (
    <>
      {producto && (
        <div className="bg-white p-4 shadow-md rounded-md">
          <h2 className="text-2xl font-bold mb-4">{producto.nameProduct}</h2>
          <p className="text-gray-700 mb-4">{producto.description}</p>
          <p className="text-xl font-bold mb-4">${producto.price}</p>
          <img src={producto.img} alt="" className="mb-4 rounded-md" />
          <div className="flex items-center mb-4">
            <Button label='-' callback={handleSubtract} className="bg-gray-200 px-4 py-2 rounded-l-md" />
            <div className="px-4 py-2 border-t border-b text-xl">{counter}</div>
            <Button label='+' callback={handleAdd} className="bg-gray-200 px-4 py-2 rounded-r-md" />
          </div>
        </div>
      )}
    </>
  );
};
export default ItemDetail;
