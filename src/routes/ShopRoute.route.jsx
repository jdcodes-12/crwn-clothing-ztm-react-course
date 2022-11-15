import React, { useContext } from 'react';
import { ProductsContext } from '../contexts/products.context';

const ShopRoute = () => {
  
  // Pull products from ProductsContext
  const { products } = useContext(ProductsContext);

  return (
    <div>
     {
      products.map(({id, name}) => 
        <div key={id}>
          <h1>{name}</h1>
        </div>
      )
     }
    </div>
  );
}

export default ShopRoute;