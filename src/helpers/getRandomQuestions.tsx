'use client';

import { QuestionProp } from '@/types/types';

export const getRandomQuestions = (
  questions: QuestionProp[],
  count: number
) => {
  const shuffled = [...questions].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};
