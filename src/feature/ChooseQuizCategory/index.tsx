import React from 'react';
import s from './style.module.scss';

interface ChooseQuizCategoryProps {
  setQuestionCategory: React.Dispatch<React.SetStateAction<string>>;
}

export const ChooseQuizCategory = ({
  setQuestionCategory,
}: ChooseQuizCategoryProps) => {
  const chooseQuestion = (question: string) => {
    setQuestionCategory(question);
  };
  return (
    <div className={s.wrapper}>
      <h1>Uyğun Fənnə Aid İmtahanı Seç</h1>
      <div className={s.buttonWrapper}>
        <button onClick={() => chooseQuestion('istehsal')}>
          Istehsal Sistemleri
        </button>
        <button onClick={() => chooseQuestion('material')}>Material</button>
      </div>
    </div>
  );
};
