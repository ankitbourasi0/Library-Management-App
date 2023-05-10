import React, { useState } from "react";
import BookService from "../services/BookService";
import { useNavigate } from "react-router-dom";
const AddBook = () => {
  const navigate = useNavigate()
  const [book, setBook] = useState({
    bookname: " ",
    author: " ",
    isbn: "",
    publishedYear: " ",
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setBook({ ...book, [e.target.name]: value });
  };

  const saveBook = (e) => {
    e.preventDefault();
    BookService.saveBook(book)
      .then((response) => {
        console.log(response);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
    }

    const reset = (e) => {
      e.preventDefault();
      setBook({
        bookName: " ",
        author: " ",
        isbn: "",
        publishedYear: " ",
      });
    };
    return (
      <div className="w-full flex justify-center items-center h-screen  ">
        <div className="shadow bg-white p-16 rounded-md w-full max-w-4xl">
          <h1 className="font-semibold font-mono text-6xl text-left mb-6">
            Add book
          </h1>
          <form className="flex flex-col space-y-4  ">
            <div className="flex items-center justify-between  ">
              <label
                htmlFor="bookname"
                className="w-full font-bold text-2xl text-left"
              >
                Name
              </label>
              <input
                type="text"
                id="bookName"
                name="bookName"
                value={book.bookName}
                onChange={(e) => handleChange(e)}
                className="px-4 py-2 bg-gray-100 rounded-md w-full"
                placeholder="Enter the book name"
              />
            </div>

            <div className="flex items-center justify-between ">
              <label
                htmlFor="author"
                className="w-full font-bold text-2xl text-left"
              >
                Author
              </label>
              <input
                type="text"
                id="author"
                name="author"
                value={book.author}
                onChange={(e) => handleChange(e)}
                className="px-4 py-2 bg-gray-100 rounded-md w-full "
                placeholder="Enter Author's name"
              />
            </div>

            <div className="flex items-center justify-between text-left">
              <label htmlFor="isbn" className="w-full font-bold text-2xl">
                ISBN no.
              </label>
              <input
                type="text"
                id="isbn"
                name="isbn"
                value={book.isbn}
                onChange={(e) => handleChange(e)}
                className="px-4 py-2 bg-gray-100 rounded-md w-full"
                placeholder="Book's ISBN Number"
              />
            </div>

            <div className="flex items-center   justify-between text-left">
              <label
                htmlFor="publishedYear"
                className="w-full font-bold text-2xl"
              >
                Published Year
              </label>
              <input
                type="text"
                id="publishedYear"
                name="publishedYear"
                value={book.publishedYear}
                onChange={(e) => handleChange(e)}
                className="px-4 py-2 bg-gray-100 rounded-md w-full"
                placeholder="Year of published"
              />
            </div>

            <div className="flex justify-evenly space-x-6">
              <button
                type="submit"
                onClick={saveBook}
                className="rounded-md w-full bg-blue-600 hover:bg-blue-700 hover:cursor-pointer text-white font-semibold px-6 py-3"
              >
                Save
              </button>
              <button
                onClick={reset}
                className="rounded-md w-full bg-red-600 hover:bg-red-700 hover:cursor-pointer text-white font-semibold px-6 py-3"
              >
                Clear
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  };

export default AddBook;
