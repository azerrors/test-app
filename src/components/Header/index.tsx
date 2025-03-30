import React from 'react';
import s from './style.module.scss';

interface HeaderProps {
  children: React.ReactNode;
}

export const Header = ({ children }: HeaderProps) => {
  return <h2 className={s.header}>{children}</h2>;
};
