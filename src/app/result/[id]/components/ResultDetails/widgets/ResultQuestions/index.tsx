import React from 'react';

import s from './style.module.scss';
import { ResultsProps } from '@/types/types';
import { ResultQuestion } from '@/app/result/[id]/components/ResultDetails/widgets/ResultQuestions/components/ResultQuestion';

interface ResultQuestionsProps {
  lastResult: ResultsProps | undefined;
  showCorrectQuestions: boolean;
  showWrongQuestions: boolean;
}

export const ResultQuestions = ({
  lastResult,
  showCorrectQuestions,
  showWrongQuestions,
}: ResultQuestionsProps) => {
  const totalQuestion = lastResult?.totalQuestion;
  const answeredQuestion = lastResult?.answeredQuestion;

  return (
    <div className={s.wrapper}>
      {totalQuestion
        ?.filter((question) => {
          if (!showCorrectQuestions && !showWrongQuestions) return true;

          const userResponse = answeredQuestion?.find(
            (a) => a.question === question.question
          );

          if (showCorrectQuestions)
            return userResponse?.answer === question.correctAnswer;
          if (showWrongQuestions)
            return userResponse?.answer !== question.correctAnswer;

          return true;
        })
        .map((question, index) => (
          <ResultQuestion
            key={index}
            question={question}
            index={index}
            answeredQuestion={answeredQuestion}
          />
        ))}
    </div>
  );
};
