import React from 'react'
import style from '../../styles/components/dashboard/SideBar.module.css'
import prologo from '../../assets/appLogo.png'
import addTeacher from '../../assets/addteacher.png'
import analytics from '../../assets/analytics.png'
import board from '../../assets/dashboard.png'
import logout from '../../assets/Logout.png'
import AddStudent from '../../assets/addstudent.jpg'
import AddClass from '../../assets/addclass.png';
import { sidebarlink } from '../../data/SideBar-link'
import { useLocation ,Link} from 'react-router-dom'
import { useDispatch } from 'react-redux'
import {setToken} from '../../slices/authSlice'
import toast from 'react-hot-toast'
export default function SideBar() {
  const location=useLocation();
  const dispatch=useDispatch()
  const matchDashboard=(path)=>{
    return path===location.pathname;
  }
  const logoutHandler=()=>{
    toast.success("Logout Succesfull...")
    localStorage.clear();
    dispatch(setToken(null))
  }
  return (
    <div className={style.container}>
        <div className={style.optionContainer} style={{marginBottom:"6px"}}>
            <img src={prologo} alt='Prologo'></img>
            <span style={{color:"black",fontWeight:"700"}}>Welcome Back</span>
        </div>
        <Link key={sidebarlink[0].id} to={sidebarlink[0].path}>
         <div className={`${style.optionContainer} ${(matchDashboard(sidebarlink[0].path))&&style.active} `} >
            <img src={board} alt='board'></img>
            <span>DashBoard</span>
         </div>
        </Link>
        <Link key={sidebarlink[1].id} to={sidebarlink[1].path}>
         <div className={`${style.optionContainer} ${(matchDashboard(sidebarlink[1].path))&&style.active}`}> 
            <img src={analytics} alt='analytics'></img>
            <span>Analytics</span>
         </div>
        </Link>
        <Link key={sidebarlink[2].id} to={sidebarlink[2].path}>
         <div className={`${style.optionContainer} ${(matchDashboard(sidebarlink[2].path))&&style.active}`}>
            <img src={addTeacher} alt='add teacher'></img>
            <span>Add Teacher</span>
         </div>
        </Link>
        <Link key={sidebarlink[3].id} to={sidebarlink[3].path}>
         <div className={`${style.optionContainer} ${(matchDashboard(sidebarlink[3].path))&&style.active}`}>
            <img src={AddStudent} alt='add student'></img>
            <span>Add Student</span>
         </div>
        </Link>
        <Link key={sidebarlink[4].id} to={sidebarlink[4].path}>
         <div className={`${style.optionContainer} ${(matchDashboard(sidebarlink[4].path))&&style.active}`}>
            <img src={AddClass} alt='add class'></img>
            <span>Add Class</span>
         </div>
        </Link>
        <button className={style.logoutButton} onClick={logoutHandler}><img src={logout} alt='logout'></img>Log Out</button>
    </div>
  )
}
