import type { AuthLayoutProps } from "./AuthLayout.types";
import styles from "./AuthLayout.module.scss"

const AuthLayout=({children}:AuthLayoutProps)=>{
  return(
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <div className={styles.sideImage}></div>
        <div className={styles.formContainer}>
          <h2>WELCOME TO MEDICARE</h2>
          {children}
        </div>
      </div>
    </div>
  );
}

export default AuthLayout