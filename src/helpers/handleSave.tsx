import { QuestionProp } from '@/types/types';
import React from 'react';

export const handleAddToSaved = (
  savedQuestions: QuestionProp[],
  isSaved: boolean,
  setIsSaved: React.Dispatch<React.SetStateAction<boolean>>,
  questions: QuestionProp
) => {
  if (!isSaved) {
    const updated = [...savedQuestions, questions];
    localStorage.setItem('saved', JSON.stringify(updated));
    setIsSaved(true);
  } else {
    const updated = savedQuestions.filter(
      (q: QuestionProp) => q.question !== questions.question
    );
    localStorage.setItem('saved', JSON.stringify(updated));
    setIsSaved(false);
  }
};

export const handleDeleteFromSaved = (
  savedQuestions: QuestionProp[],
  questions: QuestionProp,
  setIsSaved: React.Dispatch<React.SetStateAction<boolean>>
) => {
  if (!savedQuestions) return;

  const updatedData = savedQuestions.filter(
    (saved) => saved.question !== questions.question
  );

  localStorage.setItem('saved', JSON.stringify(updatedData));
  setIsSaved(false);
};
