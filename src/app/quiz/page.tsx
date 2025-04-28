'use client';

import React from 'react';
import { Quiz } from '@/feature/Quiz';
import { useSearchParams } from 'next/navigation';

export default function QuizPage() {
  const searchParams = useSearchParams();
  const urlName = searchParams.get('q');

  return <Quiz questionCategory={urlName || ''} />;
}
