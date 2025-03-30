import React from 'react';

import s from './style.module.scss';

interface ButtonProps {
  children?: React.ReactNode;
}

export const Button = ({ children }: ButtonProps) => {
  return (
    <button type="button" className={s.button}>
      {children}
    </button>
  );
};
