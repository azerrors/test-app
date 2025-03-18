'use client';

import React, { useEffect } from 'react';
import { MainWrapper } from '@/app/widgets/MainWrapper';
import { TestWrapper } from '@/app/widgets/TestWrapper';
import { Options } from '@/app/widgets/Options';
import { useQuizStore } from '@/store/quizStore';
import { getRandomQuestions } from '@/helpers/getRandomQuestions';
import { questions } from '@/app/data/data';

export default function Page() {
  const questionNumber = useQuizStore((store) => store.questionNumber);
  const randomQuestions = useQuizStore((store) => store.randomQuestions);
  const setRandomQuestions = useQuizStore((store) => store.setRandomQuestions);

  useEffect(() => {
    setRandomQuestions(getRandomQuestions(questions, 50));
  }, []);

  if (randomQuestions.length === 0) return <p>Loading...</p>;

  return (
    <MainWrapper>
      <TestWrapper question={randomQuestions[questionNumber]} />
      <Options />
    </MainWrapper>
  );
}
