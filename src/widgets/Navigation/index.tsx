import React from 'react';
import Link from 'next/link';

import s from './syle.module.scss';
import { HomeIcon } from '@/assets/icons/HomeIcon';
import { ResultsIcon } from '@/assets/icons/ResultsIcon';
import { SavedResultIcon } from '@/assets/icons/SavedResultIcon';

export const Navigation = () => {
  return (
    <div className={s.wrapper}>
      <Link href="/" className={s.link}>
        <HomeIcon color="#292929" />
      </Link>
      <Link href="/totalResults" className={s.link}>
        <ResultsIcon color="#292929" />
      </Link>
      <Link href="/saved-questions" className={s.link}>
        <SavedResultIcon color="#292929" />
      </Link>
    </div>
  );
};
