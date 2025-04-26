import { useEffect, useState } from 'react';
import { ResultsProps } from '@/types/types';

export const useResults = () => {
  const [totalResults, setTotalResults] = useState<ResultsProps[]>();
  useEffect(() => {
    const storedData = localStorage.getItem('total');
    if (storedData) {
      setTotalResults(JSON.parse(storedData));
    }
  }, []);

  return { totalResults, setTotalResults };
};
