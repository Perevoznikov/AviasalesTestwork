import {useState} from 'react';

const useFetch = (callback) => {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  const fetching = async (...args) => {
    try {
      setIsLoading(true)
      return await callback(...args)
    } catch (e) {
      setError(e)
      throw new Error(e)
    } finally {
      setIsLoading(false)
    }
  }

  return [fetching, isLoading, error]
};

export default useFetch;