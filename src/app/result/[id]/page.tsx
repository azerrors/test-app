import React from 'react';
import { ResultDetails } from '@/app/result/[id]/components/ResultDetails';
import { MainWrapper } from '@/widgets/MainWrapper';

interface ResultsPageProps {
  params: {
    id: number;
  };
}

export default async function ResultsPage({ params }: ResultsPageProps) {
  return (
    <MainWrapper>
      <ResultDetails id={params.id} />
    </MainWrapper>
  );
}
