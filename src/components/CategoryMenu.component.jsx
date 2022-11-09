import React from 'react';
import CategoryItem from './CategoryItem.component.jsx';
import '../styles/categories.styles.scss';

const CategoryMenu = ({ collections }) => {
  return (
    <div className='categories-container'>
       {collections.map(({ id, title, imageUrl }) => (
        <CategoryItem id={id} title={title} imageUrl={imageUrl}/>
       ))}
    </div>
  );
}

export default CategoryMenu;