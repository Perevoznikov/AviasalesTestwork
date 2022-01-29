import React, {memo} from 'react';
import cl from './Sort.module.css';
import SortItem from '../SortItem/SortItem';

const Sort = ({value, onChange}) => {
  const sortFields = [
    {key: 'price', title: 'Самый дешевый'},
    {key: 'duration', title: 'Самый быстрый'},
    {key: 'optimum', title: 'Оптимальный'}
  ]
  return (
    <div className={cl.container}>
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

export default memo(Sort);