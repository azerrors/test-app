import React from 'react';
import { TestWrapper } from '@/widgets/TestWrapper';
import { Options } from '@/widgets/Options';
import { QuestionProp } from '@/types/types';

interface QuizLayoutProps {
  questionNumber: number;
  randomQuestions: QuestionProp[];
}

export const QuizLayout = ({
  randomQuestions,
  questionNumber,
}: QuizLayoutProps) => {
  return (
    <>
      <TestWrapper question={randomQuestions[questionNumber]} />
      <Options />
    </>
  );
};
