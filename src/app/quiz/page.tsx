import React from 'react';
import { Quiz } from '@/feature/Quiz';

interface QuizPageProps {
  searchParams: { [key: string]: string | undefined };
}

export default function QuizPage({ searchParams }: QuizPageProps) {
  const urlName = searchParams.q;

  return <Quiz questionCategory={urlName} />;
}
