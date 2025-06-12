import React from 'react';
import s from './style.module.scss';
import Link from 'next/link';

export const ChooseQuizCategory = () => {
  return (
    <div className={s.wrapper}>
      <h1>Uyğun Fənnə Aid İmtahanı Seç</h1>
      <div className={s.buttonWrapper}>
        <Link href="/quiz?q=istehsal" className={s.link}>
          Istehsal
        </Link>
        <Link href="/quiz?q=material" className={s.link}>
          Lif
        </Link>
      </div>
    </div>
  );
};
