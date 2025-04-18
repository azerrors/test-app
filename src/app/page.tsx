'use client';
import React, { useState } from 'react';
import { Quiz } from '@/feature/Quiz';
import { ChooseQuizCategory } from '@/feature/ChooseQuizCategory';

export default function Page() {
  const [questionCategory, setQuestionCategory] = useState<string>('');

  return (
    <>
      {questionCategory ? (
        <Quiz questionCategory={questionCategory} />
      ) : (
        <ChooseQuizCategory setQuestionCategory={setQuestionCategory} />
      )}
    </>
  );
}
