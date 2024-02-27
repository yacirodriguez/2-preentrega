import React, { useState } from "react";

const ItemCount = ({ initial, stock, onAdd }) => {
  const [count, setCount] = useState(initial);

  const handleIncrement = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <div className="flex items-center">
      <button
        className="bg-gray-200 px-2 py-1 rounded-l-md text-sm"
        onClick={handleDecrement}
      >
        -
      </button>
      <div className="px-2 py-1 border-t border-b">{count}</div>
      <button
        className="bg-gray-200 px-2 py-1 rounded-r-md text-sm"
        onClick={handleIncrement}
      >
        +
      </button>
      <button
        className="bg-gray-200 px-4 py-2 text-sm ml-2"
        onClick={() => onAdd(count)}
      >
        Agregar al Carrito
      </button>
    </div>
  );
};

export default ItemCount;
