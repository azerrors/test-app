'use client';
import React, { useEffect, useState } from 'react';
import s from './style.module.scss';
import clsx from 'clsx';
import { useQuizStore } from '@/store/quizStore';
import { CheckMarkIcon } from '@/assets/icons/CheckMarkIcon';
import { BookMarkEmptyIcon } from '@/assets/icons/BookMarkEmpty';
import { QuestionProp } from '@/types/types';
import { BookmarkIcon } from '@/assets/icons/BookmarkIcon';
import { ProgressBar } from '@/components/ProgressBar';

interface TestWrapperProp {
  question: {
    question: string;
    options: string[];
    correctAnswer: string;
  };
}

export const TestWrapper = ({ question }: TestWrapperProp) => {
  const [savedQuestions, setSavedQuestions] = useState<QuestionProp[]>();
  const [isSaved, setIsSaved] = useState<boolean>(false);

  const showCorrectVariant = useQuizStore((store) => store.showCorrectVariant);
  const selectedAnswers = useQuizStore((store) => store.selectedAnswers);
  const setSelectedAnswer = useQuizStore((store) => store.setSelectedAnswer);

  const selectedAnswer = selectedAnswers.find(
    (q) => q.question === question.question
  )?.answer;

  useEffect(() => {
    const data = localStorage.getItem('saved');
    const savedQuestions = data ? JSON.parse(data) : [];
    setSavedQuestions(savedQuestions);
    setIsSaved(
      savedQuestions.some((q: QuestionProp) => q.question === question.question)
    );
  }, [question.question]);

  const handleAddToSaved = () => {
    const data = localStorage.getItem('saved');
    const savedQuestions = data ? JSON.parse(data) : [];

    if (!isSaved) {
      const updated = [...savedQuestions, question];
      localStorage.setItem('saved', JSON.stringify(updated));
      setIsSaved(true);
    } else {
      const updated = savedQuestions.filter(
        (q: QuestionProp) => q.question !== question.question
      );
      localStorage.setItem('saved', JSON.stringify(updated));
      setIsSaved(false);
    }
  };
  const handleDeleteFromSaved = () => {
    if (!savedQuestions) return;

    const updatedData = savedQuestions.filter(
      (saved) => saved.question !== question.question
    );

    localStorage.setItem('saved', JSON.stringify(updatedData));
    setIsSaved(false);
  };

  return (
    <div className={s.wrapper}>
      <div className={s.header}>
        <h2>{question.question}</h2>
        <div className={s.savedIcons}>
          {isSaved ? (
            <span onClick={handleDeleteFromSaved}>
              <BookmarkIcon color="#f1e50a" />
            </span>
          ) : (
            <span onClick={handleAddToSaved}>
              <BookMarkEmptyIcon color="#f1e50a" />
            </span>
          )}
        </div>
      </div>

      <ProgressBar />
      <ul className={s.answers}>
        {question.options.map((answer) => {
          const isCorrect =
            answer === question.correctAnswer && question.options;
          const isSelected = answer === selectedAnswer;

          return (
            <div
              key={answer}
              className={clsx(s.default, {
                [s.correct]: showCorrectVariant && isCorrect,
                [s.selected]: isSelected,
              })}
              onClick={() => setSelectedAnswer(question.question, answer)}
            >
              <button>{answer}</button>
              {showCorrectVariant && isCorrect && (
                <span className={s.icon}>
                  <CheckMarkIcon color="#2c8c72" />
                </span>
              )}
            </div>
          );
        })}
      </ul>
    </div>
  );
};
