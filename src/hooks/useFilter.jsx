import {useMemo} from 'react';

//фильтрует массив билетов по количеству пересадок
// -1 - все билеты, 0 - без пересадок, 1 - 1 пересадка и т.д.
const useFilter = (filter, array) => {
  let result = useMemo(() => {
    if(filter.includes('-1')) return [...array] //выбраны все билеты

    return array.filter((item) => {
      let countStopsFrom = item.segments[0].stops.length
      return filter.includes(countStopsFrom.toString())
    })
  }, [filter, array])

  return result
};

export default useFilter;