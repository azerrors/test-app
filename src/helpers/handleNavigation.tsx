import React from 'react';
import { QuestionProp, ResultsProps } from '@/types/types';
import { handleAddToResults } from '@/helpers/handleResults';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';

export const handleNavigate = (
  router: AppRouterInstance,
  pathName: string,
  link: string,
  shouldConfirmNavigation: boolean,
  setPendingLink: React.Dispatch<React.SetStateAction<string>>,
  setOpenQuitModal: (value: boolean) => void,
  selectedAnswers: { question: string; answer: string }[],
  randomQuestions: QuestionProp[],
  data: ResultsProps[] | undefined
) => {
  if (pathName === link) return;

  if (shouldConfirmNavigation) {
    setPendingLink(link);
    setOpenQuitModal(true);
  } else {
    router.push(link);
  }

  if (selectedAnswers.length !== 0) {
    handleAddToResults(data, randomQuestions, selectedAnswers);
  }
};
