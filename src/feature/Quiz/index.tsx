'use client';
import React, { useEffect } from 'react';
import { MainWrapper } from '@/widgets/MainWrapper';
import { QuizLayout } from '@/widgets/QuizLayout';
import { useQuizStore } from '@/store/quizStore';
import { getRandomQuestions } from '@/helpers/getRandomQuestions';
import { istehsal } from '@/data/data';
import { QuestionProp } from '@/types/types';

interface QuizProps {
  questionData?: QuestionProp[];
  questionCategory?: string;
}

export const Quiz = ({ questionData, questionCategory }: QuizProps) => {
  const questionNumber = useQuizStore((store) => store.questionNumber);
  const resetQuiz = useQuizStore((store) => store.resetQuiz);
  const randomQuestions = useQuizStore((store) => store.randomQuestions);
  const setRandomQuestions = useQuizStore((store) => store.setRandomQuestions);

  let quiz: QuestionProp[] = [];

  console.log('asda');

  if (questionCategory === 'istehsal') {
    quiz = istehsal;
  }

  useEffect(() => {
    resetQuiz();
    if ((questionData && questionData.length > 0) || quiz.length > 0) {
      setRandomQuestions(getRandomQuestions(questionData || quiz, 50));
    }
  }, [questionData]);

  if (randomQuestions.length === 0) return <p>Loading...</p>;
  return (
    <MainWrapper>
      <QuizLayout
        questionNumber={questionNumber}
        randomQuestions={randomQuestions}
      />
    </MainWrapper>
  );
};
