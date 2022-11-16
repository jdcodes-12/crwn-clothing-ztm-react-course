import React, { createContext, useEffect, useState } from 'react';

import { getCategoriesAndDocuments } from '../utils/firebase/firebase.config.utils.js';

export const CategoriesContext = createContext({
    categoriesMap: {},
});
 
export const CategoriesProvider = ({ children }) => {

  const [categoriesMap, setCategoriesMap] = useState({});
  const value = { categoriesMap }


  // When needing async functions in useEffect(),
  // make sure to wrap the aysnc operation with a function
  // this is because passing aysnc into useEffect will
  // generate an error b/c no cleanup procedure is available, 
  // but useEffect looks for a cleanup procedure.
  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      setCategoriesMap(categoryMap);
    }

    getCategoriesMap();
  }, []);

  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  )
}