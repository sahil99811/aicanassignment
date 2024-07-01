import React from 'react'
import style from '../../../styles/components/dashboard/analytics/Analytics.module.css'
import { useState} from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
export default function Analytics() {

    const { token } = useSelector(state => state.auth);

    const classes=[
        {
            "className":"Nursery",
            "section":"A",
            "year":2002,
            "teacher":"Sahil Patel",
            "studentFees":1000,
            "students":10
        },
        {
            "className":"Nursery",
            "section":"A",
            "year":2002,
            "teacher":"Sahil Patel",
            "studentFees":1000,
            "students":10
        },
        {
            "className":"Nursery",
            "section":"A",
            "year":2002,
            "teacher":"Sahil Patel",
            "studentFees":1000,
            "students":10
        },
        {
            "className":"Nursery",
            "section":"A",
            "year":2002,
            "teacher":"Sahil Patel",
            "studentFees":1000,
            "students":10
        },
        {
            "className":"Nursery",
            "section":"A",
            "year":2002,
            "teacher":"Sahil Patel",
            "studentFees":1000,
            "students":10
        },
        {
            "className":"Nursery",
            "section":"A",
            "year":2002,
            "teacher":"Sahil Patel",
            "studentFees":1000,
            "students":10
        },
        {
            "className":"Nursery",
            "section":"A",
            "year":2002,
            "teacher":"Sahil Patel",
            "studentFees":1000,
            "students":10
        },
        {
            "className":"Nursery",
            "section":"A",
            "year":2002,
            "teacher":"Sahil Patel",
            "studentFees":1000,
            "students":10
        },
        {
            "className":"Nursery",
            "section":"A",
            "year":2002,
            "teacher":"Sahil Patel",
            "studentFees":1000,
            "students":10
        },
        {
            "className":"Nursery",
            "section":"A",
            "year":2002,
            "teacher":"Sahil Patel",
            "studentFees":1000,
            "students":10
        },
        {
            "className":"Nursery",
            "section":"A",
            "year":2002,
            "teacher":"Sahil Patel",
            "studentFees":1000,
            "students":10
        },
        {
            "className":"Nursery",
            "section":"A",
            "year":2002,
            "teacher":"Sahil Patel",
            "studentFees":1000,
            "students":10
        }
    ]
    return (
      <>
        <div className={style.container}>
          <div className={style.headingContainer}>
           <h2>Class Analysis</h2>
          </div>
          <div className={style.tableContainer}>
            {/* Table displaying quiz data */}
            {/* {quizzs?.length !== 0 && ( */}
              <table className={style.table}>
                <thead className={style.tableHeading}>
                  <tr className={style.tableHeadingRow}>
                    <th>S.No</th>
                    <th>Class Name</th>
                    <th>Section</th>
                    <th>Year</th>
                    <th>Teacher Name</th>
                    <th>Student fees</th>
                    <th>Total Students</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {classes?.map((quiz, index) => (
                    <tr className={style.tableDataRow} key={quiz._id}>
                      <td>{index + 1}</td>
                      <td>{quiz.className}</td>
                      {/* <td>{formattedDate(quiz?.createdAt)}</td> */}
                      <td>{quiz.section}</td>
                      <td>{quiz.year}</td>
                      <td>{quiz.teacher}</td>
                      <td>{quiz.studentFees}</td>
                      <td>{quiz.students}</td>
                      <td style={{ "color": "black" }}>
                        <Link to={'/dashboard/analytics/123'}>
                          Question Wise Analysis
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            {/* // )} */}
          </div>
        </div>
      </>
    );
}
