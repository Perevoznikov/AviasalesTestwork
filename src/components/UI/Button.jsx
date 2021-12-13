import React from 'react';

const Button = ({disabled, isLoading, ...props}) => {
  let text = (disabled)?'Билетов больше нет' : 'Показать еще 5 билетов'
  let content = (isLoading)
    ? <svg className="spinner" viewBox="0 0 50 50">
      <circle className="path" cx="25" cy="25" r="20" fill="none" strokeWidth="5"></circle>
    </svg>
    : text

  return (
    <button className="app__more" disabled={disabled} {...props}>{content}</button>
  );
};

export default Button;