import React, { useContext } from 'react';
import { ProductsContext } from '../contexts/products.context';
import ProductCard from '../components/cards/ProductCard.component';
import '../styles/shop-layout.styles.scss';

const ShopRoute = () => {
  
  // Pull products from ProductsContext
  const { products } = useContext(ProductsContext);

  return (
    <div className='shop-grid'>
     {
      products.map((product) => 
        <ProductCard key={product.id} product={product}/>
      )
     }
    </div>
  );
}

export default ShopRoute;