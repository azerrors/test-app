import React from 'react';
import { Modal } from '@/widgets/Modal';

import s from './style.module.scss';

interface FinishQuizModalProps {
  openModal: boolean;
  handleYesButton: () => void;
  handleNoButton: () => void;
}

export const FinishQuizModal = ({
  openModal,
  handleYesButton,
  handleNoButton,
}: FinishQuizModalProps) => {
  return (
    <Modal className={s.wrapper} openModal={openModal} onClose={handleNoButton}>
      <h1>İmtahanı Bitirmək İstəyirsiz?</h1>
      <div className={s.buttonsWrapper}>
        <button type="button" className={s.yes} onClick={handleYesButton}>
          Bəli
        </button>
        <button className={s.no} onClick={handleNoButton}>
          Xeyr
        </button>
      </div>
    </Modal>
  );
};
