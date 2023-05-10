import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import BookService from "../services/BookService";
import BooksRow from "../components/BooksRow";

const Books = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [books, setBooks] = useState(null);
  useEffect(() => {
    
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await BookService.getBookAllBook();
      console.log(response.data);

      setBooks(response.data);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  const deleteBook = (e,id)=>{
    e.preventDefault()
    console.log(id,"iddddddddd")
   BookService.deleteBook(id).then((res) => {
      fetchData()
       setBooks((prevElemet) =>{
         return prevElemet.filter((book) => book.id !== id)
       }) 

     
   })
  }
  return (
    <>
      <div className="container mx-auto my-8 px-16">
        <div className="h-12 mb-2">
          <button
            onClick={() => navigate("/addbook")}
            className="rounded bg-slate-600 text-white px-6 py-3  font-semibold"
          >
            Add Books
          </button>
        </div>
        <div className="flex shadow border-b ">
          <table className="min-w-full  ">
            <thead className="bg-gray-50  ">
              <tr className="">
                <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                Book Name
                </th>
                <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                 ISBN
                </th>
                <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                Author
                </th>
                <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                  Published
                </th>
                <th className="text-right font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                Actions
                </th>
              </tr>
            </thead>
            {!loading && (
              <tbody className="bg-white ">
                {books.map((books) => (
                    
                  <BooksRow deleteBook={deleteBook}  book={books} key={books.id} />
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

export default Books;
