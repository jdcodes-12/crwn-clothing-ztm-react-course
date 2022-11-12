import React, { createContext, useState } from 'react';

/**
 *  Changes to context's state will rerender the component.
 *  Additionally, as soon as a component is hooked using `useContext()`
 *  and attached to this context, that component will trigger rerenders.
 * 
 *  Can lead to performance issues if:
 *  - many components are hooked into a single context
 *  - components have large lines of code that is being rerun on each render cycle
 */

// Setup the initial values of the context
export const UserContext = createContext({
  currentUser: null, // null b/c {} returns `true` in JS - to avoid empty obj case, needs to be null
  setCurrentUser: () => null,
});

// The component that enables access to the above context.
// Must be wrapped around children that need to have access
// to this content.
export const UserProvider = ({ children }) => {

  // Setup initial values of UserContext's state - null
  const [currentUser, setCurrentUser] = useState(null);

  // Create values that the children can access to modify this
  // context's state. Done through the valueObj.
  const valueObj = { currentUser, setCurrentUser };

  return ( 
    <UserContext.Provider value={valueObj}>
        {children}
    </UserContext.Provider>
  );
}