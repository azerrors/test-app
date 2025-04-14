import React from 'react';

import s from './style.module.scss';
import Link from 'next/link';
import useCorrectAnswersCount from '@/hooks/getAllAnswersCount';
import { ResultsProps } from '@/types/types';
import clsx from 'clsx';

interface ResultInfoProp {
  lastResult: ResultsProps | undefined;
  setShowCorrectQuestions: React.Dispatch<React.SetStateAction<boolean>>;
  setShowWrongQuestions: React.Dispatch<React.SetStateAction<boolean>>;
  showCorrectQuestions: boolean;
  showWrongQuestions: boolean;
}

export const ResultInfo = ({
  lastResult,
  setShowCorrectQuestions,
  setShowWrongQuestions,
  showCorrectQuestions,
  showWrongQuestions,
}: ResultInfoProp) => {
  const answeredQuestions = lastResult?.answeredQuestion;
  const totalQuestions = lastResult?.totalQuestion;

  const { correctAnswersCount, wrongAnswersCount } = useCorrectAnswersCount(
    answeredQuestions ?? [],
    totalQuestions
  );

  const handleShowCorrectAnswers = () => {
    setShowCorrectQuestions(true);
    setShowWrongQuestions(false);
  };

  const handleShowWrongAnswers = () => {
    setShowCorrectQuestions(false);
    setShowWrongQuestions(true);
  };

  const handleShowAllAnswers = () => {
    setShowCorrectQuestions(false);
    setShowWrongQuestions(false);
  };
  return (
    <div className={s.wrapper}>
      <div className={s.additionalInfo}>
        <span>Cavablanılan Suallar: {answeredQuestions?.length}</span>
        <span>Doğru Cavablar: {correctAnswersCount}</span>
        <span>Yanlış Cavablar: {wrongAnswersCount}</span>
      </div>

      <div className={s.filters}>
        <button
          type="button"
          className={clsx(
            s.f_correct,
            showCorrectQuestions ? s.c_correct : s.c_default
          )}
          onClick={handleShowCorrectAnswers}
        >
          Doğru Cavabları Göstər
        </button>
        <button
          type="button"
          className={clsx(
            s.f_wrong,
            showWrongQuestions ? s.c_wrong : s.c_default
          )}
          onClick={handleShowWrongAnswers}
        >
          Yanlış Cavabları Göstər
        </button>

        <button
          type="button"
          className={s.f_all}
          onClick={handleShowAllAnswers}
        >
          Bütün Cavabları Göstər
        </button>
      </div>

      <div className={s.links}>
        <Link href="/" className={s.home}>
          <button type="button">/ Sınaq Et</button>
        </Link>

        <Link href="/totalResults" className={s.other}>
          <button type="button">/ Digər Nəticələr</button>
        </Link>
      </div>
    </div>
  );
};
