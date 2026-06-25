import { useNavigate, useParams } from 'react-router-dom';
import Button from '../Button/Button';
import styles from './Modal.module.scss'
import type { ModalProps } from "./Modal.type";

const Modal=({formTitle,children}:ModalProps)=>{
  const navigate=useNavigate()
  const {id}=useParams()
  return(
    <div className={styles.modal}>
      <div className={styles.backdrop}>
        <h2>{formTitle}</h2>
        {children}
        <Button variant="Secondary" className={styles.floating} onClick={() => navigate(`/portal/patient/${id}`)}>X</Button>
      </div>
    </div>
  );

}

export default Modal