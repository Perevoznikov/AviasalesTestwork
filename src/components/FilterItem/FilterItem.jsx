import React, {memo} from 'react';
import cl from './FilterItem.module.css';

const FilterItem = ({children, checked, ...props}) => {

  return (
    <label className={cl.container} >{children}
      <input type="checkbox" checked={checked} {...props}/>
      <div className={cl.checkbox}></div>
    </label>
  );
};

export default memo(FilterItem);