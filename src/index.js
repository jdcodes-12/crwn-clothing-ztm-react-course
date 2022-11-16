import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter } from 'react-router-dom';
import { UserProvider } from './contexts/user.context';
import { CategoriesProvider } from './contexts/categories.context';
import { CartProvider } from './contexts/cart.context';

import App from './App';

import reportWebVitals from './reportWebVitals';

import './index.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));

// Remember to go up to fetch contexts:
// here CategoriesProvider can reach into the user object
// User object cannot necessarily reach into the products provider
root.render(

  <React.StrictMode>
    <BrowserRouter>
     <UserProvider>
      <CategoriesProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </CategoriesProvider>
     </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();