import { QuestionProp, ResultsProps } from '@/types/types';

export const handleDelete = (
  totalResults: ResultsProps[],
  setTotalResults: (data: ResultsProps[]) => void,
  index: number
) => {
  const updatedData = totalResults?.filter((_, i) => i !== index);
  setTotalResults(updatedData);
  localStorage.setItem('total', JSON.stringify(updatedData));
};
export const handleAddToResults = (
  data: ResultsProps[] | undefined,
  randomQuestions: QuestionProp[],
  selectedAnswers: { question: string; answer: string }[]
) => {
  const newEntry = {
    totalQuestion: randomQuestions,
    answeredQuestion: selectedAnswers,
  };
  const updatedData = [...(data || []), newEntry];

  localStorage.setItem('total', JSON.stringify(updatedData));
};
