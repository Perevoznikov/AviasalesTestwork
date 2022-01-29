import {useMemo} from 'react';
import {getTitleFromCountStops} from '../utils';

const useCalcFilter = (array) => {
  const result = useMemo(() => {
    let filter = {'-1': 'Все'} //Значение по умолчанию
    if (array.length === 0) return filter //Если пустой массив, выходим со знач. по умолчанию

    array.forEach((item) => {
      let countStops = item.segments[0].stops.length // кол-во пересадок
      if (countStops.toString() in filter) return

      let title = getTitleFromCountStops(countStops) //Формируем заголовок в соответствии с количеством пересадок
      filter[countStops] = title
    })

    return filter
  }, [array])

  return result
};

export default useCalcFilter;