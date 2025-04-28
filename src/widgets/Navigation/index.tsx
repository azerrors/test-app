'use client';
import React, { useState } from 'react';
import s from './syle.module.scss';
import { HomeIcon } from '@/assets/icons/HomeIcon';
import { ResultsIcon } from '@/assets/icons/ResultsIcon';
import { SavedResultIcon } from '@/assets/icons/SavedResultIcon';
import { usePathname, useRouter } from 'next/navigation';
import { useQuizStore } from '@/store/quizStore';
import { FinishQuizModal } from '@/feature/FinishQuizModal';
import { useResults } from '@/hooks/useResults';
import { handleNavigate } from '@/helpers/handleNavigation';

export const Navigation = () => {
  const pathName = usePathname();
  const router = useRouter();
  const [pendingLink, setPendingLink] = useState<string>('');
  const openQuitModal = useQuizStore((store) => store.openQuitModal);
  const setOpenQuitModal = useQuizStore((store) => store.setOpenQuitModal);
  const randomQuestions = useQuizStore((store) => store.randomQuestions);
  const selectedAnswers = useQuizStore((store) => store.selectedAnswers);
  const shouldConfirmNavigation =
    pathName === '/saved-questions/quiz' || pathName === '/quiz';
  const { totalResults } = useResults();

  const handleYesButton = () => {
    if (pendingLink) {
      router.push(pendingLink);
    }
    setOpenQuitModal(false);
    setPendingLink('');
  };

  const handleNoButton = () => {
    setOpenQuitModal(false);
    setPendingLink('');
  };

  return (
    <div className={s.wrapper}>
      <button
        onClick={() =>
          handleNavigate(
            router,
            pathName,
            '/',
            shouldConfirmNavigation,
            setPendingLink,
            setOpenQuitModal,
            selectedAnswers,
            randomQuestions,
            totalResults
          )
        }
        className={s.link}
      >
        <HomeIcon color="#292929" />
      </button>
      <button
        onClick={() =>
          handleNavigate(
            router,
            pathName,
            '/totalResults',
            shouldConfirmNavigation,
            setPendingLink,
            setOpenQuitModal,
            selectedAnswers,
            randomQuestions,
            totalResults
          )
        }
        className={s.link}
      >
        <ResultsIcon color="#292929" />
      </button>
      <button
        onClick={() =>
          handleNavigate(
            router,
            pathName,
            '/saved-questions',
            shouldConfirmNavigation,
            setPendingLink,
            setOpenQuitModal,
            selectedAnswers,
            randomQuestions,
            totalResults
          )
        }
        className={s.link}
      >
        <SavedResultIcon color="#292929" />
      </button>

      <FinishQuizModal
        openModal={openQuitModal}
        handleNoButton={handleNoButton}
        handleYesButton={handleYesButton}
      />
    </div>
  );
};
