import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import DataChart from './Chart';
import { formattedDate } from '../../utility/DateFormatter';
export default function HomePage() {
  const { token } = useSelector((state) => state.auth);
  const [trendingQuiz, setTrendingQuiz] = useState({});
  const totalAmount = 1000; // Placeholder values for demo purposes
  const totalStudents = 50; // Placeholder values for demo purposes
  const courses = ['Course 1', 'Course 2']; // Placeholder values for demo purposes
  const instructorData = []; // Placeholder values for demo purposes
 
  return (
    <div className="flex flex-col  max-w-full h-full bg-[#ededed] p-5">
      <header className="flex flex-col gap-3 mb-5">
        <h2 className="text-3xl font-normal text-richblack-800">Welcome On School Management App</h2>
        <div className="w-full flex justify-end">
          <span className="mr-4 text-red-500 text-xl font-medium">{formattedDate(new Date())}</span>
        </div>
        <select className="w-40 mt-2 rounded-md p-1 outline-none">
          <option>Select An Option</option>
          <option>Month</option>
          <option>Year</option>
        </select>
      </header>
      <section className="my-4 flex h-[300px] space-x-4">
          {/* Render chart / graph */}
          {totalAmount > 0 || totalStudents > 0 ? (
            <DataChart/>
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
                <p className="text-3xl font-semibold text-richblack-50">{courses.length}</p>
              </div>
              <div>
                <p className="text-lg text-richblack-200">Total Teachers Salary</p>
                <p className="text-3xl font-semibold text-richblack-50">{totalStudents}</p>
              </div>
              <div>
                <p className="text-lg text-richblack-200">Total Income</p>
                <p className="text-3xl font-semibold text-richblack-50">Rs. {totalAmount}</p>
              </div>
            </div>
          </div>
      </section>
    </div>
  );
}
