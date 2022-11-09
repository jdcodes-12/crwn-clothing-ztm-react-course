import React from 'react';

const App = () =>  {

  const collections = [
    { id: 1, title: 'Hats', },
    { id: 2, title: 'Jackets', },
    { id: 3, title: 'Sneakers', },
    { id: 4, title: 'Womens', },
    { id: 5, title: 'Mens', },
  ];

  return (
    <div className="categories-container">
      <div className="categories-container">
       {collections.map(({id, title}) => (
         <div className='categories-container'>
          <div className="backgroun-image" />
          <div id={id} className='category-body-container'>
            <h2>{title}</h2>
            <p>Shop Now</p>
          </div>
         </div>
       ))}
      </div>
    </div>
  );
}

export default App;
