import React from 'react';
import { ResultDetails } from '@/app/result/[id]/components/ResultDetails';
import { MainWrapper } from '@/widgets/MainWrapper';

export default async function ResultsPage({
  params,
}: {
  params: Promise<{ id: number }>;
}) {
  const { id } = await params;

  return (
    <MainWrapper>
      <ResultDetails id={id} />
    </MainWrapper>
  );
}
