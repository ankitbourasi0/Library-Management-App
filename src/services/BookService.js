import axios from "axios"

const API_BASE_URL = "http://localhost:8082"

   const saveBook = (book) =>{
        return axios.post(API_BASE_URL + "/book", book)
    }
    const getBookAllBook = () =>{
        return axios.get(API_BASE_URL + "/book")
    };
   const deleteBook = (id) =>{
        return axios.delete(API_BASE_URL + "/books/" + id,)
    }
    const getBookById = (id)=> {
        return axios.get(API_BASE_URL + "/book/" + id);
    };
    const updateBook = (book,id) => {
        return axios.put(API_BASE_URL + "/books/" + id,book)
    };


const  BookService =  {
saveBook,
deleteBook,
getBookById,
getBookAllBook,
updateBook
}
export default  BookService
