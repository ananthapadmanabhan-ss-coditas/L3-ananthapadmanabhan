import { useGetUserQuery } from '../../../services/authApi/authApi';
import styles from './Header.module.scss'
import logo from "../../../assets/health-care-medical-logo-design-pharmacy-vector-33851979.jpg"
import Button from '../Button/Button';

const Header=()=>{
  const {data}=useGetUserQuery()
  return(
    <div className={styles.header}>
      <div className={styles.imageDiv}>
        <img src={logo} alt="" />
        <h1>MEDICARE</h1>
      </div>
      <div className={styles.userDiv}>
        <h3>{data.email}</h3>
        <Button>Logout</Button>
      </div>
    </div>
  );
}

export default Header