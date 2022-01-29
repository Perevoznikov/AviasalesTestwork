import React, {memo} from 'react';
import cl from './SortItem.module.css';

const SortItem = ({isActive, children, ...props}) => {
  let className = (isActive)?`${cl.container} ${cl.active}`:cl.container
  return (
    <div className={className} {...props}>{children}</div>
  );
};

export default memo(SortItem);