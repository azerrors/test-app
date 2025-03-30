'use client';
import React, { useEffect, useState } from 'react';
import { Header } from '@/components/Header';
import { MainWrapper } from '@/widgets/MainWrapper';
import { QuestionItem } from '@/app/saved-questions/components/QuestionItem';
import { QuestionProp } from '@/types/types';

import s from './style.module.scss';
import { SavedQuestionsInfo } from '@/app/saved-questions/components/SavedQuestionsİnfo';

export default function SavedQuestionsPage() {
  const [savedQuestions, setSavedQuestions] = useState<QuestionProp[]>();

  useEffect(() => {
    const data = localStorage.getItem('saved');
    const savedQuestions = data ? JSON.parse(data) : [];
    setSavedQuestions(savedQuestions);
  }, []);

  return (
    <MainWrapper>
      <Header>Yadda Saxlanılan Suallar</Header>
      <div className={s.wrapper}>
        <div className={s.savedQuestionWrapper}>
          {savedQuestions?.map((question, index) => (
            <QuestionItem key={index} questions={question} number={index} />
          ))}
        </div>
        <div className={s.asa}>
          <SavedQuestionsInfo savedQuestions={savedQuestions} />
        </div>
      </div>
    </MainWrapper>
  );
}
