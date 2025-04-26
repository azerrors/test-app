'use client';

import React from 'react';
import { QuestionProp } from '@/types/types';

import s from './style.module.scss';
import Link from 'next/link';
import clsx from 'clsx';
import { deleteAllItemsFromLocalStorage } from '@/helpers/deleteAllItemsFromLocalStorage';
import { useRouter } from 'next/navigation';
import { useQuizStore } from '@/store/quizStore';

interface SavedQuestionsInfoProps {
  savedQuestions: QuestionProp[] | undefined;
}

export const SavedQuestionsInfo = ({
  savedQuestions,
}: SavedQuestionsInfoProps) => {
  const router = useRouter();
  const setOpenQuizModeInSaved = useQuizStore(
    (state) => state.setOpenQuizModeInSaved
  );
  const openQuizModeInSaved = useQuizStore(
    (state) => state.openQuizModeInSaved
  );

  const handleClick = () => {
    router.replace('/');
    deleteAllItemsFromLocalStorage('saved');
  };

  return (
    <div className={s.wrapper}>
      <div className={s.totalSavedQuestions}>
        <h3>Toplam Suallar</h3>
        <span>{savedQuestions?.length}</span>
        <div className={s.btnWrapper}>
          <button className={s.btn1} onClick={handleClick}>
            Saxlanılan Suallar Sil
          </button>
          <Link className={s.btn2} href="/saved-questions/quiz">
            Yaddaşını Yoxla
          </Link>
        </div>
        <button
          type="button"
          className={s.btn2}
          onClick={setOpenQuizModeInSaved}
        >
          {openQuizModeInSaved ? 'Sualları Təkrarla' : 'Sualları Təkrarlama'}
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
