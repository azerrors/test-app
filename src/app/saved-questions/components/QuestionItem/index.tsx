import React, { useEffect, useState } from 'react';
import { QuestionProp } from '@/types/types';
import s from './style.module.scss';
import { BookmarkIcon } from '@/assets/icons/BookmarkIcon';
import { BookMarkEmptyIcon } from '@/assets/icons/BookMarkEmpty';
import clsx from 'clsx';
import { CheckMarkIcon } from '@/assets/icons/CheckMarkIcon';

interface QuestionItemProp {
  questions: QuestionProp;
  number: number;
}

export const QuestionItem = ({ questions, number }: QuestionItemProp) => {
  const [isSaved, setIsSaved] = useState<boolean>(false);
  const [savedQuestions, setSavedQuestions] = useState<QuestionProp[]>();

  useEffect(() => {
    const data = localStorage.getItem('saved');
    const savedQuestions = data ? JSON.parse(data) : [];
    setSavedQuestions(savedQuestions);
    setIsSaved(
      savedQuestions.some(
        (q: QuestionProp) => q.question === questions.question
      )
    );
  }, [questions.question]);

  const handleAddToSaved = () => {
    const data = localStorage.getItem('saved');
    const savedQuestions = data ? JSON.parse(data) : [];

    if (!isSaved) {
      const updated = [...savedQuestions, questions];
      localStorage.setItem('saved', JSON.stringify(updated));
      setIsSaved(true);
    } else {
      const updated = savedQuestions.filter(
        (q: QuestionProp) => q.question !== questions.question
      );
      localStorage.setItem('saved', JSON.stringify(updated));
      setIsSaved(false);
    }
  };
  const handleDeleteFromSaved = () => {
    if (!savedQuestions) return;

    const updatedData = savedQuestions.filter(
      (saved) => saved.question !== questions.question
    );

    localStorage.setItem('saved', JSON.stringify(updatedData));
    setIsSaved(false);
  };

  return (
    <div className={s.wrapper} id={number.toString()}>
      <div className={s.header}>
        <h2>{questions.question}</h2>
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
      <ul className={s.answers}>
        {questions.options.map((answer) => {
          const isCorrect =
            answer === questions.correctAnswer && questions.options;

          return (
            <div
              key={answer}
              className={clsx(s.default, {
                [s.correct]: isCorrect,
              })}
            >
              <button>{answer}</button>
              {isCorrect && isCorrect && (
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
