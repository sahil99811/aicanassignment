import React, { useState } from 'react'
import TemplateForm from '../components/auth/TemplateForm'
import LoginForm from '../components/auth/LoginForm'
import SignupForm from '../components/auth/SignupForm'
import style from '../styles/pages/Auth.module.css'
export default function Auth() {
  const [form,setForm]=useState(true)
  return (
    <div className={style.container}>
      <TemplateForm/>
      <div className={style.formContainer}>
        {
        form?<LoginForm />:<SignupForm />
        }
       <div className={style.lowercontainer}>
        <p>{form?"Have no account yet?":"Have an account ?"}</p>
        <button className={style.button} onClick={()=>setForm(!form)}>{form?"Register":"Log in"}</button>
       </div>
      </div>  
    </div>
  )
}
