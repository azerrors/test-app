import React from 'react';
import s from './style.module.scss';
import clsx from 'clsx';
import { useModalStyle } from '@/hooks/useModalStyle';

interface ModalProps {
  children: React.ReactNode;
  className?: string;
  openModal?: boolean;
  onClose?: () => void;
}

export const Modal = ({
  children,
  className,
  openModal,
  onClose,
}: ModalProps) => {
  const { modalRef } = useModalStyle(openModal, onClose);
  if (!openModal) return;

  return (
    <div className={s.overlay}>
      <div className={clsx(s.wrapper, className)} ref={modalRef}>
        {children}
      </div>
    </div>
  );
};
