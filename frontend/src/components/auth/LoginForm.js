import React,{useState} from 'react'
import lock from '../../assets/lock.png'
import gmail from '../../assets/gmail.png'
import view from '../../assets/view.png'
import style from '../../styles/components/auth/LoginForm.module.css'
import {toast} from 'react-hot-toast';
import {login} from '../../apis/auth'
import { useDispatch } from 'react-redux'

export default function LoginForm() {
  const dispatch=useDispatch();
  const [showPassword, setShowPassword] = useState(false)
  const [formData,setFormData]=useState({
    email:"",
    password:""
  });
  const onChangeHandler=(event)=>{
    const {name,value}=event.target;
    setFormData(prevData=>({
      ...prevData,
      [name]:value
    }))

  }
  const submitHandler=async (event)=>{
    if(!formData.email||!formData.password){
      toast.error("All field are required");
      return;
    }
     await login(formData,dispatch);
  }
  return (
    <div className={style.container}>
        <h2>Login</h2>
        <div className={style.formcontainer}>
         <div className={style.inputDiv}>
            <img src={gmail} alt='mail'/>
            <input type='text' required placeholder='Email' name='email' value={formData.email} onChange={onChangeHandler}></input>
         </div>
         <div className={style.inputDiv}>
            <img src={lock} alt='password'/>
            <input type={showPassword?"text":"password"} placeholder='Password' name='password' value={formData.password} required onChange={onChangeHandler}></input>
            <img src={view} alt='view' onClick={()=>{setShowPassword(!showPassword)}}/>
         </div>
        </div>
        <button className={style.loginButton} onClick={submitHandler}>Log in</button>
    </div>
  )
}
