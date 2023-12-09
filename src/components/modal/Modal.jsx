import { useEffect} from 'react';
import { createPortal } from 'react-dom';
// import styles from './Modal.module.css';
import { ModalStyled, OverlayStyled } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ children, closeModal }) => {

  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        closeModal();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [closeModal]);

  const handleOverlayClick = e => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return createPortal(
    <OverlayStyled  onClick={handleOverlayClick}>
      <ModalStyled>{children}</ModalStyled>
    </OverlayStyled>,
    modalRoot
  );
};
