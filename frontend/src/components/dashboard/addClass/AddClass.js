import React, { useEffect, useState } from 'react';
import classlogo from '../../../assets/addClassForm.png'
import { Link, useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast';
import {getAllTeacher} from '../../../apis/school'
import { useSelector } from 'react-redux';
export default function AddClass() {
  const [teachers,setTeachers]=useState([]);
  const {token}=useSelector(state=>state.auth);
  const navigate=useNavigate()
  const [formdata,setFormData]=useState({
    className:"",
    section:"",
    year:"",
    teacherId:"",
    classFees:""
  })
  const onChangeHandler=(event)=>{
    const {name,value}=event.target;
    setFormData((prev)=>({
      ...prev,
      [name]:value
    }))
  }
  const onSubmitHandler=(event)=>{
    event.preventDefault();
    console.log(formdata.classFees,formdata);
    if(!formdata.className||!formdata.gender||!formdata.section){
      toast.error("All field are required");
      return;
    }

  }

  useEffect(()=>{
     (async ()=>{
        const res=await getAllTeacher(token);
        if(res){
          setTeachers(res);
          return
        }
        toast.error("First Create A teacher")
        navigate('/dashboard/addteacher')
     })()
  },[])
  return (
    <div className='w-[100%] h-[100vh] flex items-center justify-center'>
      <form className='w-[50%] m-auto flex flex-col gap-5 p-5' onSubmit={onSubmitHandler}>
        <h2 className='text-black font-medium text-2xl'>Add Class</h2>
        
        <div className='flex w-[100%]'>
          <label htmlFor='clasname' className='text-black text-lg w-[40%]'>Enter Class Name</label>
          <input id='classname' type='text' className="w-[60%] rounded border-2 border-gray-300 h-7 text-lg text-black font-normal outline-none" placeholder='Enter Class name here' required name='className'  value={formdata.className} onChange={onChangeHandler}/>
        </div>
        <div className='flex w-[100%]'>
          <label htmlFor='section' className='text-black text-lg w-[40%]'>Enter Section</label>
          <input id='section' type='text' className="w-[60%] rounded border-2 border-gray-300 h-7 text-lg text-black font-normal outline-none" placeholder='Enter Section' required name='section' value={formdata.section} onChange={onChangeHandler}/>
        </div>
        <div className='flex w-[100%]'>
          <label htmlFor='year' className='text-black text-lg w-[40%]'>Enter Year</label>
          <input id='year' type='number' className="w-[60%] rounded border-2 border-gray-300 h-7 text-lg text-black font-normal outline-none" placeholder='Enter Year' required name='year' value={formdata.year} onChange={onChangeHandler}/>
        </div>
        <div className='flex w-[100%]'>
          <label htmlFor="teacher" className='text-black text-lg w-[40%]'>Assign Teacher</label>
          <select id="teacher" className='w-[60%] rounded border-2 border-gray-300 h-7 text-lg text-black font-normal outline-none' required name='teacherId' value={formdata.teacherId} onChange={onChangeHandler}>
            <option value="" disabled selected>Select Teacher</option>
            {
              teachers?.map((value,index)=><option value={value._id} key={index}>{value.name}</option>)
            }
          </select>
        </div>
        <div className='flex w-[100%]'>
          <label htmlFor='classfees' className='text-black text-lg w-[40%]'>Enter Class Fees</label>
          <input id='classfees' type='number' className="w-[60%] rounded border-2 border-gray-300 h-7 text-lg text-black font-normal outline-none" placeholder='Enter Class Fees' required name='classFees' value={formdata.classFees} onChange={onChangeHandler}/>
        </div>

        <div className='flex justify-end gap-3'>
          <Link to="/">
            <button className='w-24 h-8 rounded-md border-2 border-gray-300 font-medium text-lg text-gray-600'>Cancel</button>
          </Link>
          <button className="w-24 h-8 bg-red-500 rounded-md text-white font-medium text-lg" type='submit'>Create Class</button>
        </div>
      </form>
      <img src={classlogo}  className='w-[50%] h-[100vh] bg-white'></img>
    </div>
  )
}
