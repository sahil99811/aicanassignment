import { setToken } from '../slices/authSlice';
import axios from 'axios';
import { toast } from 'react-hot-toast';

const backendURL = process.env.REACT_APP_BACKEND_BASE_URL;

export const addTeacher=async (formdata,token)=>{
    try {
       
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
   
        const result = await axios.get(`${backendURL}/school/getallteacher`,{
            headers: {
                Authorization: `Bearer ${token}` // Set authorization header with the token
            }
        });
        if (result.status === 200) {
            return result?.data?.teachers; // Return the result if status is 201
        }
       return false;
    } catch (error) {
        console.log(error);
        toast.error("Something went wrong try again later!"); // Show error toast for any exception
        return false;
    }
}
export const addClass=async (formdata,token)=>{
    try {
        
        const result = await axios.post(`${backendURL}/school/addclass`,formdata, {
            headers: {
                Authorization: `Bearer ${token}` // Set authorization header with the token
            }
        });
        if (result.status === 200) {
            toast.success("Class added succesfully..")
            return result; // Return the result if status is 201
        }
       return false;
    } catch (error) {
        console.log(error);
        toast.error("Something went wrong try again later!"); // Show error toast for any exception
        return false;
    }
}
export const getAllClasses=async(token)=>{
    try {
        const result = await axios.get(`${backendURL}/school/getallclass`,{
            headers: {
                Authorization: `Bearer ${token}` // Set authorization header with the token
            }
        });
        if (result.status === 200) {
          
            return result?.data?.classes; // Return the result if status is 201
        }
       return false; 
    } catch (error) {
        console.log(error);
        toast.error("Something went wrong try again later!"); // Show error toast for any exception
        return false;
    }
}
export const addStudent=async (formdata,token)=>{
    try {
        console.log(token);
        const result = await axios.post(`${backendURL}/school/addstudent`, formdata,{
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

export  const classAnalysises=async (token)=>{
    try {
        const result = await axios.get(`${backendURL}/school/classanalytics`,{
            headers: {
                Authorization: `Bearer ${token}` // Set authorization header with the token
            }
        });
        if (result.status === 200) {
          
            return result?.data?.classes; // Return the result if status is 201
        }
       return false; 
    } catch (error) {
        
    }
}

export const classAnalysis=async (token,id)=>{
    try {
        const result = await axios.get(`${backendURL}/school/classanalytic/${id}`,{
            headers: {
                Authorization: `Bearer ${token}` // Set authorization header with the token
            }
        });
        if (result.status === 200) {
          
            return result?.data?.classes; // Return the result if status is 201
        }
       return false; 
    } catch (error) {
        
    }
}

export const schoolAnalysis=async (filter,token)=>{
    try {
        console.log(filter)
        const result = await axios.get(`${backendURL}/school/analysis?interval=${filter}`,{
            headers: {
                Authorization: `Bearer ${token}` // Set authorization header with the token
            }
        }); 
        if (result.status === 200) {
            console.log(result)
            toast.success(result?.data?.message); // Show success toast
            return result?.data; // Return the result if status is 201
        }
       return false;
    } catch (error) {
        console.log(error);
        toast.error("Something went wrong try again later!"); // Show error toast for any exception
        return false;
    }
}