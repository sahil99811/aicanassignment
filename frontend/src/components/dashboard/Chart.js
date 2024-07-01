import { useState } from "react";
import { Chart, registerables } from "chart.js";
import { Pie } from "react-chartjs-2";

Chart.register(...registerables);

export default function DataChart( analysis ) {
 console.log(analysis)
  const chartDataStudents = {
    labels: ["Total Teachers Salary","Income Generated from student Fees"],
    datasets: [
      {
        data: [`${analysis?.data?.totalSalary}`,`${analysis?.data?.totalFeesCollected}`],
        backgroundColor: ["#FF6384", "#36A2EB"],
      },
      
    ],
  };


  const options = {
    // Options for the Pie chart
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div className="flex flex-1 flex-col gap-y-4 rounded-md bg-richblack-800 p-6">
      <p className="text-lg font-bold text-richblack-5">Visualize</p>
      <div className="space-x-4 font-semibold">
        {/* Button to switch to the "students" chart */}
        <button
          className={"rounded-sm p-1 px-3 transition-all duration-200 bg-richblack-700 text-yellow-50"}
        >
          Expenses
        </button>
      </div>
      <div className="relative mx-auto aspect-square h-full w-full">
        {/* Render the Pie chart based on the selected chart */}
        <Pie
          data={chartDataStudents}
          options={options}
        />
      </div>
    </div>
  );
}
