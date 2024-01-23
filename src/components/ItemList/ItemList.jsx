import React from 'react'
import Item from '../Item/Item'


const ItemList = ({ products }) => {
    return (
      <div>
        {
          products.map((elemento)=>{
            return <Item key={elemento.id} product={elemento}/>
          })
        }
      </div>
    );
  };
  

export default ItemList