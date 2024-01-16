import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({ product }) => {
  return (
    <div className="border p-4 rounded-md transition transform hover:shadow-md hover:scale-105">
      <img className="h-64 w-full object-cover mb-4" src={product.img} alt={product.nameProduct} />
      <h3 className="text-lg font-bold mb-2">{product.nameProduct}</h3>
      <p className="text-gray-700 mb-2">{product.description}</p>
      <p className="text-xl font-bold text-gray-800">${product.price}</p>
      <Link
        to={`/producto/${product.id}`}
        className="mt-2 inline-block px-4 py-2 bg-blue-500 text-white rounded-md transition hover:bg-blue-600"
      >
        Ver detalles
      </Link>
    </div>
  );
};

export default Item;
