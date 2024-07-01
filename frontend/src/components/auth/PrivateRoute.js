import React from 'react'
import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
export default function PrivateRoute({children}) {
  const {token}=useSelector((state)=>state.auth);
  if(token===null){
    return <Navigate to="/"/>
  }
  else
   return children;
}
