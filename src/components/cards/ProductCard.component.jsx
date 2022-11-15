import React from 'react';
import Button from '../buttons/Button.component';
import '../../styles/product-card.styles.scss';

const ProductCard = ({ product }) => {
  const { name, imageUrl, price } = product;

  return (
    <div className='product-card-container'>
      <img src={imageUrl} alt={`${name} on sale for ${price}`} />
      <div className='footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
      <Button buttonType='inverted'>Add to Cart</Button>
    </div>
  );
}

export default ProductCard;