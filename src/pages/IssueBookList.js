import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import IssueBookServices from "../services/IssueBookServices";
import IssueBookRow from "../components/IssueBookRow";

const IssueBookList = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [books, setBooks] = useState(null);
  const [returnedBook, setReturnedBook] = useState(null);
  useEffect(() => {
   
    fetchData();
    fetchReturned();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await IssueBookServices.getAllIssuedBook();

      console.log(response.data);
      setBooks(response.data);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };
  const returnBook = (e, id) => {
    e.preventDefault();
    console.log(id, "iddddddddd");
    IssueBookServices.ReturnIssuedBook(id).then((res) => {
      fetchReturned();
      fetchData()
      setBooks((prevElemet) => {
        return prevElemet.filter((book) => book.id !== id);
      });
    });
  };

  const fetchReturned = async () => {
    setLoading(true);
    try {
      const returned = await IssueBookServices.getAllReturnedBook();

      console.log(returned.data);
      setReturnedBook(returned.data);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  return (
    <div className="container mx-auto my-8 px-16">
      <div className="flex shadow border-b ">
        <table className="min-w-full  ">
          <thead className="bg-gray-50  ">
            <tr className="">
              <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                Book Name
              </th>
              <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                Student Name
              </th>
              <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                Issue Date
              </th>

              <th className="text-right font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                Actions
              </th>
            </tr>
          </thead>
          {!loading && books && (
            <tbody className="bg-white ">
              {books.map((books) => (
                <IssueBookRow
                  returnBook={returnBook}
                  book={books}
                  key={books.id}
                />
              ))}
            </tbody>
          )}
        </table>
      </div>

      <div className="flex shadow border-b py-16 flex-col">
        <p className="text-3xl text-white font-bold ">Returned Book </p>
        <table className="min-w-full  ">
          <thead className="bg-gray-50  ">
            <tr className="">
              <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                Book Name
              </th>
              <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                Student Name
              </th>
              <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                Issue Date
              </th>
            </tr>
          </thead>
          {!loading && returnedBook &&  (
            <tbody className="bg-white ">
              {returnedBook.map((books) => (
                <tr>
                  <td className="text-left py-4 px-6 whitespace-nowrap ">
                    <div className="text-sm text-gray-500">
                      {books.bookName}
                    </div>
                  </td>
                  <td className="text-left py-4 px-6 whitespace-nowrap ">
                    <div className="text-sm text-gray-500">
                      {books.studentname}
                    </div>
                  </td>
                  <td className="text-left py-4 px-6 whitespace-nowrap ">
                    <div className="text-sm text-gray-500">
                      {books.issueDate}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          )}
        </table>
      </div>
    </div>
  );
};

export default IssueBookList;
