import React, { Suspense } from 'react';
import { Quiz } from '@/feature/Quiz';

interface QuizPageProps {
  searchParams: { q: string };
}

export default async function QuizPage({ searchParams }: QuizPageProps) {
  const urlName = searchParams.q;

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Quiz questionCategory={urlName || ''} />
    </Suspense>
  );
}
