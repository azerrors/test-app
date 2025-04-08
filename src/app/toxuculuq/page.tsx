import React from 'react';
import { questions } from '@/data/data'; // Sualların olduğu data faylını idxal edirik

import s from './style.module.scss';
import { MainWrapper } from '@/widgets/MainWrapper';
import clsx from 'clsx';

export default function ToxuculuqPage() {
  return (
    <MainWrapper>
      <div className={s.wrapper}>
        {questions.map((question) => {
          const isDone = question.options.map(
            (op) => op === question.correctAnswer
          );
          console.log();

          return (
            <div key={question.number}>
              <div className={s.questionName}>
                <span>{question.number}</span>
                <h3>{question.question}</h3>
              </div>
              <ul className={s.answers}>
                {question.options.map((option, index) => {
                  const isCorrect = option === question.correctAnswer;

                  return (
                    <div
                      key={index}
                      className={clsx(s.correct, isCorrect && s.right)}
                    >
                      <span className={s.plus}>{isCorrect && '+'}</span>

                      <li className={clsx(isCorrect && s.d)}>{option}</li>
                    </div>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </MainWrapper>
  );
}
