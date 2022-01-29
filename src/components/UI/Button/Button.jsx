import React, {memo} from 'react';
import cl from './Button.module.css';

const Button = ({disabled, isLoading, ...props}) => {
  let text = (disabled)?'Билетов больше нет' : 'Показать еще 5 билетов'
  let content = (isLoading)
    ? <svg className={cl.spinner} viewBox="0 0 50 50">
      <circle className={cl.path} cx="25" cy="25" r="20" fill="none" strokeWidth="5"></circle>
    </svg>
    : text

  return (
    <button className={cl.container} disabled={disabled} {...props}>{content}</button>
  );
};

export default memo(Button);