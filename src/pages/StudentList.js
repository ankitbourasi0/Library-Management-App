import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import BookService from "../services/BookService";
import BooksRow from "../components/BooksRow";
import StudentServices from "../services/StudentServices";
import StudentRow from "../components/StudentRow";

const StudentList = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [books, setBooks] = useState(null);
  useEffect(() => {
    
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await StudentServices.getBookAllStudent();
      console.log(response.data);

      setBooks(response.data);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  const deleteBook = (e, id) => {
    e.preventDefault();
    console.log(id, "iddddddddd");
    StudentServices.deleteStudent(id).then((res) => {
      console.log(res);
      fetchData()
      setBooks((prevElemet) => {
        return prevElemet.filter((book) => book.id !== id);
      });
    });
  };
  return (
    <>
      <div className="container mx-auto my-8 px-16">
        <div className="h-12 mb-2">
          <button
            onClick={() => navigate("/users")}
            className="rounded bg-slate-600 text-white px-6 py-3  font-semibold"
          >
            Add Student
          </button>
        </div>
        <div className="flex shadow border-b ">
          <table className="min-w-full  ">
            <thead className="bg-gray-50  ">
              <tr className="">
                <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                  Student Name
                </th>
                <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                  Email
                </th>
                <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                  Course
                </th>

                <th className="text-right font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                  Actions
                </th>
              </tr>
            </thead>
            {!loading && (
              <tbody className="bg-white ">
                {books.map((books) => (
                  <StudentRow
                    deleteBook={deleteBook}
                    book={books}
                    key={books.id}
                  />
                ))}
              </tbody>
            )}
          </table>
        </div>
      </div>

      {/* <Outlet/> */}
    </>
  );
};

export default StudentList;
