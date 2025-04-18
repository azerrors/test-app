'use client';

import { useEffect, useState } from 'react';
import { QuestionProp } from '@/types/types';

export const useSavedQuestions = () => {
  const [savedQuestions, setSavedQuestions] = useState<QuestionProp[]>([]);

  useEffect(() => {
    const data = localStorage.getItem('saved');
    if (data) {
      try {
        setSavedQuestions(JSON.parse(data));
      } catch (err) {
        console.error('localStorage parse error:', err);
      }
    }
  }, []);

  return { savedQuestions };
};
