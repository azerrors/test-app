'use client';

import React from 'react';
import { QuestionProp } from '@/types/types';

import s from './style.module.scss';
import Link from 'next/link';
import clsx from 'clsx';
import { deleteAllItemsFromLocalStorage } from '@/helpers/deleteAllItemsFromLocalStorage';
import { useRouter } from 'next/navigation';

interface SavedQuestionsInfoProps {
  savedQuestions: QuestionProp[] | undefined;
}

export const SavedQuestionsInfo = ({
  savedQuestions,
}: SavedQuestionsInfoProps) => {
  const router = useRouter();

  const handleClick = () => {
    router.replace('/');
    deleteAllItemsFromLocalStorage('saved');
  };

  return (
    <div className={s.wrapper}>
      <div className={s.totalSavedQuestions}>
        <h3>Toplam Suallar</h3>
        <span>{savedQuestions?.length}</span>
        <button className={s.btn} onClick={handleClick}>
          Saxlanılan Suallar Sil
        </button>
      </div>

      <div className={s.questionListWrapper}>
        <h3>Yadda Saxlanılan Suallar</h3>

        <div className={s.questionList}>
          {savedQuestions?.map((question, index) => (
            <Link
              className={clsx(s.questionListLink)}
              href={`#${index}`}
              key={index}
            >
              <span>{index + 1}.</span> {question.question}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
