import React from 'react';
import { ResultDetails } from '@/app/result/[id]/components/ResultDetails';
import { MainWrapper } from '@/widgets/MainWrapper';

interface ResultsPageProps {
  params: {
    id: string;
  };
}

export default function ResultsPage({ params }: ResultsPageProps) {
  const id = Number(params.id);

  return (
    <MainWrapper>
      <ResultDetails id={id} />
    </MainWrapper>
  );
}
