import React from 'react';
import s from '@/app/totalResults/components/style.module.scss';
import useCorrectAnswersCount from '@/hooks/getAllAnswersCount';
import { ResultItemProp } from '@/types/types';
import Link from 'next/link';

export const ResultItem = ({
  number,
  totalResults,
  onDelete,
}: ResultItemProp) => {
  const answeredQuestions = totalResults.answeredQuestion;
  const totalQuestions = totalResults.totalQuestion;
  const { correctAnswersCount, wrongAnswersCount } = useCorrectAnswersCount(
    answeredQuestions,
    totalQuestions
  );

  return (
    <div key={number} className={s.results}>
      <div className={s.info}>
        <span className={s.number}>{number + 1}</span>
        <span className={s.answeredQuestions}>
          Cavablanmış Suallar: {answeredQuestions.length}
        </span>
        <span className={s.correct}>
          Düzgün Cavablar: {correctAnswersCount}
        </span>
        <span className={s.wrong}>Yanlış Cavablar: {wrongAnswersCount}</span>
      </div>

      <div className={s.buttonWrapper}>
        <Link href={`result/${number}`}>
          <button className={s.more}>BAX</button>
        </Link>
        <button className={s.delete} onClick={onDelete}>
          SIL
        </button>
      </div>
    </div>
  );
};
