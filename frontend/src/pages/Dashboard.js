import React from 'react'
import SideBar from '../components/dashboard/SideBar'
import style from '../styles/pages/Dashboard.module.css'
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux'; // Import useSelector hook from react-redux
// import CreateTask from '../components/dashboard/board/CreateTask';
// import AddPeoplePopup from '../components/dashboard/board/AddPeoplePopup';
// import DeletePopup from '../components/dashboard/board/DeletePopup';
// import LogoutPopup from '../components/dashboard/setting/LogoutPopup';

export default function Dashboard() {
  // Use useSelector to get deletePopup and createPopup states from the Redux store
//   const { deletePopup, createPopup,editPopup,addPeoplePopup,logoutPopup} = useSelector((state) => state.popup);
  return (
    <div className={style.container}>
      <SideBar></SideBar>
      <div className={style.outletContainer}>
                {/* Render the nested routes components */}
                <Outlet />
      </div>
      {/* Conditionally render a background overlay if deletePopup or createPopup is true */}
      {/* {(deletePopup || createPopup || editPopup ||addPeoplePopup||logoutPopup) && (
               <div className={style.backgroundColor}></div> 
       )} */}
       
    </div>
  )
}
