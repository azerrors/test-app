'use client';
import React, { useState } from 'react';
import s from './style.module.scss';
import clsx from 'clsx';
import { useQuizStore } from '@/store/quizStore';

interface TestWrapperProp {
  question: {
    question: string;
    options: string[];
    correctAnswer: string;
  };
}

export interface QuestionProp {
  question: string;
  options: string[];
  correctAnswer: string;
  number?: string;
}

export const TestWrapper = ({ question }: TestWrapperProp) => {
  const showCorrectVariant = useQuizStore((store) => store.showCorrectVariant);
  const selectedAnswers = useQuizStore((store) => store.selectedAnswers);
  const setSelectedAnswer = useQuizStore((store) => store.setSelectedAnswer);

  const selectedAnswer = selectedAnswers.find(
    (q) => q.question === question.question
  )?.answer;

  return (
    <div className={s.wrapper}>
      <h2>{question.question}</h2>
      <ul className={s.answers}>
        {question.options.map((answer) => {
          const isCorrect =
            answer === question.correctAnswer && question.options;
          const isSelected = answer === selectedAnswer;

          return (
            <button
              key={answer}
              onClick={() => setSelectedAnswer(question.question, answer)}
              className={clsx(s.default, {
                [s.correct]: showCorrectVariant && isCorrect,
                [s.selected]: isSelected,
              })}
            >
              {answer}
            </button>
          );
        })}
      </ul>
    </div>
  );
};
