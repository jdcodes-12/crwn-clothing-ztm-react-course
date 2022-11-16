import React, { useContext } from 'react';

import { CategoriesContext } from '../contexts/categories.context';

import CategoryPreview from '../components/CategoryPreview.component';

import '../styles/shop-layout.styles.scss';

const ShopRoute = () => {

  // Pull products from CategoriesContext
  const { categoriesMap } = useContext(CategoriesContext);

  return (
    <div className='shop-container'>
      {
        Object.keys(categoriesMap).map((key) => {
          const products = categoriesMap[key];
          return <CategoryPreview key={key} title={key} products={products} />;
        })
      }
    </div>
  );
}

export default ShopRoute;