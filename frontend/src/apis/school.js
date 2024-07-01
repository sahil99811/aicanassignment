import { setToken } from '../slices/authSlice';
import axios from 'axios';
import { toast } from 'react-hot-toast';

const backendURL = process.env.REACT_APP_BACKEND_BASE_URL;

export const addTeacher=async (formdata,token)=>{
    try {
        console.log(formdata,backendURL)
        const result = await axios.post(`${backendURL}/school/addteacher`, formdata,{
            headers: {
                Authorization: `Bearer ${token}` // Set authorization header with the token
            }
        });
        if (result.status === 200) {
            toast.success(result?.data?.message); // Show success toast
            return true; // Return the result if status is 201
        }
       return false;
    } catch (error) {
        console.log(error);
        toast.error("Something went wrong try again later!"); // Show error toast for any exception
        return false;
    }
}

export const getAllTeacher=async (token)=>{
    try {
        console.log(token);
        const result = await axios.get(`${backendURL}/school/getallteacher`,{
            headers: {
                Authorization: `Bearer ${token}` // Set authorization header with the token
            }
        });
        if (result.status === 200) {
            toast.success(result?.data?.message); // Show success toast
            return result?.data?.teachers; // Return the result if status is 201
        }
       return false;
    } catch (error) {
        console.log(error);
        toast.error("Something went wrong try again later!"); // Show error toast for any exception
        return false;
    }
}
export const addClass=async (token,dispatch)=>{
    try {
        
        const result = await axios.get(`${backendURL}/school/addteacher`, {
            headers: {
                Authorization: `Bearer ${token}` // Set authorization header with the token
            }
        });
        if (result.status === 200) {
            toast.success(result?.data?.message); // Show success toast
            return result; // Return the result if status is 201
        }
       return false;
    } catch (error) {
        console.log(error);
        toast.error("Something went wrong try again later!"); // Show error toast for any exception
        return false;
    }
}

export const addStudent=async ()=>{
    try {
        
    } catch (error) {
        
    }
}

export  const classAnalysises=async ()=>{
    try {
        
    } catch (error) {
        
    }
}

export const classAnalysis=async ()=>{
    try {
        
    } catch (error) {
        
    }
}

export const schoolAnalysis=async ()=>{
    try {
        
    } catch (error) {
        
    }
}