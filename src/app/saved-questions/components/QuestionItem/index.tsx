import React from 'react';
import { QuestionProp } from '@/types/types';
import s from './style.module.scss';
import { BookmarkIcon } from '@/assets/icons/BookmarkIcon';
import { BookMarkEmptyIcon } from '@/assets/icons/BookMarkEmpty';
import clsx from 'clsx';
import { CheckMarkIcon } from '@/assets/icons/CheckMarkIcon';
import { useQuizStore } from '@/store/quizStore';
import { handleAddToSaved, handleDeleteFromSaved } from '@/helpers/handleSave';
import { useSavedQuestions } from '@/hooks/useSavedQuestions';

interface QuestionItemProp {
  questions: QuestionProp;
  number: number;
}

export const QuestionItem = ({ questions, number }: QuestionItemProp) => {
  const { savedQuestions, isSaved, setIsSaved } = useSavedQuestions(questions);

  const openQuizModeInSaved = useQuizStore(
    (state) => state.openQuizModeInSaved
  );

  return (
    <div className={s.wrapper} id={number.toString()}>
      <div className={s.header}>
        <h2>{questions.question}</h2>
        <div className={s.savedIcons}>
          {isSaved ? (
            <span
              onClick={() =>
                handleDeleteFromSaved(savedQuestions, questions, setIsSaved)
              }
            >
              <BookmarkIcon color="#f1e50a" />
            </span>
          ) : (
            <span
              onClick={() =>
                handleAddToSaved(savedQuestions, isSaved, setIsSaved, questions)
              }
            >
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
                [s.openQuiz]: isCorrect && openQuizModeInSaved,
              })}
            >
              <button>{answer}</button>
              {isCorrect && !openQuizModeInSaved && (
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
