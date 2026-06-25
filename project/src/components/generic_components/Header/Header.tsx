import { useGetUserQuery, useLogoutUserMutation } from '../../../services/authApi/authApi';
import styles from './Header.module.scss'
import logo from "../../../assets/health-care-medical-logo-design-pharmacy-vector-33851979.jpg"
import Button from '../Button/Button';
import { Navigate, useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Header=()=>{
  const {data}=useGetUserQuery();
  const [logoutState,setLogout]=useState(false)
  // const [logout]=useLogoutUserMutation()
  const handleLogout=async()=>{
    console.log("hi")
    try{
      // const refreshToken=localStorage.getItem('refresh_token')||""
      // await logout({refreshToken})
      localStorage.removeItem("refresh_token")
      localStorage.removeItem("access_token")
      setLogout(true)
    }
    catch(error){
      console.error(error)
    }
  }
  return(
    <div className={styles.header}>
      <div className={styles.imageDiv}>
        <img src={logo} alt="" />
        <h1>MEDICARE</h1>
      </div>
      <div className={styles.userDiv}>
        <h3>{data?.email}</h3>
        <Button variant='Secondary' onClick={handleLogout}>Logout</Button>
      </div>
      {logoutState && <Navigate to="signin" replace/>}
    </div>
  );
}

export default Header