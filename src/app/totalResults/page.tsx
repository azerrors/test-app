'use client';
import React, { useEffect, useState } from 'react';
import s from './style.module.scss';
import { ResultItem } from '@/app/totalResults/components/ResultItem';
import { ResultsProps } from '@/types/types';
import { Header } from '@/components/Header';
import { MainWrapper } from '@/widgets/MainWrapper';

export default function TotalResultsPage() {
  const [totalResults, setTotalResults] = useState<ResultsProps[]>();
  useEffect(() => {
    const storedData = localStorage.getItem('total');
    if (storedData) {
      setTotalResults(JSON.parse(storedData));
    }
  }, []);

  const handleDelete = (index: number) => {
    const updatedData = totalResults?.filter((_, i) => i !== index);
    setTotalResults(updatedData);
    localStorage.setItem('total', JSON.stringify(updatedData));
  };

  return (
    <MainWrapper>
      <Header>İmtahan Nəticələri</Header>
      <div className={s.totalResults}>
        {totalResults?.map((results, index) => (
          <ResultItem
            totalResults={results}
            number={index}
            key={index}
            onDelete={() => handleDelete(index)}
          />
        ))}
      </div>
    </MainWrapper>
  );
}
