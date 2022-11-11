import React from 'react';

import '../../../styles/form-input.styles.scss';

/**
 * Setup the the FormInput to be a generic input
 * for all forms. Using spread operator to 
 * make sure the inputs get their correct
 * attributes.
 */

 const FormInput = ({ label, ...otherProps }) => {
   return (
     <div className='group'>
       <input className='form-input' {...otherProps} />
       {label && (
         <label
           className={`${
             otherProps.value.length ? 'shrink' : ''
           } form-input-label`}
         >
           {label}
         </label>
       )}
     </div>
   );
 };
 
 export default FormInput;
 