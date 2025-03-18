import React from 'react';

interface MainWrapperProps {
  children: React.ReactNode;
}

import s from './style.module.scss';

export const MainWrapper = ({ children }: MainWrapperProps) => {
  return <div className={s.wrapper}>{children}</div>;
};
