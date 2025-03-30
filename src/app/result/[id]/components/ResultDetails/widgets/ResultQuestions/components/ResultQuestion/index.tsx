import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import s from './style.module.scss';
import { AnsweredQuestionProps, QuestionProp } from '@/types/types';
import { CheckMarkIcon } from '@/assets/icons/CheckMarkIcon';
import { BookmarkIcon } from '@/assets/icons/BookmarkIcon';
import { BookMarkEmptyIcon } from '@/assets/icons/BookMarkEmpty';

interface ResultQuestionProps {
  question: QuestionProp;
  index: number;
  answeredQuestion: AnsweredQuestionProps[] | undefined;
}

export const ResultQuestion = ({
  question,
  index,
  answeredQuestion,
}: ResultQuestionProps) => {
  // matching answered question in all questions
  const userResponse = answeredQuestion?.find(
    (a) => a.question === question.question
  );

  //getting user`s answer
  const userAnswer = userResponse?.answer;

  //getting question correct answer
  const correctAnswer = question.correctAnswer;

  //checking was user answered?
  const hasUserAnswered = userAnswer !== undefined;

  const [isSaved, setIsSaved] = useState<boolean>(false);
  const [savedQuestions, setSavedQuestions] = useState<QuestionProp[]>();

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
    <div className={s.chaker}>
      <span className={s.questionNumber}>Sual : {index + 1}</span>
      <div key={index}>
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
        <ul className={s.answers}>
          {question.options.map((answer, idx) => {
            // user`s answer
            const isUserAnswer = answer === userAnswer;

            const isCorrectAnswer = answer === correctAnswer;

            return (
              <div
                key={idx}
                className={clsx(s.default, {
                  [s.correct]: isCorrectAnswer,
                  [s.wrong]:
                    hasUserAnswered && isUserAnswer && !isCorrectAnswer,
                  [s.unanswered]: !hasUserAnswered,
                })}
              >
                <button>{answer}</button>
                {isCorrectAnswer && (
                  <span className={s.icon}>
                    <CheckMarkIcon color="#2c8c72" />
                  </span>
                )}
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
