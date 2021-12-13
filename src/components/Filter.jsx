import React from 'react';
import FilterItem from './FilterItem';
import {removeItemInArray} from '../utils';

const Filter = ({filter, setFilter, filterFields}) => {

  const calcFilter = (key) => {
    let newFilter = [...filter];

    if (filter.includes(key)){
      newFilter = removeItemInArray(key, filter) //Удаляем key из массива фильтров
    } else {
      newFilter.push(key) //Добавляем в массив
    }

    if(newFilter.length===0 || (newFilter.length>1 && key === '-1')){ //Если ничего не выбрано или выбрано "Все" то оставить активной только "Все"
      newFilter = ['-1']
    }

    if(newFilter.length>1 && key !== '-1'){ //Если выбран любой фильтр кроме "Все" то убрать галочку "Все"
      newFilter = removeItemInArray('-1', newFilter)
    }

    return setFilter(newFilter)
  }

  return (
    <div className="filters">
      <h3 className="filters__title">Количество пересадок</h3>
      <div className="filters__options">
        {Object.keys(filterFields).sort().map((key) => {
          return <FilterItem
            key={key}
            checked={filter.includes(key)}
            onChange={() => {calcFilter(key)}}
          >
            {filterFields[key]}
          </FilterItem>
        })}
      </div>
    </div>
  );
};

export default Filter;