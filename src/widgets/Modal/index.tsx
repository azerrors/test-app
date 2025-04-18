import React from 'react';
import s from './style.module.scss';
import clsx from 'clsx';

interface ModalProps {
  children: React.ReactNode;
  className?: string;
}

export const Modal = ({ children, className }: ModalProps) => {
  return <div className={clsx(s.wrapper, className)}>{children}</div>;
};
