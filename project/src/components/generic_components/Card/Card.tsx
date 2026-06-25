import type { CardProps } from "./Card.types"
import styles from './Card.module.scss'

const Card=({children,onClick}:CardProps)=>{
  return(
    <div className={styles.Card} onClick={onClick}>
      {children}
    </div>
  );
}

export default Card