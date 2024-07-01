import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import DataChart from './Chart';
import { formattedDate } from '../../utility/DateFormatter';
import {schoolAnalysis} from '../../apis/school'
export default function HomePage() {
  const { token } = useSelector((state) => state.auth);
  const [filterData,setFilterData]=useState("");
  const [analysis,setAnalysis]=useState({});
  const onChangeHandler=(event)=>{
    setFilterData(event.target.value);
  }
  async function getSchoolAnalysis(){
      const result= await schoolAnalysis(filterData,token);
      console.log(result);
      setAnalysis(result?.data);
  }
  useEffect(()=>{
      getSchoolAnalysis()
  },[filterData])
  return (
    <div className="flex flex-col  max-w-full h-full bg-[#ededed] p-5">
      <header className="flex flex-col gap-3 mb-5">
        <h2 className="text-3xl font-normal text-richblack-800">Welcome On School Management App</h2>
        <div className="w-full flex justify-end">
          <span className="mr-4 text-red-500 text-xl font-medium">{formattedDate(new Date())}</span>
        </div>
        <select className="w-40 mt-2 rounded-md p-1 outline-none" name='filterData' value={filterData} onChange={onChangeHandler}>
          <option value="" disabled selected>Select An Option</option>
          <option value='month'>Month</option>
          <option value='year'>Year</option>
        </select>
      </header>
      <section className="my-4 flex h-[300px] space-x-4">
          {/* Render chart / graph */}
          {analysis?.totalFeesCollected > 0 || analysis?.totalSalary > 0 ? (
            <DataChart data={analysis}/>
          ) : (
            <div className="flex-1 rounded-md bg-richblack-800 p-6">
              <p className="text-lg font-bold text-richblack-5">Visualize</p>
              <p className="mt-4 text-xl font-medium text-richblack-50">
                Not Enough Data To Visualize
              </p>
            </div>
          )}
          {/* Total Statistics */}
          <div className="flex min-w-[250px] flex-col rounded-md bg-richblack-800 p-6">
            <p className="text-lg font-bold text-richblack-5">Statistics</p>
            <div className="mt-4 space-y-4">
              <div>
                <p className="text-lg text-richblack-200">Total Teachers</p>
                <p className="text-3xl font-semibold text-richblack-50">{analysis?.totalTeachers?analysis?.totalTeachers:0}</p>
              </div>
              <div>
                <p className="text-lg text-richblack-200">Total Teachers Salary</p>
                <p className="text-3xl font-semibold text-richblack-50">{analysis?.totalSalary?analysis.totalSalary:0}</p>
              </div>
              <div>
                <p className="text-lg text-richblack-200">Total Income</p>
                <p className="text-3xl font-semibold text-richblack-50">Rs. {analysis?.totalFeesCollected?analysis.totalFeesCollected:0}</p>
              </div>
            </div>
          </div>
      </section>
    </div>
  );
}
