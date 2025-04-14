'use client';
import React, { useEffect, useState } from 'react';
import { Header } from '@/components/Header';
import { MainWrapper } from '@/widgets/MainWrapper';
import { QuestionItem } from '@/app/saved-questions/components/QuestionItem';
import { QuestionProp } from '@/types/types';

import s from './style.module.scss';
import { SavedQuestionsInfo } from '@/app/saved-questions/components/SavedQuestionsİnfo';
import NotFoundImage from '@/assets/images/notFound.jpg';
import { SimpleImage } from '@/components/SimpleImage';
import clsx from 'clsx';

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
        <div
          className={clsx(
            s.savedQuestionWrapper,
            savedQuestions?.length === 0 && s.widthFull
          )}
        >
          {savedQuestions?.length ? (
            savedQuestions?.map((question, index) => (
              <QuestionItem key={index} questions={question} number={index} />
            ))
          ) : (
            <div>
              <SimpleImage
                src={NotFoundImage.src}
                className={s.image}
                width={400}
                height={400}
              />
              <h3 className={s.notFoundText}>Yadda Saxlanılan Sual Yoxdur</h3>
            </div>
          )}
        </div>
        {savedQuestions?.length !== 0 && (
          <div className={s.asa}>
            <SavedQuestionsInfo savedQuestions={savedQuestions} />
          </div>
        )}
      </div>
    </MainWrapper>
  );
}
