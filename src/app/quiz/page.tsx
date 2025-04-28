'use client';

import React, { Suspense } from 'react';
import { Quiz } from '@/feature/Quiz';
import { useSearchParams } from 'next/navigation';

export default function QuizPage() {
  const searchParams = useSearchParams();
  const urlName = searchParams.get('q');

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Quiz questionCategory={urlName || ''} />
    </Suspense>
  );
}
