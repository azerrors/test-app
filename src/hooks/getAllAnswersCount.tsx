'use client';

import { useEffect, useState } from 'react';
import { AnsweredQuestionProps, QuestionProp } from '@/types/types';

const useCorrectAnswersCount = (
  answeredQuestions: AnsweredQuestionProps[] | [],
  totalQuestions: QuestionProp[] | undefined
) => {
  const [correctAnswersCount, setCorrectAnswersCount] = useState(0);
  const wrongAnswersCount = answeredQuestions?.length - correctAnswersCount;

  useEffect(() => {
    const correctCount = answeredQuestions?.reduce((count, answered) => {
      const relatedQuestion = totalQuestions?.find(
        (q) => q.question === answered.question
      );

      return relatedQuestion &&
        relatedQuestion.correctAnswer === answered.answer
        ? count + 1
        : count;
    }, 0);
    setCorrectAnswersCount(correctCount);
  }, [answeredQuestions, totalQuestions]);
  return { correctAnswersCount, wrongAnswersCount };
};

export default useCorrectAnswersCount;
