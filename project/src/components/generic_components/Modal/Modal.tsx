import styles from './Modal.module.scss'
import type { ModalProps } from "./Modal.type";

const Modal=({formTitle,children}:ModalProps)=>{

  return(
    <div className={styles.modal}>
      <div className={styles.backdrop}>
        <h2>{formTitle}</h2>
        {children}
      </div>
    </div>
  );

}

export default Modal