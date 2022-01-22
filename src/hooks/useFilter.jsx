import React, {useMemo} from 'react';

const useFilter = (filter, array) => {
  let result = useMemo(() => {
    if(filter.includes('-1')) return [...array] //выбрано все

    return array.filter((item) => {
      let countStopsFrom = item.segments[0].stops.length
      return filter.includes(countStopsFrom.toString())
    })
  }, [filter, array])

  return result
};

export default useFilter;