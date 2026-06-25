import type { SideBarProps } from "./SideBar.types"
import styles from './SideBar.module.scss'
import Button from "../Button/Button";

const SideBar=({options}:SideBarProps)=>{
  return(
    <div className={styles.sidebar}>
      {
        options.map((option)=>
          <Button className={styles.sideBarBtns}>{option}</Button>
        )
      }
    </div>
  );
}
export default SideBar