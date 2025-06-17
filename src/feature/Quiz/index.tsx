'use client';
import React, { useEffect } from 'react';
import { MainWrapper } from '@/widgets/MainWrapper';
import { QuizLayout } from '@/widgets/QuizLayout';
import { useQuizStore } from '@/store/quizStore';
import { getRandomQuestions } from '@/helpers/getRandomQuestions';
import { istehsal } from '@/data/data';
import { QuestionProp } from '@/types/types';
import { lif } from '@/data/data1';
import { iqtisadi } from '@/data/data3';
import { material } from '@/data/datat4';

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

  if (questionCategory === 'istehsal') {
    quiz = istehsal;
  } else if (questionCategory === 'material') {
    quiz = material;
  } else if (questionCategory === 'iqtisadi') {
    quiz = iqtisadi;
  } else if (questionCategory === 'lif') {
    quiz = lif;
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
