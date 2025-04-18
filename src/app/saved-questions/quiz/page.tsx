'use client';

import React from 'react';
import { Quiz } from '@/feature/Quiz';
import { useSavedQuestions } from '@/hooks/useSavedQuestions';

export default function SavedQuizPage() {
  const { savedQuestions } = useSavedQuestions();

  if (!savedQuestions || savedQuestions.length === 0) {
    return <p>Yüklənir və ya sual yoxdur...</p>;
  }

  return <Quiz questionData={savedQuestions} />;
}
