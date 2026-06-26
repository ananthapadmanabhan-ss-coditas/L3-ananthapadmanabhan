import { useNavigate, useParams } from 'react-router-dom';
import Button from '../Button/Button';
import styles from './Modal.module.scss'
import type { ModalProps } from "./Modal.type";
import { createPortal } from 'react-dom';

const Modal=({formTitle,children}:ModalProps)=>{
  const navigate=useNavigate()
  const root=document.getElementById("modal-root")
  const {id}=useParams()
  return createPortal(
    <div className={styles.modal}>
      <div className={styles.backdrop}>
        <h2>{formTitle}</h2>
        {children}
        <Button variant="Secondary" className={styles.floating} onClick={() => navigate(`/portal/patient/${id}`)}>X</Button>
      </div>
    </div>,
    root!
  );

}

export default Modal