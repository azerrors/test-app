'use client';

import React from 'react';
import s from './style.module.scss';
import { ResultItem } from '@/app/totalResults/components/ResultItem';
import { Header } from '@/components/Header';
import { MainWrapper } from '@/widgets/MainWrapper';
import { handleDelete } from '@/helpers/handleResults';
import { useResults } from '@/hooks/useResults';
import { SimpleImage } from '@/components/SimpleImage';
import NotFoundImage from '@/assets/images/notFound2.jpg';
import clsx from 'clsx';

export default function TotalResultsPage() {
  const { totalResults, setTotalResults } = useResults();

  return (
    <MainWrapper>
      <Header>İmtahan Nəticələri</Header>
      <div
        className={clsx(s.totalResults, !totalResults?.length && s.haveResult)}
      >
        {totalResults?.length ? (
          totalResults?.map((results, index) => (
            <ResultItem
              totalResults={results}
              number={index}
              key={index}
              onDelete={() =>
                handleDelete(totalResults, setTotalResults, index)
              }
            />
          ))
        ) : (
          <div className={s.wrapper}>
            <SimpleImage
              src={NotFoundImage.src}
              className={s.image}
              width={400}
              height={400}
            />
            <h3 className={s.notFoundText}>Edilmiş Sınaq Yoxdur</h3>
          </div>
        )}
      </div>
    </MainWrapper>
  );
}
