import React from 'react';
import SortItem from './SortItem';

const Sort = ({value, onChange}) => {
  const sortFields = [
    {key: 'price', title: 'Самый дешевый'},
    {key: 'duration', title: 'Самый быстрый'},
    {key: 'optimum', title: 'Оптимальный'}
  ]
  return (
    <div className="sort">
      {sortFields.map((field) => {
        return <SortItem
          key={field.key}
          isActive={field.key===value}
          onClick={() => {onChange(field.key)}}
        >
          {field.title}
        </SortItem>
      })}
    </div>
  );
};

export default Sort;