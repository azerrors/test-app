'use client';

import { useEffect, useState } from 'react';
import { QuestionProp } from '@/types/types';

export const useSavedQuestions = (questions?: QuestionProp) => {
  const [savedQuestions, setSavedQuestions] = useState<QuestionProp[]>([]);
  const [isSaved, setIsSaved] = useState<boolean>(false);

  useEffect(() => {
    const data = localStorage.getItem('saved');
    if (!data) return;

    try {
      const parsed: QuestionProp[] = JSON.parse(data);
      setSavedQuestions(parsed);
      setIsSaved(parsed.some((q) => q.question === questions?.question));
    } catch (err) {
      console.error('localStorage parse error:', err);
    }
  }, [questions]);

  return { savedQuestions, isSaved, setIsSaved };
};
