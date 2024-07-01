import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import toast from 'react-hot-toast'
import student from '../../../assets/addStudentForm.jpg'
export default function AddStudent() {
  const [formdata,setFormData]=useState({
    name:"",
    gender:"",
    dob:"",
    phoneno:"",
    email:"",
    address:"",
    feespaid:"",
    class:""
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
    console.log(formdata);

    if(!formdata.name||!formdata.dob||!formdata.phoneno||!formdata.email||!formdata.address||!formdata.feespaid||!formdata.class){
      toast.error("All field are required");
      return;
    }

  }
  return (
    <div className='w-[100%] h-[100vh] flex items-center justify-center'>
      <form className='w-[50%] m-auto flex flex-col gap-3 p-5' onSubmit={onSubmitHandler}>
        <h2 className='text-black font-medium text-2xl'>Add Student</h2>
        
        <div className='flex w-[100%]'>
          <label htmlFor='name' className='text-black text-lg w-[40%]'>Enter Student Name</label>
          <input id='name' type='text' className="w-[60%] rounded border-2 border-gray-300 h-7 text-lg text-black font-normal outline-none" placeholder='Enter Student name here' required name='name' value={formdata.name} onChange={onChangeHandler}/>
        </div>
        
        <div className='flex w-[100%]'>
          <label htmlFor="gender" className='text-black text-lg w-[40%]'>Gender</label>
          <select id="gender" className='w-[60%] rounded border-2 border-gray-300 h-7 text-lg text-black font-normal outline-none' required name='gender'  value={formdata.name} onChange={onChangeHandler}>
            <option value="" disabled selected>Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>
        
        <div className='flex w-[100%]'>
          <label htmlFor='dob' className='text-black text-lg w-[40%]'>DOB</label>
          <input type='date' id="dob" className="w-[60%] rounded border-2 border-gray-300 h-7 text-lg text-black font-normal outline-none" required name='dob' value={formdata.dob} onChange={onChangeHandler}/>
        </div>
        
        <div className='flex w-[100%]'>
          <label htmlFor='phone' className='text-black text-lg w-[40%]'>Phone Number</label>
          <input type="number" id="phone" className="w-[60%] rounded border-2 border-gray-300 h-7 text-lg text-black font-normal outline-none" placeholder='Enter phone number' required name='phoneno' value={formdata.phoneno} onChange={onChangeHandler}/>
        </div>
        
        <div className='flex w-[100%]'>
          <label htmlFor='email' className='text-black text-lg w-[40%]'>Email</label>
          <input id="email" type='email' className="w-[60%] rounded border-2 border-gray-300 h-7 text-lg text-black font-normal outline-none" placeholder='Enter email' required name='email' value={formdata.email} onChange={onChangeHandler}/>
        </div>
        
        <div className='flex w-[100%]'>
          <label className='text-black text-lg w-[40%]'>Address</label>
          <textarea className="w-[60%] rounded border-2 border-gray-300 h-20 text-lg text-black font-normal outline-none" placeholder='Enter address' required name='address' value={formdata.address} onChange={onChangeHandler}></textarea>
        </div>
        
        <div className='flex w-[100%]'>
          <label htmlFor='feespaid' className='text-black text-lg w-[40%]'>Fees Paid</label>
          <select id="gender" className='w-[60%] rounded border-2 border-gray-300 h-7 text-lg text-black font-normal outline-none' required name='feespaid'  value={formdata.feespaid} onChange={onChangeHandler}>
            <option value="" disabled selected>Select-option</option>
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
        </div>

        <div className='flex w-[100%]'>
          <label htmlFor='class' className='text-black text-lg w-[40%]'>Class</label>
          <input id='class' type='text' className="w-[60%] rounded border-2 border-gray-300 h-7 text-lg text-black font-normal outline-none" placeholder='Enter teacher name here' required name='class' value={formdata.class} onChange={onChangeHandler} />
        </div>

        <div className='flex justify-end gap-3'>
          <Link to="/">
            <button className='w-24 h-8 rounded-md border-2 border-gray-300 font-medium text-lg text-gray-600'>Cancel</button>
          </Link>
          <button className="w-24 h-8 bg-red-500 rounded-md text-white font-medium text-lg" type='submit'>Add Student</button>
        </div>
      </form>
      <img src={student} alt='teacher logo' className='w-[50%] h-[100vh]'></img>
    </div>
  )
}
