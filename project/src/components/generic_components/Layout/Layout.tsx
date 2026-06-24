import { Outlet } from "react-router-dom";
import styles from './Layout.module.scss'
import Header from "../Header/Header";

const Layout=()=>{
  return(
    <div className={styles.mainContainer}>
      <Header/>
      <Outlet/>
    </div>
  );
}
export default Layout