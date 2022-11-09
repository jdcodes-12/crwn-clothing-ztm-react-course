import React from 'react';
import { Routes, Route } from 'react-router-dom';

import HomeRoute from './routes/HomeRoute.route';

const App = () =>  {
  return (
   <Routes>
      <Route path='/home' element={<HomeRoute />} />
   </Routes>
  );
}

export default App;
