import React, {useMemo} from 'react';

const useSort = (sort, array) => {
  return useMemo(() => {
    switch (sort) {
      case 'price':
        return sortPrice(array)
      case 'duration':
        return sortDuration(array)
      case 'optimum':
        return sortOptimum(array)
      default:
        return [...array]
    }
  }, [sort, array])
};

const sortPrice = (array) => {
  return [...array].sort((a, b) => {
    return a.price - b.price
  })
}

const sortDuration = (array) => {
  return [...array].sort((a, b) => {
    let durationA = a.segments[0].duration + a.segments[1].duration
    let durationB = b.segments[0].duration + b.segments[1].duration
    return durationA - durationB
  })
}

const sortOptimum = (array) => {
  return [...array].sort((a, b) => {
    let calcA = (a.segments[0].duration + a.segments[1].duration) * a.price
    let calcB = (b.segments[0].duration + b.segments[1].duration) * b.price
    return calcA - calcB
  })
}

export default useSort
