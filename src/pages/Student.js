import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import BookService from "../services/BookService";
import StudentServices from "../services/StudentServices";

const Student = () => {


  const navigate = useNavigate()
  const [student, setStudent] = useState({
  
    studentName: " ",
    studentMail: " ",
    CourseName: "",
   
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setStudent({ ...student, [e.target.name]: value });
  };

  const saveStudent = (e) => {
    e.preventDefault();
    StudentServices.saveStudent(student)
      .then((response) => {
        console.log(response);
        navigate("/studentlist");
      })
      .catch((error) => {
        console.log(error);
      });
    }

    const reset = (e) => {
      e.preventDefault();
      setStudent({
        studentName: " ",
        studentMail: " ",
        CourseName: "",
      });
    };
  return (
    <div className="w-full flex justify-center items-center h-screen ">
      <div className="shadow bg-white p-16 rounded-md w-full max-w-4xl">
        <h1 className="font-semibold font-mono text-6xl text-left mb-6">Add Student</h1>
        <form className="flex flex-col space-y-4  ">
          <div className="flex items-center justify-between  ">
            <label htmlFor="studentName" className="w-full font-bold text-2xl text-left"> Student Name</label>
            <input
              type="text"
              name="studentName"
              id="studentName"
              value={student.studentName}
              placeholder="Enter student name"

              onChange={(e)=> handleChange(e)}

              className="px-4 py-2 bg-gray-100 rounded-md w-full"
            />
          </div>

          <div className="flex items-center justify-between ">
            <label htmlFor="studentMail" className="w-full font-bold text-2xl text-left">Email</label>
            <input
              type="email"
              name="studentMail"
              id="studentMail"
              value={student.studentMail}
              onChange={(e)=> handleChange(e)}

              className="px-4 py-2 bg-gray-100 rounded-md w-full "
              placeholder="Enter Student email "
            />
          </div>

          <div className="flex items-center justify-between text-left">
            <label htmlFor="CourseName" className="w-full font-bold text-2xl">Course name</label>
            <input
              type="text"
              name="CourseName"
              id="CourseName"
              value={student.CourseName}
              onChange={(e)=> handleChange(e)}
              className="px-4 py-2 bg-gray-100 rounded-md w-full"
              placeholder="Enter Student Course"
            />
          </div>

        

          <div className="flex justify-evenly space-x-6">
            <button onClick={saveStudent} type="submit" className="rounded-md w-full bg-blue-600 hover:bg-blue-700 hover:cursor-pointer text-white font-semibold px-6 py-3">
              Save
            </button>
            <button onClick={reset} className="rounded-md w-full bg-red-600 hover:bg-red-700 hover:cursor-pointer text-white font-semibold px-6 py-3">
              Clear
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Student;
