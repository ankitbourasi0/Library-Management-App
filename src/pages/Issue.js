import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import Select from "react-select";
import BookService from "../services/BookService";

import { InputLabel, MenuItem } from "@mui/material";
import { Select } from "@mui/material";
import StudentServices from "../services/StudentServices";
import IssueBookServices from "../services/IssueBookServices";

const Issue = () => {

    const [filtered, setFiltered] = useState("")
//   const handleChangeOfField = (e) => {
//     setFiltered({ ...student, [e.target.name]: e.target.value });
//   };
 
const handleChangestudent = (e)=>{
    setStudentname(e.target.value)

}
const handleChangebookName = (e)=>{
    setbookName(e.target.value)
}
const handleChangedate = (e)=>{
    setIssueDate(e.target.value)
}

  const navigate = useNavigate();
  const [student, setStudent] = useState([]);
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [bookName, setbookName] = useState("")
  const [StudentName,setStudentname] = useState("")
  const [issueDate,setIssueDate] = useState("")
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await BookService.getBookAllBook();
        console.log(response.data);
        setBooks(response.data);
        console.log(books);

        const studentresponse = await StudentServices.getBookAllStudent();
        setStudent(studentresponse.data)
        console.log(student);

      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

 

  const saveIssueBook = (e) => {
    e.preventDefault();
    console.log(bookName,issueDate,StudentName)

    IssueBookServices.saveIssueBook(bookName,issueDate,StudentName)
      .then((response) => {
        console.log(response);
        console.log(bookName,issueDate,StudentName)
        alert("Issued Book Successfully")
        reset()
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const reset = (e) => {
    e.preventDefault();
    setbookName(" ")
    setStudentname(" ")
    setIssueDate(" ")
  };

  return (
    <div className="w-full flex justify-center items-center h-screen  ">
      <div className="shadow bg-white p-16 rounded-md w-full max-w-4xl">
        <h1 className="font-semibold font-mono text-6xl text-left mb-6">
          Issue Book
        </h1>
        <form onSubmit={saveIssueBook} action="submit" className="flex flex-col space-y-4  ">
          <div className="flex items-center justify-between  ">
            <label
              htmlFor="bookName"
              className="w-full font-bold text-2xl text-left"
            >
              Book Name
            </label>
           

            <Select
                name="bookName"
                value={bookName}
              label="Books"
              fullWidth
              onChange={(e)=>handleChangebookName(e)}
            >
              {books.map((e) => (
                <MenuItem value={e.bookName}>{e.bookName}</MenuItem>
              ))}
            </Select>
          </div>

          <div className="flex items-center justify-between ">
            <label
              htmlFor="Studentname
              "
              className="w-full font-bold text-2xl text-left"
            >
              Student Name
            </label>
            <Select
              
            name="Studentname"
              value={StudentName}
              label="Student"
              fullWidth
              onChange={(e)=>handleChangestudent(e)}
            >
              {student.map((e) => (
                <MenuItem value={e.studentName}>{e.studentName}</MenuItem>
              ))}
            </Select>
          </div>

          <div className="flex items-center justify-between ">
            <label
              htmlFor="IssueDate"
              className="w-full font-bold text-2xl text-left"
            >
              Issue Date
            </label>
            <input
              type="date"
              id="IssueDate"
              name="IssueDate"
              value={issueDate}
              onChange={(e) =>handleChangedate(e)}
              className="px-4 py-2 bg-gray-100 rounded-md w-full "
              placeholder="Enter Student ID"
            />
          </div>

          <div className="flex justify-evenly space-x-6">
            <button
              type="submit"
              onClick={(e)=>saveIssueBook(e)}
              className="rounded-md w-full bg-blue-600 hover:bg-blue-700 hover:cursor-pointer text-white font-semibold px-6 py-3"
            >
              Issue
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

export default Issue;
