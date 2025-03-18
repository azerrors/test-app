'use client';

import React from 'react';
import s from './style.module.scss';
import { useQuizStore } from '@/store/quizStore';
import Link from 'next/link';

export const Options = () => {
  const selectedAnswers = useQuizStore((store) => store.selectedAnswers);
  const questionNumber = useQuizStore((store) => store.questionNumber);
  const setQuestionNumber = useQuizStore((store) => store.setQuestionNumber);
  const setShowCorrectVariant = useQuizStore(
    (store) => store.setShowCorrectVariant
  );
  const showCorrectVariant = useQuizStore((store) => store.showCorrectVariant);
  const randomQuestions = useQuizStore((store) => store.randomQuestions);

  const handleNext = () => {
    if (questionNumber === randomQuestions.length - 1) {
      return null;
    }
    setQuestionNumber(1);
    setShowCorrectVariant(false);
  };

  const handlePrevious = () => {
    if (questionNumber === 0) {
      return null;
    }
    setQuestionNumber(-1);
    setShowCorrectVariant(false);
  };

  return (
    <div className={s.options}>
      <span>
        {questionNumber + 1}/{randomQuestions.length}
      </span>
      <div className={s.buttons}>
        <Link href={selectedAnswers.length === 0 ? '#' : '/results'}>
          <button disabled={selectedAnswers.length === 0} className={s.primary}>
            Bitir
          </button>
        </Link>

        <button
          type="button"
          className={s.primary}
          onClick={handlePrevious}
          disabled={questionNumber === 0}
        >
          Geri
        </button>
        <button
          type="button"
          className={s.primary}
          onClick={handleNext}
          disabled={questionNumber === randomQuestions.length - 1}
        >
          Ireli
        </button>
        {showCorrectVariant ? (
          <button
            type="button"
            className={s.secondary}
            onClick={() => setShowCorrectVariant(false)}
          >
            Dogru Varianti Gizledin
          </button>
        ) : (
          <button
            type="button"
            className={s.secondary}
            onClick={() => setShowCorrectVariant(true)}
          >
            Dogru Varianti Gosterin
          </button>
        )}
      </div>
    </div>
  );
};
