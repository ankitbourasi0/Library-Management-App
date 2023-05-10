import React from "react";
import { Navigate, useNavigate } from "react-router-dom";

const IssueBookRow = ({ book,   returnBook }) => {
  const navigate = useNavigate();
 
  return (
    <tr>
      <td className="text-left py-4 px-6 whitespace-nowrap ">
        <div className="text-sm text-gray-500">{book.bookName}</div>
      </td>
      <td className="text-left py-4 px-6 whitespace-nowrap ">
        <div className="text-sm text-gray-500">{book.studentname}</div>
      </td>
      <td className="text-left py-4 px-6 whitespace-nowrap ">
        <div className="text-sm text-gray-500">{book.issueDate}</div>
      </td>
    
      <td className="text-right py-4 px-6 whitespace-nowrap font-medium text-sm ">
       
        <a
          onClick={(e, id) => returnBook(e,book.id)}
          className="text-red-500 hover:text-red-600 px=4 hover:cursor-pointer"
        >
          Return
        </a>
      </td>
    </tr>
  );
};

export default IssueBookRow;
