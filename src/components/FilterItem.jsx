import React from 'react';

const FilterItem = ({children, checked, ...props}) => {

  return (
    <label className="filters__option" >{children}
      <input type="checkbox" checked={checked} {...props}/>
      <div className="checkbox__indicator"></div>
    </label>
  );
};

export default FilterItem;