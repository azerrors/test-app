import React from 'react';
import { Modal } from '@/widgets/Modal';

import s from './style.module.scss';

interface FinishQuizModalProps {
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  handleYesButton: () => void;
}

export const FinishQuizModal = ({
  setOpenModal,
  handleYesButton,
}: FinishQuizModalProps) => {
  const handleNoButtonClick = () => {
    setOpenModal(false);
  };

  return (
    <Modal className={s.wrapper}>
      <h1>Imtahani Bitirmek Isteyirsiz?</h1>
      <div className={s.buttonsWrapper}>
        <button type="button" className={s.yes} onClick={handleYesButton}>
          Bəli
        </button>
        <button className={s.no} onClick={handleNoButtonClick}>
          Xeyr
        </button>
      </div>
    </Modal>
  );
};
