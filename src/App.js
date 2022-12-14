import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/bars/Navbar.component';
import HomeRoute from './routes/HomeRoute.route';
import ShopRoute from './routes/ShopRoute.route';
import AuthenticationRoute from './routes/Authentication.route';

const App = () =>  {
  return (
   <Routes>
      <Route path='/' element={<Navbar />}>
        {/* Set to render as homepage */}
        <Route index element={<HomeRoute />} />
        <Route path='/shop' element={<ShopRoute />} />
        <Route path='/auth' element={<AuthenticationRoute />} />
      </Route>
   </Routes>
  );
}

export default App;
