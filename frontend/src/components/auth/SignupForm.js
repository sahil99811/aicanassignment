import React, { useState } from 'react'
import style from '../../styles/components/auth/SignupForm.module.css'
import lock from '../../assets/lock.png'
import gmail from '../../assets/gmail.png'
import view from '../../assets/view.png'
import name from '../../assets/name.png'
import { signup } from '../../apis/auth'
import {formValidation} from '../../utility/FormValidation'
import {toast} from 'react-hot-toast'
import { useDispatch } from 'react-redux'
export default function SignupForm() {
  const [formData,setFormData]=useState({
    name:"",
    email:"",
    password:"",
    confirmPassword:""
  })
  const [error,setError]=useState({
    name:"",
    email:"",
    password:"",
    confirmPassword:""
  })
  const dispatch=useDispatch();
  const [showPassword,setShowPassword]=useState(false);
  const [showConfirmPassword,setShowConfirmPassword]=useState(false);
  const onChangeHandler=(event)=>{
    const {name,value}=event.target;
    setFormData((prevdata)=>({
      ...prevdata,
      [name]:value
    }))
    setError(prevError=>({
      ...prevError,
      [name]:""
    }))
  }
  const submitHandler=async (event)=>{
    if(!formData.name||!formData.email||!formData.password||!formData.confirmPassword){
      toast.error("Please Fill All Field");
      return ;
    }
    setError(formValidation(formData));
    if(error.name||error.email||error.password||error.confirmPassword){
      return;
    }
    const res=await signup(formData,dispatch);
    if(res){
        setFormData({
            name:"",
            email:"",
            password:"",
            confirmPassword:""
        })
    }
  }
  return (
    <div className={style.container}>
      <h2>Register</h2>
      <div className={style.formcontainer}>
         <div className={style.upperInputDiv}>
           <div className={style.inputDiv}>
            <img src={name} alt='Name'/>
            <input type='text' required placeholder='Name' name='name' value={formData.name} onChange={onChangeHandler}></input>
           </div>
           {error.name&&<p>{error.name}</p>}
         </div>
         <div className={style.upperInputDiv}>
          <div className={style.inputDiv}>
            <img src={gmail} alt='gmail'/>
            <input type='text' required placeholder='Email' name='email' value={formData.email} onChange={onChangeHandler}></input>
          </div>
          {error.email&&<p>{error.email}</p>}
         </div>
         <div className={style.upperInputDiv}>
          <div className={style.inputDiv}>
            <img src={lock} alt='confirmpassword'/>
            <input type={showPassword?"text":"password"} required placeholder='Confirm Password' name='password' value={formData.password} onChange={onChangeHandler}></input>
            <img src={view} alt='view' onClick={()=>{setShowPassword(!showPassword)}} />
          </div>
          {error.confirmPassword&&<p>{error.confirmPassword}</p>}
         </div>
         <div className={style.upperInputDiv}>
          <div className={style.inputDiv}>
            <img src={lock} alt='password'/>
            <input type={showConfirmPassword?"text":"password"} required placeholder='Password' name='confirmPassword' value={formData.confirmPassword} onChange={onChangeHandler}></input>
            <img src={view} alt='view'  onClick={()=>setShowConfirmPassword(!showConfirmPassword)}/>
          </div>
          {error.password&&<p>{error.password}</p>}
         </div>
      </div>
      <button className={style.signupButton} onClick={submitHandler}>Register</button>
    </div>
  )
}
