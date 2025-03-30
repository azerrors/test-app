'use client';
import React, { useEffect, useState } from 'react';

import s from './style.module.scss';
import { ResultQuestions } from '@/app/result/[id]/components/ResultDetails/widgets/ResultQuestions';
import { ResultInfo } from '@/app/result/[id]/components/ResultDetails/widgets/ResultInfo';
import { ResultsProps } from '@/types/types';

interface ResultDetailsProp {
  id: number;
}

export const ResultDetails = ({ id }: ResultDetailsProp) => {
  const [lastResult, setLastResult] = useState<ResultsProps>();
  const [showCorrectQuestions, setShowCorrectQuestions] =
    useState<boolean>(false);
  const [showWrongQuestions, setShowWrongQuestions] = useState<boolean>(false);

  useEffect(() => {
    const data = localStorage.getItem('total');
    if (data) {
      const totalResults = JSON.parse(data);
      setLastResult(totalResults[id]);
    }
  }, []);

  return (
    <div className={s.wrapper}>
      <div className={s.left}>
        <ResultQuestions
          lastResult={lastResult}
          showCorrectQuestions={showCorrectQuestions}
          showWrongQuestions={showWrongQuestions}
        />
      </div>
      <div className={s.right}>
        <ResultInfo
          lastResult={lastResult}
          setShowCorrectQuestions={setShowCorrectQuestions}
          setShowWrongQuestions={setShowWrongQuestions}
          showCorrectQuestions={showCorrectQuestions}
          showWrongQuestions={showWrongQuestions}
        />
      </div>
    </div>
  );
};
