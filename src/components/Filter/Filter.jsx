import React, {memo} from 'react';
import cl from './Filter.module.css';
import FilterItem from '../FilterItem/FilterItem';
import {removeItemInArray} from '../../utils';

const Filter = ({value, onChange, fields}) => {

  const calcFilter = (key) => {
    let newValue = [...value];

    if (value.includes(key)){
      newValue = removeItemInArray(key, value) //Удаляем key из массива фильтров
    } else {
      newValue.push(key) //Добавляем в массив
    }

    if(newValue.length===0 || (newValue.length>1 && key === '-1')){ //Если ничего не выбрано или выбрано "Все" то оставить активной только "Все"
      newValue = ['-1']
    }

    if(newValue.length>1 && key !== '-1'){ //Если выбран любой фильтр кроме "Все" то убрать галочку "Все"
      newValue = removeItemInArray('-1', newValue)
    }

    return onChange(newValue)
  }

  return (
    <div className={cl.container}>
      <h3 className={cl.title}>Количество пересадок</h3>
      <div className={cl.options}>
        {Object.keys(fields).sort().map((key) => {
          return <FilterItem
            key={key}
            checked={value.includes(key)}
            onChange={() => {calcFilter(key)}}
          >
            {fields[key]}
          </FilterItem>
        })}
      </div>
    </div>
  );
};

export default memo(Filter);