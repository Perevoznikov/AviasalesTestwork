import React from 'react';

const SortItem = ({isActive, children, ...props}) => {
  let className = (isActive)?"sort__section sort__section_active":"sort__section"
  return (
    <div className={className} {...props}>{children}</div>
  );
};

export default SortItem;