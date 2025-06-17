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
          Material
        </Link>
        <Link href="/quiz?q=iqtisadi" className={s.link}>
          Iqtisadi Ve Sosial
        </Link>
        <Link href="/quiz?q=lif" className={s.link}>
          Lifler
        </Link>
      </div>
    </div>
  );
};
