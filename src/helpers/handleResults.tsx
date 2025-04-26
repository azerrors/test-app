import { ResultsProps } from '@/types/types';

export const handleDelete = (
  totalResults: ResultsProps[],
  setTotalResults: (data: ResultsProps[]) => void,
  index: number
) => {
  const updatedData = totalResults?.filter((_, i) => i !== index);
  setTotalResults(updatedData);
  localStorage.setItem('total', JSON.stringify(updatedData));
};
