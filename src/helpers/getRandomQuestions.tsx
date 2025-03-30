'use client';

export const getRandomQuestions = (questions: never[], count: number) => {
  const shuffled = [...questions].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};
