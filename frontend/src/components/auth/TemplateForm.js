import React from 'react'
import style from '../../styles/components/auth/TemplateForm.module.css'
import art from '../../assets/art.png'
export default function TemplateForm() {
  return (
    <div className={style.container}>
         <img src={art} alt='Auth_Logo'></img>
         <div className={style.lowerContainer}>
          <span>just a couple of clicks and we start</span>
         </div>
    </div>
  )
}
