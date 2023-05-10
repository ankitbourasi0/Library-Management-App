import React from "react";
import { Navigate, useNavigate } from "react-router-dom";

const StudentRow = ({ book,   deleteBook }) => {
  const navigate = useNavigate();

  return (
    <tr>
      <td className="text-left py-4 px-6 whitespace-nowrap ">
        <div className="text-sm text-gray-500">{book.studentName}</div>
      </td>
      <td className="text-left py-4 px-6 whitespace-nowrap ">
        <div className="text-sm text-gray-500">{book.studentMail}</div>
      </td>
      <td className="text-left py-4 px-6 whitespace-nowrap ">
        <div className="text-sm text-gray-500">{book.courseName}</div>
      </td>
    
      <td className="text-right py-4 px-6 whitespace-nowrap font-medium text-sm ">
       
        <a
          onClick={(e, id) => deleteBook(e,book.studentId)}
          className="text-indigo-600 hover:text-indigo-800 px=4 hover:cursor-pointer"
        >
          Delete
        </a>
      </td>
    </tr>
  );
};

export default StudentRow;
